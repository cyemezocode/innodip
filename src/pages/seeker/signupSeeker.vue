<template>
    <div>
        <headerNavVue></headerNavVue>
        <div class="max-w-screen-lg mx-auto px-3 md:px-0 py-4 justify-center">
            <div class="border border-1 mb-5 rounded-lg overflow-hidden grid w-full grid-cols-1 md:grid-cols-2">
                <div class="flex flex-col items-center justify-center">
                    <h2 class="text-2xl md:text-3xl p-3 my-3">Create Applicant account</h2>
                <img src="@/assets/illustrations/seeker.svg" class="px-18 homeImg">
            </div>
            <div class="flex flex-col items-center  bg-slate-100 border-l border-1">
                <h1 class="text-3xl text-center border-b border-gray-300 w-full py-3">Sign Up</h1>
                <form class="w-full px-4 py-4" @submit.prevent="sendData(this)" id="formData">
                    <div class="grid grid-cols-2 gap-2">
                        <FormInput placeholder="Firstname" label="Firstname" inputType="text" value="" name="fname" required=true small=false></FormInput>
                        <FormInput placeholder="Lastname" label="Lastname" inputType="text" value="" name="lname" required=true small=false></FormInput>

                    </div>
                    <FormInput placeholder="Email Address" label="Email Address" inputType="email" value="" name="email" required=true small=false></FormInput>
                    <div>
                        <FormSelect @setCitizen="settingCitizen" placeholder="Select Citizenship" label="Citizenship" inputType="text" value="" name="isLocalSignUp" required=true small=false >
                            <option value=1>Rwandan</option>
                            <option value=0>Non-Rwandan</option>
                        </FormSelect>
                        <FormInput v-if="citizen" placeholder="National ID" label="National ID" inputType="text" value="" name="nidOrPhone" required=true small=false></FormInput>
                        <div v-if="!citizen" class="grid grid-cols-2 gap-2">
                            <FormSelect @setCitizen="settingCitizen" placeholder="Select Country" label="Country" inputType="text" value="" name="isLocalSignUp" required=true small=false >
                                <option v-for="cnt in countries" :key="cnt" :value="cnt.phone_code">{{ cnt.country_en }} (+{{cnt.phone_code}})</option>
                            </FormSelect>
                            <FormInput @setNewVal="setNewVal" placeholder="Phone Number" label="Phone Number" inputType="text" value=""  required=true small=false  sub="Phone Number for non-rwandan user" toSub="non-rwandan"></FormInput>
                        </div>
                    </div>
                    <input v-if="!citizen" type="hidden" v-model="phoneNumber" name="nidOrPhone">
                    <FormInput placeholder="Password" label="Password" inputType="password" value="" name="password" required=true small=false></FormInput>
                    <FormInput placeholder="Confirm Password" label="Confirm Password" inputType="password" name="currentPassword" required=true small=false value=""></FormInput>
                    <div class="flex items-center justify-end">
                        <FormButton type="submit" label="Register" bstyle="primary"></FormButton>
                    </div>
                        <div class="text-sm">
                            <span>Have an account?</span>&nbsp;
                            <router-link to="/login/" class="link">Login Here</router-link>
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
import FormSelect from '../utils/FormSelect.vue';
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
            
        data() {
            return{
                username: 'cyemezo',
                datas:[],
                activeCat:'',
                citizen:true,
                isPasswordEqual:false,
                countries:[],
                phoneNumber:'',
                countryCode:''
            }
        },
        components:{
            headerNavVue,
            pageFooterVue,
            FormInput,
            FormSelect,
            FormButton,
        },
        mounted(){
            apiService.getData('all_countries').then((response) => {
            this.countries = response;
            
            });
            document.title="Applicant Sign Up"


        },
        methods: {
            setPhone(){
                // this.phoneNumber = 
            },
            setCountry(data){
                this.countryCode = data
            },
            sendData(){
            const form = document.getElementById("formData");
            const serializedData = apiService.serializeFormData(form);
            apiService.signApplicant(serializedData).then(data=>{

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
            },
            settingCitizen(event){
                if(event.target.value!=''){
                const val = event.target.value=='1'?true:false
                this.citizen = val
                this.countryCode='+'+event.target.value
                }
            },
            setNewVal(event){
                if(event.target.value!=''){
                this.phoneNumber=this.countryCode+event.target.value
                }
            }
        },
    }
</script>

<style scoped>
.homeImg{
    height: 400px;
}
</style>