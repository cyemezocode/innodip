<template>
    <div>
        <headerNavVue></headerNavVue>
            
        <div class="max-w-screen-lg mx-auto py-4">
        <div class="flex flex-col md:flex-row flex-wrap items-center justify-between gap-4">
            <div class="flex items-center w-full md:w-auto px-2 md:px-0">
                <svg class="w-16 h-16 text-secondary" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <h1 class="text-4xl text-gray-500">Opportunities</h1>
            </div>
            <div class="w-full md:w-auto px-2 md:px-0">
                <keep-alive>
                    <form action="">
                        <FormInput @setNewVal="setKeyword" placeholder="Search..." label="" inputType="text" small="true"></FormInput>
                    </form>
                </keep-alive>
            </div>
        </div>
        </div>
        
        <div v-if="isLoaded" class="sliderPane flex gap-2 overflow-x-scroll px-2 md:px-4 lg:px-32 pb-2">
            <div class="mb-2 rounded-3xl py-2 px-4 text-white hover:bg-green-700 whitespace-nowrap cursor-pointer" :class="'all'==activeCat?'bg-green-500':'bg-stone-700'" @click="filterJobs('all')">
            All
            </div>
            <div v-for="(job, index) in categories" :key="index" :datas="JSON.stringify(job)" class="mb-2 rounded-3xl py-2 px-4 text-white hover:bg-green-700 whitespace-nowrap cursor-pointer" :class="job.name==activeCat?'bg-green-500':'bg-stone-700'" @click="filterJobs(index)">
            {{ job.name }}
            </div>
        </div>
        <div v-if="!isLoaded"  class="sliderPane flex gap-2 overflow-x-scroll px-2 md:px-4 lg:px-40 pb-2">
                <div v-for="job in 10" :key="job" class="mb-2 rounded-3xl text-gray-300 h-10 py-2 px-4 hover:bg-gray-300 bg-gray-300">
                    sampletext</div>
        </div>
        <div class="grid max-w-screen-lg mx-auto px-3 md:px-0 py-4">
        <div class="mb-4">Search for <b>{{ keyword!=''?keyword:activeCat }}</b></div>
            <div v-if="isLoaded">
                <div class="alert-info" v-if="datas == ''"><b>Sorry! </b>No opportunity found in this category</div>
                <jobCardVue v-for="job in datas" :key="job" :datas="JSON.stringify(job)" router="/opportunity" :hasDesc=true></jobCardVue>
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
                keyword: '',
                datas:[],
                datasTemp:[],
                activeCat:'all',
                categories:[],
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
            apiService.getData('opportunities').then(res => {
                this.datas = res,
                this.datasTemp = res,
                this.isLoaded = true,
                document.title = 'Opportunities'
                
                apiService.getData('all_opportunity_categories').then(res => {
                    this.categories = res,
                    this.isLoaded = true
                });
            });
        },
        methods:{
            
            async filterJobs(id){
                this.keyword = ''
                apiService.getData('opportunities').then(res => {
                   this.datas = res
                   if(id!='all'){
                       this.activeCat=this.categories[id].name
                       const filteredJobsArray = Object.values(this.datas).filter((value) => {
                       if (value.category && value.category.industryCategoryName === this.activeCat) {
                           return true;
                       }
                       return false;
                       });
                       this.datas = filteredJobsArray;
                       this.datasTemp = filteredJobsArray
                   }else{
                       this.activeCat=id
                   }
               })

           },
           setKeyword(e){
                this.keyword=e.target.value
                this.searchJobs(this.keyword)
           },
           searchJobs(keyword){
            if(keyword!=''){
            const filteredJobsArray = Object.values(this.datas).filter((value) => {
            if (value.name && value.name.toLowerCase().includes(keyword.toLowerCase())) {
                return true;
            }
            return false;
            });
            this.datas = filteredJobsArray;
           }else{
            this.datas = this.datasTemp;
           }
        }

        }
    }
</script>

<style scoped>
</style>