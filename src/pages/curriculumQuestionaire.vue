<template>
    <div>
        <headerNavVue></headerNavVue>
        <div class="max-w-screen-lg mx-auto px-3 md:px-0 py-4 justify-center">
            <div class="banner mb-5 rounded-lg overflow-hidden w-full h-64 flex items-center justify-center border relative">
                <h1 class="text-gray-800 bg-blue-50 text-5xl p-4 rounded-lg absolute opacity-[.7]">
                    <span>Curriculum Questionnaire</span>
                </h1>
            </div>
            <div class="grid grid-cols-4 gap-3">
                <div class="col-span-4 md:col-span-3">
                    <div class="flex w-full items-center gap-4 mb-6">
                  <svg class="w-12 h-12 text-secondary"  aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                    <h1 class="text-3xl md:text-5xl text-gray-500">Curriculum Questionnaire</h1>
                    </div>
                    
                    <div v-for="res in curriculums" :key="res" class="mb-8 border-b pb-4 last:mb-0 last:pb-0  last:border-none border-dashed border-gray-600">
                        <p>{{ res.description }}</p>
                        <FormInput v-for="que in res.questions" :key="que" placeholder="Your Answer" :label="que.question" inputType="email"  required=true small=false name="username"></FormInput>
                        <router-link to="/seeker/dashboard/" class="btn-primary">Submit</router-link>
                        
                    </div>
                </div>
            </div>
        </div>
            
        <pageFooterVue></pageFooterVue>
    </div>
</template>

<script>
import headerNavVue from "./utils/headerNav.vue";
import pageFooterVue from "./utils/pageFooter.vue";
import FormInput from './utils/FormInput.vue';
// import FormButton from './utils/FormButton.vue';
// import 'vue3-carousel/dist/carousel.css'
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'\
import apiService from "../assets/api/apiService.js";
export default {
  data() {
    return {
      datas: [],
      curriculums:[],
      images: [],
      isLoaded: false,
    };
  },
  components: {
    headerNavVue,
    pageFooterVue,
    FormInput,
  },
  methods: {
    sendData() {
      const form = document.getElementById("formData");
      const serializedData = apiService.serializeFormData(form);
      console.log(serializedData);
    },
  },
  mounted() {
    apiService.getJobs().then((jobsList) => {
      this.datas = jobsList.mainCategories[4].cats;
      this.curriculums = jobsList.questionaire;
      this.isLoaded = true;
    });
    document.title = "Curriculum Questionaire - INODIP";
  },
};
</script>

<style scoped>
.banner {
  background-image: url("@/assets/images/questionaire.jpg");
  background-size: cover;
  background-position: center;
}
.orgItem{
    aspect-ratio: 1/1;
}
</style>