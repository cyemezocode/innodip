<template>
    <div>
        <headerNavVue></headerNavVue>
            
        <div class="max-w-screen-lg mx-auto px-4 md:px-0 py-4">
            <universityCardVue :data="datas"></universityCardVue>
        </div>
        <pageFooterVue></pageFooterVue>
    </div>
</template>

<script>
import headerNavVue from './utils/headerNav.vue'
import pageFooterVue from './utils/pageFooter.vue'
import apiService from '../assets/api/apiService.js'
import universityCardVue from './utils/industryPage.vue'
    export default {
        data(){
            return{
                username: 'cyemezo',
                datas:[],
                activeCat:'',
                baseUrl: 'http://innodip.rw:8004/',
                isLoaded:false
            }
        },
        components:{
            headerNavVue,
            pageFooterVue, 
            universityCardVue
        },
        mounted(){
            const id = this.$route.params.id;
            console.log(id)
            apiService.getData('industry/display/details/'+id).then(res => {
                this.datas = res.data;
                // this.activeCat = jobsList.categories[0].name;
                this.isLoaded = true
            });

        },
       
    }
</script>

<style scoped>
</style>i