<template>
    <div class="flex relative">
        <div class="hidden md:block w-full md:w-[20%] sticky top-0 h-[100vh] mobile-menu">
            <menuNav></menuNav>
        </div>
        <div class="w-[100%] md:w-[80%]">
        <headerNavVue></headerNavVue>
        <div class="p-4 justify-center content">
        <div class="flex flex-col md:flex-row flex-wrap items-center justify-between gap-4">
            <div class="flex items-center w-full md:w-auto px-2 md:px-0">
                <svg class="w-16 h-16 text-secondary" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <h1 class="text-4xl text-gray-500">My Reference</h1>
            </div>
            <div class="w-full md:w-auto px-2 md:px-0">
            </div>
        </div>
        </div>
        <div class="grid p-4">
            <form v-if="isLoaded" id="formData"  @submit.prevent="sendData">
                <div class="flex flex-col md:flex-row  gap-4 w-full">
                    <div class="w-full md:w-1/2">
                        <div class="grid grid-col-1 md:grid-cols-2 gap-4 w-full">
                            <FormInput placeholder="Names" label="Names" inputType="text"  required=true small=false name="name" :value="curRef.name"></FormInput>
                            <FormInput placeholder="Position" label="Position" inputType="text"  required=true small=false name="position" :value="curRef.position"></FormInput>
                            <FormInput placeholder="Telephone" label="Telephone" inputType="text"  required=true small=false name="phone" :value="curRef.phone"></FormInput>
                            <FormInput placeholder="Email Address" label="Email Address" inputType="email"  required=true small=false name="email" :value="curRef.email"></FormInput>
                            <FormInput placeholder="Institution" label="Institution" inputType="text"  required=true small=false name="institution" :value="curRef.institution"></FormInput>
                            
                            <div class="flex gap-4">
                                <FormButton type="submit" label="Add Reference" bstyle="primary"></FormButton>
                                <FormButton type="button" label="Reset" bstyle="secondary" @click="curRef=[]"></FormButton>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col w-full md:w-1/2">
                        <h1 class="text-2xl text-gray-500 mb-4">My References</h1>
                        <div class="card-hover flex justify-between" v-for="school in datas" :key="school.id">
                            <div class="">
                                <h1><b>Name</b>: {{ school.name }}</h1>
                                <h1><b>Postion</b>: {{ school.position }}</h1>
                                <h1><b>Telephone</b>: {{ school.phone }}</h1>
                                <h1><b>Email</b>: {{ school.email }}</h1>
                                <h1><b>Institution</b>: {{ school.institution }}</h1>
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
                    <router-link to="/seeker/profile/education"><FormButton type="button" label="&larr; Education" bstyle="normal"></FormButton></router-link>
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
    export default {
        name: 'educationPage',
        data(){
            return{
                datas:[],
                curRef:[],
                activeCat:'',
                isLoaded:false,
                isModal: false
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
            apiService.getProfile().then(profile => {
                this.datas = profile.profile.refrence;
                this.isLoaded = true
                document.title="Reference Information"
            });

            
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
            
            sendData(){
                const form = document.getElementById("formData");
                const serializedData = apiService.serializeFormData(form);
                console.log(serializedData);
                apiService.handleForm(serializedData).then(console.log("sent"));
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