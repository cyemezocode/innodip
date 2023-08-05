<template>
    <div>
        <headerNavVue></headerNavVue>
        <div class="max-w-screen-lg mx-auto px-3 md:px-0 py-4 justify-center">
            <div class="border border-1 mb-5 rounded-lg overflow-hidden grid w-full grid-cols-1 md:grid-cols-3">
                <div class="flex flex-col items-center justify-center col-span-2">
                    <h2 class="text-3xl my-3">Create Job Seeker account</h2>
                <img src="@/assets/illustrations/seeker.svg" class="px-18 homeImg">
            </div>
            <div class="flex flex-col items-center  bg-gray-200">
                <h1 class="text-3xl text-center border-b border-gray-300 w-full py-3">Sign Up</h1>
                <form class="w-full px-4 py-4" @submit.prevent="sendData(this)" id="formData">
                    <div class="grid grid-cols-2 gap-2">
                        <FormInput placeholder="Firstname" label="Firstname" inputType="text" value="" name="fname" required=true small=false></FormInput>
                        <FormInput placeholder="Lastname" label="Lastname" inputType="text" value="" name="lname" required=true small=false></FormInput>

                    </div>
                    <FormInput placeholder="Email Address" label="Email Address" inputType="email" value="" name="email" required=true small=false></FormInput>
                    <FormInput placeholder="National ID/Phone Number" label="National ID/Phone Number" inputType="text" value="" name="nidphone" required=true small=false  sub="Phone Number for non-rwandan user" toSub="non-rwandan"></FormInput>
                    <FormInput placeholder="Password" label="Password" inputType="password" value="" name="password" required=true small=false></FormInput>
                    <FormInput placeholder="Confirm Password" label="Confirm Password" inputType="password" name="passwordconf" required=true small=false value=""></FormInput>
                    <div class="flex items-center justify-between">
                        <router-link to="/login/" class="text-xl link">Login Here</router-link>
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
                document.title="Applicant Sign Up"
            });

        },
        methods: {
            sendData(){
            const form = document.getElementById("formData");
            const serializedData = apiService.serializeFormData(form);
            console.log(serializedData);
            apiService.handleForm(serializedData).then(console.log("sent"));
            }
        },
    }
</script>

<style scoped>
.homeImg{
    height: 400px;
}
</style>