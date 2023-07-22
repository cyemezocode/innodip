<template>
    <div>
        <headerNavVue></headerNavVue>
        <div class="max-w-screen-lg mx-auto px-3 md:px-0 py-4 justify-center">
            <div class="banner mb-5 rounded-lg overflow-hidden w-full h-64 flex items-center justify-center relative">
                <h1 class="text-gray-800 bg-blue-50 text-5xl p-4 rounded-lg absolute opacity-[.7]">
                    <span>Curriculum</span>
                </h1>
            </div>
            <div class="grid grid-cols-4 gap-3">
                <div class="border rounded-lg overflow-hidden col-span-4 md:col-span-1">
                    <h2 class="text-2xl w-full border-b p-4 bg-gray-100">Categories</h2>
                    <ul class="h-56 md:h-auto md:min-h-56 overflow-x-scroll p-4">
                        <li v-for="(ty, index) in datas" :key="ty" class="link"><router-link to="#">{{index+=1}}. {{ty.name}}</router-link></li>
                    </ul>
                </div>
                <div class="col-span-4 md:col-span-3">
                    <div class="flex w-full items-center gap-4 mb-6">
                    <svg class="w-12 h-12 text-secondary" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <h1 class="text-3xl md:text-5xl text-gray-500">Recent Currilum</h1>
                    </div>

                    <div v-for="res in curriculums" :key="res" class="mb-8 border-b pb-4 last:mb-0 last:pb-0  last:border-none border-dashed border-gray-600 grid grid-cols-4 gap-2">
                        <div class="col-span-1 flex orgItem">
                            <img :src="res.cover_image_url" alt="" class="object-cover w-full h-full">
                        </div>
                        <div class="col-span-3 flex flex-col justify-between">
                            <div class="flex flex-col">
                                <h2 class="text-lg md:text-2xl">{{res.title}}</h2>
                                <span class="text-gray-600"><router-link to="#" class="link">{{res.writer}}</router-link></span>
                                <span class="text-gray-600">Copyright Date: {{res.copyright_date}}</span>
                                <span class="text-gray-600">Published by: <router-link to="#" class="link">{{res.writer}}</router-link></span>
                                <span class="text-gray-600">Pages: {{res.number_of_pages}}</span>
                            </div>
                            <div class="flex justify-end">
                                <router-link to="#" class="btn-primary-sm">Book Details</router-link>
                            </div>
                        </div>
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
// import FormInput from './utils/FormInput.vue';
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
    // FormInput,
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
      this.curriculums = jobsList.curriculums;
      this.isLoaded = true;
    });
    document.title = "Research - INODIP";
  },
};
</script>

<style scoped>
.banner {
  background-image: url("@/assets/images/bg_innodip2.jpg");
  background-size: cover;
  background-position: center;
}
.orgItem{
    aspect-ratio: 1/1;
}
</style>