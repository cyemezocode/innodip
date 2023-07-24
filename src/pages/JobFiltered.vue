<template>
    <div>
        <headerNavVue></headerNavVue>
            
        <div class="max-w-screen-lg mx-auto py-4">
        <div class="flex flex-col md:flex-row flex-wrap items-center justify-between gap-4">
            <div class="flex items-center w-full md:w-auto px-2 md:px-0">
                <svg class="w-16 h-16 text-secondary" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <h1 class="text-4xl text-gray-500">Jobs</h1>
            </div>
            <div class="w-full md:w-auto px-2 md:px-0">
                <keep-alive>
                    <form action="">
                        <FormInput placeholder="Search..." label="" inputType="text" small="true"></FormInput>
                    </form>
                </keep-alive>
            </div>
        </div>
        </div>
        <div class="grid max-w-screen-lg mx-auto px-3 md:px-0 py-4">
            <div v-if="isLoaded">
                <jobCardVue v-for="job in datas.jobs" :key="job" :datas="JSON.stringify(job)" router="/opportunity" :hasDesc=true></jobCardVue>
            </div>
            <div v-if="!isLoaded">
                <jobCardVueSkeleton v-for="job in 5" :key="job" :hasDesc=true></jobCardVueSkeleton>
            </div>
            <div class="flex items-center justify-center" v-if="isLoaded">
                <FormButton type="button" label="Load More" bstyle="normal"></FormButton>
            </div>
        </div>
        <pageFooterVue></pageFooterVue>
    </div>
</template>

<script>
import headerNavVue from './utils/headerNav.vue'
import pageFooterVue from './utils/pageFooter.vue'
import FormInput from './utils/FormInput.vue';
import FormButton from './utils/FormButton.vue';
import jobCardVue from './utils/jobCard.vue';
import jobCardVueSkeleton from './utils/skeletons/jobCard.vue';
import apiService from '../assets/api/apiService.js'
    export default {
        data(){
            return{
                username: 'cyemezo',
                datas:[],
                activeCat:'',
                isLoaded:false
            }
        },
        components:{
            headerNavVue,
            pageFooterVue,
            FormInput,
            FormButton, 
            jobCardVue,
            jobCardVueSkeleton
        },
        mounted(){
            apiService.getJobs().then(jobsList => {
                this.datas = jobsList;
                this.activeCat = jobsList.categories[0].name
                this.isLoaded = true,
                document.title='Jobs'

            });

        },
        breakpoints: {
      // 700px and up
      640: {
        itemsToShow: 2.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
    }
</script>

<style scoped>
.sliderPane .carousel__slide{
    margin: 0px 10px;
    cursor: pointer;
}
.sliderPane {
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}

.sliderPane::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.sliderPane::-webkit-scrollbar-thumb {
  background-color: transparent;
}

.sliderPane::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>