<template>
    <div>
        <headerNavVue></headerNavVue>
        <div class="max-w-screen-lg mx-auto px-3 md:px-0 py-4 justify-center">
            <div class="border border-1 mb-5 rounded-lg overflow-hidden grid w-full grid-cols-1 md:grid-cols-3">
                <div class="flex flex-col items-center justify-center col-span-2">
                    <h2 class="text-3xl my-3">Get Started</h2>
                    <img src="../assets/illustrations/Interview-cuate.svg" class="px-18 homeImg">
                </div>
                <div class="flex flex-col items-center bg-slate-100 border-l border-1">
                    <h1 class="text-3xl text-center border-b border-gray-300 w-full py-3">Sign In</h1>
                    <form @submit.prevent="sendData(this)" class="w-full px-4 py-4" id="formData">
                        <FormInput placeholder="Username" label="Username" inputType="email"  required=true small=false name="email"></FormInput>
                        <FormInput placeholder="Password" label="Password" inputType="password" required=true small=false sub="Forgot Password?" toSub="/reset" name="currentPassword"></FormInput>

                        <div class="flex items-center justify-end">
                            <FormButton type="submit" label="Sign In" bstyle="primary"></FormButton>
                            <!-- <router-link to="/seeker/dashboard/" class="btn-primary">Sign In</router-link> -->
                        </div>
                        
                        <div class="text-sm mt-4">
                            <span>Don't have an account?</span> &nbsp;
                            <router-link to="/signup/" class="link">Register Now</router-link>
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
import FormButton from './utils/FormButton.vue';
// import 'vue3-carousel/dist/carousel.css'
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'\
import apiService from '../assets/api/apiService.js'
import AWN from "awesome-notifications"

let globalOptions =  {
  alert: "Oops! Something got wrong",

}
globalOptions.labels = {
  alert: "Login",
}

let signupOption =  {
  success: "You are successful loged in.",

}
signupOption.labels = {
  alert: "Login In",
}

let notifier = new AWN(globalOptions)
// let nextCallOptions = {}
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
            FormButton,
        },
        methods:{
            sendData(){
            const form = document.getElementById("formData");
            const serializedData = apiService.serializeFormData(form);
            apiService.loginUser(serializedData).then(data=>{

                if(data.message=='success'){
                    if(data.type=='applicant'){
                        localStorage.removeItem('currentUser');
                        localStorage.setItem('currentUser', JSON.stringify(data.data._id));
                        localStorage.setItem('currentType', 'applicant');
                        // console.log(data.data);
                        notifier.success('You are successful loged in.', signupOption)
                        this.$router.push('/seeker/');
                    }
                    if(data.type=='industry'){
                        localStorage.removeItem('currentUser');
                        localStorage.setItem('currentUser', JSON.stringify(data.data._id));
                        localStorage.setItem('currentType', 'industry');
                        // console.log(data.data);
                        notifier.success('You are successful loged in.', signupOption)
                        this.$router.push('/industry/');
                    }
                    if(data.type=='institution'){
                        localStorage.removeItem('currentUser');
                        localStorage.setItem('currentUser', JSON.stringify(data.data._id));
                        localStorage.setItem('currentType', 'institution');
                        // console.log(data.data);
                        notifier.success('You are successful loged in.', signupOption)
                        this.$router.push('/institution/');
                    }
                }

            }
                ).catch(error=>{
                    console.log(error.response.data.message)
                    notifier.alert('Incorrect email or password', globalOptions)
                });
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