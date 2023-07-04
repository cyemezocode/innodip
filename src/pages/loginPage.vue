<template>
    <div>
        <headerNavVue></headerNavVue>
        <div class="max-w-screen-lg mx-auto px-3 md:px-0 py-4 justify-center">
            <div class="border border-1 mb-5 rounded-lg overflow-hidden grid w-full grid-cols-1 md:grid-cols-3">
                <div class="flex flex-col items-center justify-center col-span-2">
                    <h2 class="text-3xl my-3">Get Started</h2>
                    <img src="../assets/illustrations/Interview-cuate.svg" class="px-18 homeImg">
                </div>
                <div class="flex flex-col items-center bg-gray-200">
                    <h1 class="text-3xl text-center border-b border-gray-300 w-full py-3">Sign In</h1>
                    <form @submit.prevent="sendData(this)" class="w-full px-4 py-4" id="formData">
                        <FormInput placeholder="Username" label="Username" inputType="email"  required=true small=false name="username"></FormInput>
                        <FormInput placeholder="Password" label="Password" inputType="password" required=true small=false sub="Forgot Password?" toSub="forgot" name="password"></FormInput>
                        <div class="flex items-center justify-between">
                            <router-link to="/signup/" class="text-xl link">Register Here</router-link>
                            <!-- <FormButton type="submit" label="Sign In" bstyle="primary"></FormButton> -->
                            <router-link to="/seeker/dashboard/" class="btn-primary">Sign In</router-link>
                        </div>
                    </form>
                </div>
            </div>
            </div>
            
        <pageFooterVue></pageFooterVue>
    </div>
</template>

<script>
import headerNavVue from './utils/headerNav.vue'
import pageFooterVue from './utils/pageFooter.vue'
import FormInput from './utils/FormInput.vue';
// import FormButton from './utils/FormButton.vue';
// import 'vue3-carousel/dist/carousel.css'
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'\
import apiService from '../assets/api/apiService.js'
    export default {
        data(){
            return{
                username: 'cyemezo',
                datas:[],
                images: [],
                activeCat:'',
                isLoaded:false
            }
        },
        components:{
            headerNavVue,
            pageFooterVue,
            FormInput,
        },
        methods:{
            sendData(){
                const form = document.getElementById('formData');
                const serializedData = apiService.serializeFormData(form);
                console.log(serializedData);
            }
        },
        mounted(){
            document.title='Login'
            
    },
    }
</script>

<style scoped>
.homeImg{
    height: 400px;
}
</style>