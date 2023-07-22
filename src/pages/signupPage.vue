<template>
    <div>
        <headerNavVue></headerNavVue>
        <div class="max-w-screen-lg mx-auto px-3 md:px-0 py-4 justify-center flex flex-col items-center">
            <h1 class="text-4xl mb-6 text-gray-600">Select account category</h1>
            <div class="grid grid-cols-1 md:grid-cols-3 border border-1 mb-5 rounded-lg overflow-hidden w-full">
                <router-link to="/signup/seeker/" class="flex flex-col items-center justify-between hover:bg-gray-200 transition duration-500 ease-in-out  border">
                    <div class="flex justify-center items-center w-full h-full px-8">
                    <img src="../assets/illustrations/seeker.svg" class="w-30">
                    </div>
                    <h1 class="text-4xl py-4">Applicant</h1>
                </router-link>
                <router-link to="/signup/industry/" class="flex flex-col items-center justify-between hover:bg-gray-200 transition duration-500 ease-in-out  border">
                    <div class="flex justify-center items-center w-full h-full px-8">
                    <img src="../assets/illustrations/industry.svg">
                    </div>
                    <h1 class="text-4xl py-4">Industry</h1>
                </router-link>
                <router-link to="/signup/institution/" class="flex w-full flex-col items-center justify-between hover:bg-gray-200 transition duration-500 ease-in-out border">
                    <div class="flex justify-center items-center w-full h-full px-8">
                        <img src="../assets/illustrations/institution.svg">
                    </div>
                    <h1 class="text-4xl py-4">Institution</h1>
                </router-link>
            </div>
            </div>
        <pageFooterVue></pageFooterVue>
    </div>
</template>

<script>
import headerNavVue from './utils/headerNav.vue'
import pageFooterVue from './utils/pageFooter.vue'
    export default {
        data(){
            return{
                username: 'cyemezo',
                datas:[],
                activeCat:''
            }
        },
        components:{
            headerNavVue,
            pageFooterVue,
        },
        mounted(){
            document.title='Signup'
        },
    }
</script>

<style scoped>
.industries .carousel__slide{
    height: 200px;
    margin: 0px 10px;
}
.industries .carousel__pagination-button{
    background: #108a37 !important;
}
.jobCategories .carousel__slide{
    margin: 0px 10px;
    cursor: pointer;
}
</style>