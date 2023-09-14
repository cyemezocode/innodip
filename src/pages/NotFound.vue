<template>
    <div>
        <headerNavVue></headerNavVue>
        <div class="max-w-screen-lg mx-auto px-3 md:px-0 py-4 justify-center">
            <div class="border border-1 mb-5 rounded-lg overflow-hidden grid w-full grid-cols-1">
                <div class="flex flex-col items-center justify-center mb-5">
                    <img src="../assets/illustrations/Interview-cuate.svg" class="px-18 homeImg">
                    <h2 class="text-3xl my-3">Oops! Page not found</h2>
                    <a href="javascript:history.back()"><FormButton type="button" label="Go Home &rarr;" bstyle="normal"></FormButton></a>
                </div>
            </div>
        </div>
            
        <pageFooterVue></pageFooterVue>
    </div>
</template>

<script>
import headerNavVue from './utils/headerNav.vue'
import pageFooterVue from './utils/pageFooter.vue'
import FormButton from './utils/FormButton.vue';
    export default {
        data(){
            return{
            }
        },
        components:{
            headerNavVue,
            pageFooterVue,
            FormButton,
        },
        mounted(){
            document.title='Page Not Found'
            
    },
    }
</script>

<style scoped>
.homeImg{
    height: 400px;
}
</style>