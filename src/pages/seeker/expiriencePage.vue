<template>
    <div class="flex relative">
        <div class="hidden md:block w-full md:w-[20%] sticky top-0 h-[100vh] mobile-menu">
            <menuNav></menuNav>
        </div>
        <div class="w-[100%] md-[80%]">
        <headerNavVue @userData="getUser"></headerNavVue>
        <div class="p-4 justify-center content">
        <div class="flex flex-col md:flex-row flex-wrap items-center justify-between gap-4">
            <div class="flex items-center w-full md:w-auto px-2 md:px-0">
                <svg class="w-16 h-16 text-secondary" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <h1 class="text-4xl text-gray-500">My Experience</h1>
            </div>
            <div class="w-full md:w-auto px-2 md:px-0">
            </div>
        </div>
        </div>
        <div class="grid p-4">
            <form v-if="isLoaded" id="formData" @submit.prevent="sendData">
                <div class="flex flex-col md:flex-row gap-4 w-full">
                    <div class="w-full md:w-1/2">
                        <div class="grid grid-col-1 md:grid-cols-2 gap-4 w-full">
                            <FormInput placeholder="Institution" label="Institution" inputType="text"  required=true small=false name="institution" :value="curExperience.employer "></FormInput>
                            <FormInput placeholder="Position" label="Position" inputType="text"  required=true small=false name="position" :value="curExperience.position"></FormInput>
                            <FormInput placeholder="From" label="From" inputType="date"  required=true small=false name="from" :value="curExperience.from"></FormInput>
                            <FormInput placeholder="To" label="To" inputType="date"  required=true small=false name="to" :value="curExperience.to"></FormInput>
                            <div class="flex items-center col-span-2">
                                <input id="default-checkbox" type="checkbox" @click="youStillWorkHere=!youStillWorkHere" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Current Work here</label>
                            </div>
                            <input type="hidden" name="youStillWorkHere" :value="youStillWorkHere==false?0:1">
                            <FormInput placeholder="Name Of Referee" label="Name Of Referee" inputType="text"  required=true small=false name="NameOfReferee" :value="curExperience.refereeName"></FormInput>
                            <FormInput placeholder="Position Of Referee" label="Position Of Referee" inputType="text"  required=true small=false name="PositionOfReferee" :value="curExperience.refereePosition"></FormInput>
                            <FormInput placeholder="Email Of Referee" label="Email Of Referee" inputType="email"  required=true small=false name="EmailOfReferee" :value="curExperience.refereeEmail"></FormInput>
                            <FormInput placeholder="Phone Of Referee" label="Phone Of Referee" inputType="text"  required=true small=false name="PhoneOfReferee" :value="curExperience.refereePhone"></FormInput>
                            <FormInput placeholder="Skills Gained" label="Skills Gained" inputType="text"  required=true small=false name="SkillsGained" :value="curExperience.gainedSkills"></FormInput>
                            <div class="flex gap-4 col-span-2">
                                <FormButton type="submit" :label="!isEdit?'Add Expirience':'Update Expirience'" bstyle="primary"></FormButton>
                                <!-- <FormButton type="button" label="Reset" bstyle="secondary" @click="curExperience=[]"></FormButton> -->
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col w-full md:w-1/2">
                        <h1 class="text-2xl text-gray-500 mb-4">My Experiences</h1>
                        <div class="card-hover flex justify-between" v-for="(school,index) in datas.workExperience" :key="index">
                            <div class="">
                                <h1><b>Institution</b>: {{ school.employer }}</h1>
                                <h1><b>Postion</b>: {{ school.position }}</h1>
                                <h1><b>Period</b>: {{ school.from }} - {{ school.to }}</h1>
                                <h1><b>Current</b>: {{ school.isCurrent?'Yes':'No' }}</h1>
                            </div>
                            <div class="flex flex-col justify-between">
                                <button type="button" @click="setExperience(index)">Edit</button>
                                <button type="button" @click="deleteExpirience(index)">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>

            <div v-if="!isLoaded">
            </div>
            <div class="flex items-center justify-end" v-if="isLoaded">
                <div class="flex justify-between md:justify-end gap-1 md:gap-4 w-full md:w-auto">
                    <router-link to="/seeker/profile/education"><FormButton type="button" label="&larr; Education" bstyle="normal"></FormButton></router-link>
                    <router-link to="/seeker/profile/certificate"><FormButton type="button" label="Certificate &rarr;" bstyle="normal"></FormButton></router-link>
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
                curExperience:[],
                activeCat:'',
                isLoaded:false,
                isModal: false,
                youStillWorkHere:false,
                isEdit:false,
                dataId:null
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
            setExperience(id){
                this.curExperience = this.datas.workExperience[id]
                this.isEdit = true
                this.dataId=id
                window.scrollTo({ top: 0, behavior: 'smooth' });
            },
            sendData() {
            const form = document.getElementById("formData");
            const serializedData = apiService.serializeFormData(form);
            let path = '';
            if(this.isEdit){
                path = 'applicants/'+this.datas._id+'/update/workExperience/'+this.dataId;
            }else{
                path = 'applicants/'+this.datas._id+'/insert/workExperiance';

            }
            apiService.handleForm(path,serializedData).then(
                response => {
                    $('form').trigger('reset')
                    notifier.success(response.message, signupOption)
                    this.$router.reload()
                })
                .catch(error => {
                    console.error("Error uploading:", error);
                    // notifier.alert(error.response.data.errors.attachment[0], signupOption)
                });
            },
            deleteExpirience(id){
                let data = {
                    "title":'Delete Experience',
                    "message": "Do you realy want to delete <b>"+this.datas.workExperience[id].employer+"</b> experience?",
                    "data":this.datas.workExperience[id],
                    "id":id
                };
                this.modalData = data
                this.isModal=true
            },
            getUser(data){
            this.datas = JSON.parse(data);
            this.selectedFilePreview = this.baseUrl+this.datas.picture
            this.isLoaded = true;
            document.title=this.datas.fname+" Experience Information";
            this.datas.dob = apiService.calendarDate(this.datas.dob)
            },
            modalDecision(modalAction){
                if(modalAction.status){
                    this.isModal=false
                    const id = this.datas._id;
                    apiService.deleteData('applicants/'+id+'/delete/workExperience/'+modalAction.id).then(res => {
                        this.datas.workExperience.splice(modalAction.id, 1);
                        notifier.success(res.message, signupOption)
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