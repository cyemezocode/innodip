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
                <h1 class="text-4xl text-gray-500">My Education</h1>
            </div>
            <div class="w-full md:w-auto px-2 md:px-0">
                
            </div>
        </div>
        </div>
        <div class="grid p-4">
            <form v-if="isLoaded" id="formData" @submit.prevent="sendData" multipart>
                <div class="flex flex-col md:flex-row gap-4 w-full">
                    <div class="w-full md:w-1/2">
                        <div class="grid grid-col-1 md:grid-cols-2 gap-4 w-full">
                            <FormInput placeholder="School" label="School" inputType="text"  required=true small=false name="skul" :value="curSchool.school"></FormInput>
                            <FormInput placeholder="Specialization" label="Specialization" inputType="text"  required=true small=false name="specialization" :value="curSchool.specialization"></FormInput>
                            <FormInput placeholder="Degree" label="Degree" inputType="text"  required=true small=false name="degree" :value="curSchool.degree"></FormInput>
                            <FormInput placeholder="Graduation Year" label="Graduation Year" inputType="text"  required=true small=false name="year" :value="curSchool.graduated"></FormInput>
                            
                            <div class="w-full flex flex-col col-span-2">
                            <FormInput placeholder="Document (It must be in PDF format)" label="Attach Document (It must be in PDF format)" inputType="file"  required=true small=false name="attachement"></FormInput>
                            </div>
                            <div class="flex gap-1 md:gap-4">
                                <FormButton type="submit" label="Add Education" bstyle="primary"></FormButton>
                                <FormButton type="button" label="Reset" bstyle="secondary" @click="curSchool=[]"></FormButton>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col w-full md:w-1/2">
                        <h1 class="text-2xl text-gray-500 mb-4">My Educations</h1>
                        <div class="card-hover flex justify-between" v-for="school in datas.academicProfile" :key="school">
                            <div class="">
                                <h1><b>School</b>: {{ school.school }}</h1>
                                <h1><b>Specialization</b>: {{ school.specialization }}</h1>
                                <h1><b>Degree</b>: {{ school.degreeObtained }}</h1>
                                <h1><b>Graduation Year</b>: {{ school.yearOfGraduation }}</h1>
                                <h1><b>Document</b>: <a :href="baseUrl+school.document" target="_blank" rel="noopener noreferrer">Open Document</a></h1>
                            </div>
                            <div class="flex flex-col justify-between">
                                <button type="button" @click="setSchool(school.id)">Edit</button>
                                <button type="button" @click="deleteSchool(school.id)">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>

            <div v-if="!isLoaded">
            </div>
            <div class="flex items-center justify-end" v-if="isLoaded">
                <div class="flex justify-between md:justify-end gap-1 md:gap-4 w-full md:w-auto">
                    <router-link to="/seeker/profile/"><FormButton type="button" label="&larr; Profile" bstyle="normal"></FormButton></router-link>
                    <router-link to="/seeker/profile/expirience"><FormButton type="button" label="Expirience &rarr;" bstyle="normal"></FormButton></router-link>
                </div>
            </div>
        </form>

        </div>
        <pageFooterVue></pageFooterVue>
    </div>
    <modalPage :data="modalData" v-if="isModal" @modalAction="modalDecision"></modalPage>
    </div>
</template>

<script>
import headerNavVue from '../seeker/utils/headerNav.vue'
import menuNav from '../seeker/utils/menuNav.vue'
import pageFooterVue from '../seeker/utils/pageFooter.vue'
import FormInput from '../utils/FormInput.vue'
import FormButton from '../utils/FormButton.vue'
import modalPage from '../utils/modalPage.vue'
import apiService from '../../assets/api/apiService.js'
import AWN from "awesome-notifications"
import axios from 'axios';
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
        name: 'educationPage',
        data(){
            return{
                datas:[],
                curSchool:[],
                modalData:[],
                activeCat:'',
                isLoaded:false,
                isModal:false,
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
            modalPage, 
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
                this.curSchool = this.datas[id]
            },
            handleFormSubmission(form,id,base) {
            form.addEventListener("submit", function (e) {
                e.preventDefault(); // Prevent the default form submission
                
                const formData = new FormData(form); // Use the submitted form
                const endpoint = base+'api/applicants/'+id+'/insert/academicProfile';
                axios.post(endpoint, formData)
                .then(response => {
                    $('form').tirrger('reset')
                    console.log("Upload successful:", response);
                    notifier.success(response.message, signupOption)
                })
                .catch(error => {
                    console.error("Error uploading:", error);
                    notifier.alert(error.response.data.errors.attachment[0], signupOption)
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
            },
            deleteSchool(id){
                let data = {
                    "title":'Delete Education',
                    "message": "Do you realy want to delete "+this.datas[id].school+" education?",
                    "data":this.datas[id]
                };
                this.modalData = data
                this.isModal=true
            },
            // modalDecision(modalAction){
            //     if(modalAction){
            //         apiService.getProfile().then(profile => {
            //         this.datas = profile.profile.education;
            //         this.isLoaded = true
            //         this.isModal=false
            //     });
            //     }
            //     else{
            //         this.isModal=false
            //     }

            // }
        }
    }
</script>

<style scoped>
.homeImg{
    height: 400px;
}
</style>