<template>
    <div>
        <headerNavVue></headerNavVue>
        <div class="max-w-screen-lg mx-auto px-3 md:px-0 py-4 justify-center">
            <div class="border border-1 mb-5 rounded-lg overflow-hidden grid w-full grid-cols-1 md:grid-cols-3">
                <div class="flex flex-col items-center justify-center col-span-2">
                    <h2 class="text-3xl my-3">Create Institution account</h2>
                <img src="@/assets/illustrations/institution.svg" class="px-18 homeImg">
            </div>
                <div class="flex flex-col items-center bg-slate-100 border-l border-1">
                <h1 class="text-3xl text-center border-b border-gray-300 w-full py-3">Sign Up</h1>
                <form class="w-full px-4 py-4" @submit.prevent="sendData(this)" id="formData">
                    <FormInput name="name" placeholder="Name" label="Name" inputType="text" value="" required=true small=false></FormInput>
                    <FormInput name="email" placeholder="Email Address" label="Email Address" inputType="email" value="" required=true small=false></FormInput>
                    <FormInput name="tin" placeholder="TIN Number" label="TIN Number" inputType="text" value="" required=true small=false></FormInput>
                    <FormInput name="password" placeholder="Password" label="Password" inputType="password" value="" required=true small=false></FormInput>
                    <FormInput name="passwordConf" placeholder="Confirm Password" label="Confirm Password" inputType="password" required=true small=false value=""></FormInput>
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
import AWN from "awesome-notifications"

let globalOptions =  {
  alert: "Oops! Something got wrong",

}
globalOptions.labels = {
  alert: "Sign Up",
}

let signupOption =  {
  success: "Your account is successful created.",

}
signupOption.labels = {
  alert: "Sign Up",
}

let notifier = new AWN(globalOptions)
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
                document.title="Institution Sign Up"
            });

        },
        methods: {
            sendData(){
            const form = document.getElementById("formData");
            const serializedData = apiService.serializeFormData(form);
            apiService.signInstitution(serializedData).then(data=>{

                if(data.message=='success'){
                    notifier.success('Your account is successful created.', signupOption)
                    this.$router.push('/login');
                }
                if(data.errors){
                    notifier.alert(data.errors[0], globalOptions)
                }

            }
                ).catch(error=>{
                    var extra;
                    console.log(error.response.data)
                    var info = error.response.data;
                    if(info.errors.phone){
                        extra = info.errors.phone[0];
                    }
                    if(info.errors.email){
                        extra = info.errors.email[0];
                    }
                    if(info.errors.nid){
                        extra = info.errors.nid[0];
                    }
                    notifier.alert(info.message+'\n'+extra, globalOptions)
                });
            }
        }
    }
</script>

<style scoped>
.homeImg{
    height: 400px;
}
</style>