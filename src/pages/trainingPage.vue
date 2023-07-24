<template>
    <div>
        <headerNavVue></headerNavVue>
            
        <div class="max-w-screen-lg mx-auto py-4">
        <div class="flex flex-col md:flex-row flex-wrap items-center justify-between gap-4">
            <div class="flex items-center w-full md:w-auto px-2 md:px-0">
                <svg class="w-16 h-16 text-secondary" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                <h1 class="text-4xl text-gray-500">Training</h1>
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
                document.title='Training'

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