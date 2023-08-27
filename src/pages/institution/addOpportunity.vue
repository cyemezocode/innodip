<template>
    <div class="grid grid-cols-10">
        <div class="col-span-12 md:col-span-2 h-full sticky z-49 top-0">
            <menuNav></menuNav>
        </div>
        <div class="col-span-12 md:col-span-8">
        <headerNavVue @userData="getUser"></headerNavVue>
        <div class="p-4 justify-center">
        <div class="flex flex-col md:flex-row flex-wrap items-center justify-between gap-4">
            <div class="flex items-center w-full md:w-auto px-2 md:px-0">
                     
                <svg class="w-16 h-16 text-secondary" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <h1 class="text-4xl text-gray-500">Add Opportunity</h1>
            </div>
            
    <button class="btn-primary" type="button" v-on:click="toggleModal()">
      Add Opportunity
    </button>
        </div>
        </div>
        
        <div class="grid mx-auto">
            <div class="container mx-auto px-4 mb-10 sm:px-8">
                <form id="formData" @submit.prevent="sendData">
                    <input type="text" v-model="datas._id" name="provider">
                <div class="flex flex-col md:flex-row gap-4 w-full">
                    <div class="w-full md:w-1/2">
                        <div class="grid grid-col-1 md:grid-cols-2 gap-4 w-full">
                            <div class="col-span-2">
                                <FormInput placeholder="Opportunity Title" label="Opportunity Title" inputType="text"  required=true small=false name="name"></FormInput>
                            </div>
                            
                        <FormSelect @setCitizen="settingCitizen" placeholder="Select Category" label="Category" inputType="text" value="" name="category" required=true small=false >
                            <option v-for="cat in categories" :key="cat" :value="cat._id">{{cat.name}}</option>
                        </FormSelect>
                        <FormSelect @setCitizen="settingCitizen" placeholder="Select Facility" label="Facility" inputType="text" value="" name="facility" required=true small=false >
                            <option v-for="cat in facilities" :key="cat" :value="cat._id">{{cat.name}}</option>
                        </FormSelect>
                        <FormInput placeholder="Publication Date" label="Publication Date" inputType="date"  required=true small=false name="publicationDate"></FormInput>
                        <FormInput placeholder="Deadline" label="Deadline" inputType="date"  required=true small=false name="deadline"></FormInput>
                        <FormInput placeholder="Number of Applicants" label="Number of Applicants" inputType="number"  required=true small=false name="noOfApplicants"></FormInput>
                        <FormInput placeholder="Location" label="Location" inputType="text"  required=true small=false name="location"></FormInput>
                            
                        <div class="w-full flex flex-col col-span-2">
                            <label class="text-sm mb-2">Description<strong class="text-red-400">*</strong></label>
                            <textarea rows="5" class="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-secondary" placeholder="Description" name="description" required></textarea>
                        </div>
                            <div class="flex items-center col-span-2">
                                <input id="default-checkbox" type="checkbox" @click="isSalary=!isSalary" value="1" name="isSalary" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Salary Offered?</label>
                            </div>
                            
                        <FormSelect v-if="isSalary" placeholder="Select Carrency" label="Carrency" inputType="text" value="" name="salaryCurrency" required=true small=false >
                            <option v-for="cur in currencies" :key="cur" :value="cur.name">{{cur.name}}</option>
                        </FormSelect>
                            <FormInput v-if="isSalary" placeholder="Salary Range" label="Salary Range" inputType="text"  required=true small=false name="salaryRange"></FormInput>
                            <div class="flex items-center col-span-2">
                                <input id="default-checkbox2" @click="isPayable=!isPayable" type="checkbox" value="0" name="isPayable" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="default-checkbox2" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Payment before Apply?</label>
                            </div>
                             
                        <FormSelect v-if="isPayable" placeholder="Select Carrency" label="Carrency" inputType="text" value="" name="payCurrency" required=true small=false >
                            <option v-for="cur in currencies" :key="cur" :value="cur.name">{{cur.name}}</option>
                        </FormSelect>
                            <FormInput v-if="isPayable" placeholder="Payment Amount" label="Payment Amount" inputType="text"  required=true small=false name="payAmount"></FormInput>
                            
                        
                            <div class="w-full flex flex-col col-span-2">
                            <label class="text-sm mb-2">Requirements<strong class="text-red-400">*</strong></label>
                            <textarea rows="5" class="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-secondary" placeholder="Requirements" name="requirement" required></textarea>
                        </div>
                            <div class="w-full flex flex-col col-span-2">
                            <label class="text-sm mb-2">Qualification<strong class="text-red-400">*</strong></label>
                            <textarea rows="5" class="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-secondary" placeholder="Qualification" name="qualification" required></textarea>
                        </div>
                        
                        <div class="w-full flex flex-col col-span-2">
                            <FormInput placeholder="Keywords (Use semicolon (,) to separate keywords)" label="Keywords (Use semicolon (,) to separate keywords)" inputType="text"  required=true small=false name="keyword"></FormInput>
                        </div>
                            <div class="flex gap-4 col-span-2">
                                <FormButton type="submit" label="Add Expirience" bstyle="primary"></FormButton>
                                <FormButton type="button" label="Reset" bstyle="secondary" @click="curExpirience=[]"></FormButton>
                            </div>
                        </div>
                    </div>
                    </div>
                    </form>
            </div>
        </div>
        <pageFooterVue></pageFooterVue>
    </div>
    </div>
</template>

<script>
import headerNavVue from './utils/headerNav.vue'
import menuNav from './utils/menuNav.vue'
import pageFooterVue from '../seeker/utils/pageFooter.vue'
import FormInput from '../utils/FormInput.vue';
import FormButton from '../utils/FormButton.vue';
import FormSelect from '../utils/FormSelect.vue';
import apiService from '../../assets/api/apiService.js'
import AWN from "awesome-notifications"
import $ from 'jquery'

let globalOptions =  {
  alert: "Oops! Something got wrong",

}
globalOptions.labels = {
  alert: "Profile",
}

let signupOption =  {
  success: "Profile",

}
signupOption.labels = {
  alert: "Profile",
}

let notifier = new AWN(globalOptions)

    export default {
        name: 'dashboardPage',
        data(){
            return{
                datas:[],
                isLoaded:false,
                showModal: false,
                categories:[],
                facilities:[],
                isSalary:false,
                isPayable:false,
                currencies:[{name:'RWF'},{name:'USD'}]
            }
        },
        components:{
            headerNavVue,
            menuNav,
            pageFooterVue,
            FormButton,
            FormInput,
            FormSelect
        },
        mounted(){
            apiService.getData('all_opportunity_categories').then((response) => {
            this.categories = response;
            
            });
            apiService.getData('opportunity/facilities').then((response) => {
            this.facilities = response;
            });
        },
        methods: {
            toggleModal: function(){
            this.showModal = !this.showModal;
            },
            sendData() {
            const form = document.getElementById("formData");
            const serializedData = apiService.serializeFormData(form);
            console.log(serializedData);
            apiService.handleForm('industry/add/opportunity',serializedData).then(res=>{
                console.log(res)
                notifier.success(res.message, signupOption),
                $('form').trigger('reset')
            },
                ).catch(error=>{
                    console.log(error)
                });
            },
            getUser(data){
            this.datas = JSON.parse(data);
            this.selectedFilePreview = this.baseUrl+this.datas.picture
            this.isLoaded = true;
            },
        }
    }
</script>

<style scoped>
</style>