<template>
    <div class="block md:flex relative">
      <div
        class="hidden md:block w-full md:w-[20%] sticky top-0 h-[100vh] mobile-menu"
      >
        <menuNav></menuNav>
      </div>
      <div class="w-[100%] md:w-[80%]">
        <headerNavVue @userData="getUser"></headerNavVue>
        <div class="p-4 justify-center">
        <div class="flex flex-col md:flex-row flex-wrap items-center justify-between gap-4">
          <UniversityPage :data="datas"></UniversityPage>
        </div>
        </div>
        <pageFooterVue></pageFooterVue>
    </div>
    </div>
</template>

<script>
import headerNavVue from './utils/headerNav.vue'
import menuNav from './utils/menuNav.vue'
import pageFooterVue from './utils/pageFooter.vue'
import UniversityPage from '../utils/universityPage.vue';
import apiService from '../../assets/api/apiService.js'
    export default {
        name: 'dashboardPage',
        data(){
            return{
                username: 'cyemezo',
                datas:[],
                activeCat:'',
                isLoaded:false
            }
        },
        components:{
            headerNavVue,
            menuNav,
            pageFooterVue,
            UniversityPage,
        },
        mounted(){
            const id = this.$route.params.id;
            console.log(id)
            apiService.getData('institution/display/details/'+id).then(res => {
                this.datas = res.data;
                // this.activeCat = jobsList.categories[0].name;
                this.isLoaded = true
            });

        },
    }
</script>

<style scoped>
.homeImg{
    height: 400px;
}
</style>