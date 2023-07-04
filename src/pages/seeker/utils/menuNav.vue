<template>
    <div class="bg-gray-200 border-r border-gray-400 h-[100vh] flex flex-col items-center pt-4 sticky top-0 mobile-menu">
            <div class="block md:hidden absolute top-5 right-5 text-3xl cursor-pointer toggleMobile">&times;</div>
            <router-link to="/seeker/dashboard/"><img src="../../../assets/logo.png" class="h-10" alt=""></router-link>
            <div class="md:block w-full p-4">
                <ul class="flex flex-col gap-2">
                    <li class="text-lg link"><router-link to="/seeker/dashboard/">Dashboard</router-link></li>
                    <li class="text-lg link"><router-link to="/seeker/opportunities/">Opportunities</router-link></li>
                    <li class="text-lg link"><router-link to="/seeker/universities/">Univerisities</router-link></li>
                    <li class="text-lg link"><router-link to="/seeker/industries/">Industries</router-link></li>
                    <li class="text-lg link"><router-link to="/seeker/applications/">Applications</router-link></li>
                    <div class="h-[1px] my-4 bg-gray-300 w-full"></div>
                    <li class="text-lg link"><router-link to="/seeker/profile/">Profile</router-link></li>
                    <li class="text-lg link"><router-link to="/seeker/interest/">Interest</router-link></li>
                    <li class="text-lg link"><router-link to="/seeker/resume/">Resume</router-link></li>
                    <li class="text-lg link danger"><router-link to="/">Sign Out</router-link></li>
                </ul>
            </div>
    </div>
</template>

<script>
    export default {
        name: 'headerNav',
        mounted(){
            
            const btn = document.querySelector(".toggleMobile");
            const menu = document.querySelector(".mobile-menu");

            btn.addEventListener("click", () => {
                menu.classList.toggle("hidden");
            });
        }
    }
</script>

<style scoped>

</style>