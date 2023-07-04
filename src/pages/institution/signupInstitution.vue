<template>
    <div>
        <headerNavVue></headerNavVue>
        <div class="max-w-screen-lg mx-auto px-3 md:px-0 py-4 justify-center">
            <div class="border border-1 mb-5 rounded-lg overflow-hidden grid w-full grid-cols-1 md:grid-cols-3">
                <div class="flex flex-col items-center justify-center col-span-2">
                    <h2 class="text-3xl my-3">Create Institution account</h2>
                <img src="@/assets/illustrations/institution.svg" class="px-18 homeImg">
            </div>
            <div class="flex flex-col items-center  bg-gray-200">
                <h1 class="text-3xl text-center border-b border-gray-300 w-full py-3">Sign Up</h1>
                <form class="w-full px-4 py-4">
                    <FormInput placeholder="Username" label="Username" inputType="email" value="" required=true small=false></FormInput>
                    <FormInput placeholder="TIN Number" label="TIN Number" inputType="text" value="" required=true small=false></FormInput>
                    <FormInput placeholder="Password" label="Password" inputType="password" value="" required=true small=false></FormInput>
                    <FormInput placeholder="Confirm Password" label="Confirm Password" inputType="password" required=true small=false value=""></FormInput>
                    <div class="flex items-center justify-between">
                        <router-link to="/" class="text-xl link">Login Here</router-link>
                        <FormButton type="submit" label="Register" bstyle="primary"></FormButton>
                    </div>
                </form>
            </div>
            </div>
        </div>
        <pageFooterVue></pageFooterVue>
    </div>
</template>

<script>
import headerNavVue from '../utils/headerNav.vue'
import pageFooterVue from '../utils/pageFooter.vue'
import FormInput from '../utils/FormInput.vue';
import FormButton from '../utils/FormButton.vue';
import apiService from '../../assets/api/apiService.js'
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
            FormInput,
            FormButton, 
        },
        mounted(){
            apiService.getJobs().then(jobsList => {
                this.datas = jobsList;
                this.activeCat = jobsList.categories[0].name
            });

        },
    }
</script>

<style scoped>
.homeImg{
    height: 400px;
}
</style>