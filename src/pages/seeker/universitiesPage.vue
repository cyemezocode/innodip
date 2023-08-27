<template>
    <div class="block md:flex relative">
      <div
        class="hidden md:block w-full md:w-[20%] sticky top-0 h-[100vh] mobile-menu"
      >
        <menuNav></menuNav>
      </div>
      <div class="w-[100%] md:w-[80%]">
        <headerNavVue @userData="getUser"></headerNavVue>
        <div class="p-4 justify-center">
        <div class="flex flex-col md:flex-row flex-wrap items-center justify-between gap-4">
            <div class="flex items-center w-full md:w-auto px-2 md:px-0">
                <svg class="w-16 h-16 text-secondary" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
                <h1 class="text-4xl text-gray-500">Universities</h1>
            </div>
            <div class="w-full md:w-auto px-2 md:px-0">
                <FormInput placeholder="Search..." label="" inputType="text" small="true"></FormInput>
            </div>
        </div>
        </div>
        
        <div class="grid mx-auto px-4 md:px-4 py-4">
            <div v-if="isLoaded" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <UniversityCardVue v-for="job in datas" :key="job" :datas="JSON.stringify(job)" router="/opportunity" :hasDesc=true></UniversityCardVue>
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
    </div>
</template>

<script>
import headerNavVue from './utils/headerNav.vue'
import menuNav from './utils/menuNav.vue'
import pageFooterVue from './utils/pageFooter.vue'
import FormInput from '../utils/FormInput.vue';
import FormButton from '../utils/FormButton.vue';
import UniversityCardVue from '../utils/universityCard.vue';
import apiService from '../../assets/api/apiService.js'
    export default {
        name: 'dashboardPage',
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
            menuNav,
            pageFooterVue,
            FormInput,
            FormButton, 
            UniversityCardVue,
        },
        mounted(){
          
            apiService.getInstitutions().then(jobsList => {
                this.datas = jobsList;
                // this.activeCat = jobsList.categories[0].name;
                this.isLoaded = true
            });

        },
    }
</script>

<style scoped>
.homeImg{
    height: 400px;
}
</style>