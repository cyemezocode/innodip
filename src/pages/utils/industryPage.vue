<template>
<div class="card-secondary p-0 grid grid-cols-1 relative w-full">
    <div class="w-full bg-gray-700 relative h-36 md:h-48 flex border-b border-gray-300">
        
        <!-- <span class="absolute top-3 right-3 border border-1 px-2 py-1 rounded-lg bg-gray-400 text-white">+</span> -->
        <h1 class="col-span-2 flex absolute left-1/2 top-12 md:top-20 text-3xl translate-x-[-50%] p-1 opacity-[.8] rounded-lg bg-gray-600 text-white z-10 text-center">{{ data.abbreviation }}</h1>
        <img :src="baseUrl+data.banner" alt="." class="w-full h-full object-cover bgCover">
        <div class="col-span-2 flex absolute left-5 top-24">
            <div class="hidden md:flex w-10 h-10 md:w-48 md:h-48 items-center justify-center bg-gray-200 border border-gray-300 rounded-lg overflow-hidden"><img :src="baseUrl+data.logo" alt=""></div>
        </div>
    </div>
    <div class="w-full col-span-8 p-3 pt-5 pl-3 md:pl-56 h-42">
        <h1 class="text-3xl pb-5">{{ data.name }}</h1>

        <h2 class=" text-gray-500 gap-4 flex items-center">
        <svg class="w-5 h-5 text-secondary" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg> Phone: {{ data.phone }}
        </h2>
        <h2 class=" text-gray-500 gap-4 flex items-center">
            <svg class="w-5 h-5 text-secondary"  aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg> Address: {{ data.location }}
        </h2>
        <h2 class=" text-gray-500 gap-4 flex items-center">
            <svg class="w-5 h-5 text-secondary" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg> Website: <a :href="`${data.url}`" target="_blank" rel="noopener noreferrer"> {{ data.url }}</a>
        </h2>
        <div class="flex justify-end">
            <router-link :to="router+'/'+data._id"><FormButton type="button" label="Visit &rarr;" bstyle="normal"></FormButton></router-link>
        </div>
        <p class="w-full" v-html="data.description"></p>
        <div class="flex w-full items-center gap-4 mb-4 mt-4">
                <svg
                  class="w-10 h-10 text-secondary"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <h1 class="text-2xl text-gray-500">Recent Opportunities</h1>
              </div>
              <div v-if="isLoaded">
                        <jobCardVue v-for="job in datas" :key="job" :datas="JSON.stringify(job)" router="/opportunity" :hasDesc=true></jobCardVue>
                    </div>
                    <div v-if="!isLoaded">
                        <jobCardVueSkeleton v-for="job in 5" :key="job" :hasDesc=true></jobCardVueSkeleton>
                    </div>
                    <div class="flex items-center justify-center" v-if="isLoaded">
                        <FormButton type="button" label="Load More" bstyle="normal"></FormButton>
                    </div>
    </div> 
</div>
</template>

<script>
    import apiService from '@/assets/api/apiService';
    import jobCardVue from './jobCard.vue';
    import jobCardVueSkeleton from './skeletons/jobCard.vue';

    export default {
        data(){
            return{
                baseUrl:'http://innodip.rw:8004/',
                isLoaded:false,
                datas:[]
            }
        },
        props:{
            data:Object
        },
        components:{
            jobCardVue,
            jobCardVueSkeleton
        },
        mounted(){
        },
        watch:{
            data(val){
                if (val) {
                    this.isLoaded = true;
                    document.title=this.data.name,
                    apiService.getData('industry/my/opportunities/'+this.data._id).then(res => {
                        this.datas = res.opportunities,
                        this.isLoaded = true
                    });
                } else {
                    this.isLoaded = false;
                }
            }
        }
    }
</script>

<style scoped>

.bgCover{
        background: url(@/assets/images/background.jpg);
        background-size: cover;
    }
</style>