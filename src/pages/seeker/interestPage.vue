<template>
    <div class="block md:flex relative">
        <div class="hidden md:block w-full md:w-[20%] sticky top-0 h-[100vh] mobile-menu">
            <menuNav></menuNav>
        </div>
        <div class="w-[100%] md-[80%]">
        <headerNavVue @userData="getUser"></headerNavVue>
        <div class="p-4 justify-center content">
        <div class="flex flex-col md:flex-row flex-wrap items-center justify-between gap-4">
            <div class="flex items-center w-full md:w-auto px-2 md:px-0">
                <svg class="w-16 h-16 text-secondary" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <h1 class="text-4xl text-gray-500">My Interest</h1>
            </div>
            <div class="w-full md:w-auto px-2 md:px-0">
            </div>
        </div>
        </div>
        <div class="grid p-4">
            <div v-if="isLoaded">
                    <div class="w-full">
                        <div class="w-full">
                            <div class="flex gap-2 flex-wrap  overflow-hidden mb-4">
                                <router-link to="" v-for="ind in datas" :key="ind.id" class="card-hover dark3 flex flex-col justify-between items-center"  @click="toggleClass"  :class="{'bg-primary': isActive}">
                                    <h1 class="text-xl  text-center text-gray-300">{{ind.name}}</h1>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex items-center justify-between" v-if="isLoaded">
                        <FormButton type="submit" label="Save Interest" bstyle="primary"></FormButton>
                    </div>

            </div>

        </div>
        <pageFooterVue></pageFooterVue>
    </div>
    </div>
</template>

<script>
import headerNavVue from '../seeker/utils/headerNav.vue'
import menuNav from '../seeker/utils/menuNav.vue'
import pageFooterVue from '../seeker/utils/pageFooter.vue'
import FormButton from '../utils/FormButton.vue';
import apiService from '../../assets/api/apiService.js'
    export default {
        name: 'profilePage',
        data(){
            return{
                datas:[],
                activeCat:'',
                isLoaded:false,
                isActive:false
            }
        },
        components:{
            headerNavVue,
            menuNav,
            pageFooterVue,
            FormButton, 
        },
        mounted(){
            apiService.getProfile().then(profile => {
                this.datas = profile.categories;
                this.isLoaded = true,
                console.log(this.datas);

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
            toggleClass() {
            this.isActive = !this.isActive;
            }
        }
    }
</script>

<style scoped>
.image{
    aspect-ratio: 1/1;
}
</style>