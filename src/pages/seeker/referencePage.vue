<template>
    <div class="flex relative">
        <div class="hidden md:block w-full md:w-[20%] sticky top-0 h-[100vh] mobile-menu">
            <menuNav></menuNav>
        </div>
        <div class="w-[100%] md:w-[80%]">
        <headerNavVue @userData="getUser"></headerNavVue>
        <div class="p-4 justify-center content">
        <div class="flex flex-col md:flex-row flex-wrap items-center justify-between gap-4">
            <div class="flex items-center w-full md:w-auto px-2 md:px-0">
                <svg class="w-16 h-16 text-secondary" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <h1 class="text-4xl text-gray-500">My Certficate</h1>
            </div>
            <div class="w-full md:w-auto px-2 md:px-0">
            </div>
        </div>
        </div>
        <div class="grid p-4">
            <form v-if="isLoaded" id="formData"  @submit.prevent="sendData" enctype="multipart/form-data">
                <div class="flex flex-col md:flex-row  gap-4 w-full">
                    <div class="w-full md:w-1/2">
                        <div class="grid grid-col-1 md:grid-cols-2 gap-4 w-full">
                            <FormInput placeholder="Certificate Title" label="Certificate Title" inputType="text"  required=true small=false name="certificateTitle" :value="curRef.name"></FormInput>
                            <FormInput placeholder="Date Of Award" label="Date Of Award" inputType="date"  required=true small=false name="dateOfAward" :value="curRef.position"></FormInput>
                               
    <div class="w-full flex flex-col col-span-2">
        <label class="text-sm mb-2">Description<strong class="text-red-400">*</strong></label>
        <textarea rows="5" class="w-full appearance-none block bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-secondary" placeholder="Description" name="certificateDescription" required></textarea>
    </div>
    <div class="w-full flex flex-col col-span-2">
                            <FormInput placeholder="Document (It must be in PDF format)" label="Attach Document (It must be in PDF format)" inputType="file"  required=true small=false name="attachmentOfCertificate" :value="curRef.position"></FormInput>
                            </div>
                            <div class="flex gap-4">
                                <FormButton type="submit" label="Add Reference" bstyle="primary"></FormButton>
                                <!-- <FormButton type="button" label="Reset" bstyle="secondary" @click="curRef=[]"></FormButton> -->
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col w-full md:w-1/2">
                        <h1 class="text-2xl text-gray-500 mb-4">My References</h1>
                        <div class="card-hover flex justify-between" v-for="school in datas.awardedCertificates" :key="school.id">
                            <div class="">
                                <h1><b>Title</b>: {{ school.title }}</h1>
                                <h1><b>Date</b>: {{ school.date_awarded }}</h1>
                                <h1><b>Document</b>: <a :href="baseUrl+school.document" target="_blank" rel="noopener noreferrer">Open Document</a></h1>
                            </div>
                            <div class="flex flex-col justify-between">
                                <button type="button" @click="setSchool(school.id)">Edit</button>
                                <button type="button" @click="deleteRef(school.id)">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>

            <div v-if="!isLoaded">
            </div>
            <div class="flex items-center justify-end" v-if="isLoaded">
                <div class="flex justify-between md:justify-end gap-1 md:gap-4 w-full md:w-auto">
                    <router-link to="/seeker/profile/experience"><FormButton type="button" label="&larr; Experience" bstyle="normal"></FormButton></router-link>
                    <router-link to="/seeker/resume"><FormButton type="button" label="Resume &rarr;" bstyle="normal"></FormButton></router-link>
                </div>
            </div>
        </form>
        </div>
        <pageFooterVue></pageFooterVue>
    </div>
    <ModalPage :data="modalData" v-if="isModal" @modalAction="modalDecision"></ModalPage>
    </div>
</template>

<script>
import headerNavVue from '../seeker/utils/headerNav.vue'
import menuNav from '../seeker/utils/menuNav.vue'
import pageFooterVue from '../seeker/utils/pageFooter.vue'
import FormInput from '../utils/FormInput.vue';
import FormButton from '../utils/FormButton.vue';
import ModalPage from '../utils/modalPage.vue'
import apiService from '../../assets/api/apiService.js'
import AWN from "awesome-notifications"
import axios from 'axios';
import $ from 'jquery'

let globalOptions =  {
  alert: "Oops! Something got wrong",

}
globalOptions.labels = {
  alert: "Certificate",
}

let signupOption =  {
  success: "Certificate",

}
signupOption.labels = {
  alert: "Certificate",
}

let notifier = new AWN(globalOptions)

    export default {
        name: 'educationPage',
        data(){
            return{
                datas:[],
                curRef:[],
                activeCat:'',
                isLoaded:false,
                isModal: false,
                baseUrl : 'http://innodip.rw:8004/',
                userId: null
            }
        },
        components:{
            headerNavVue,
            menuNav,
            pageFooterVue,
            FormInput,
            FormButton, 
            ModalPage, 
        },
        mounted(){

            const btn = document.querySelector(".toggleMobile");
            const menu = document.querySelector(".mobile-menu");
            const content = document.querySelector(".content");

            btn.addEventListener("click", () => {
                menu.classList.toggle("hidden");
                content.classList.toggle("content");
            });
        },
        methods:{
            setSchool(id){
                this.curRef = this.datas[id]
            },
            handleFormSubmission(form,id,base) {
            form.addEventListener("submit", function (e) {
                e.preventDefault(); // Prevent the default form submission
                
                const formData = new FormData(form); // Use the submitted form
                const endpoint = base+'api/applicants/'+id+'/insert/awardedCertificate';
                axios.post(endpoint, formData)
                .then(response => {
                    $('form').trigger('reset')
                    console.log("Upload successful:", response.data);
                    notifier.success(response.data.message, signupOption)
                })
                .catch(error => {
                    console.error("Error uploading:", error);
                    notifier.alert(error.response.data.errors.attachmentOfCertificate[1], signupOption)
                });
            });
            },
            sendData() {
                
            const uploadForm = document.getElementById("formData");
            this.handleFormSubmission(uploadForm,this.datas._id,this.baseUrl);
            
            },
            getUser(data){
            this.datas = JSON.parse(data);
            this.selectedFilePreview = this.baseUrl+this.datas.picture
            this.isLoaded = true;
            document.title=this.datas.fname+" Personal Information";
            this.datas.dob = apiService.calendarDate(this.datas.dob)
            this.userId = this.datas._id
            },
            deleteRef(id){
                let data = {
                    "title":'Delete Expirience',
                    "message": "Do you realy want to delete "+this.datas[id].institution+" reference?",
                    "data":this.datas[id]
                };
                this.modalData = data
                this.isModal=true
            },
            modalDecision(modalAction){
                if(modalAction){
                    apiService.getProfile().then(profile => {
                    this.datas = profile.profile.refrence;
                    this.isLoaded = true
                    this.isModal=false
                });
                }
                else{
                    this.isModal=false
                }

            }
        }
    }
</script>

<style scoped>
.homeImg{
    height: 400px;
}
</style>