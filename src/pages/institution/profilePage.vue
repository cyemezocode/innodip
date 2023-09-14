<template>
  <div>
    <div class="block md:flex relative">
      <div
        class="hidden md:block w-full md:w-[20%] sticky top-0 h-[100vh] mobile-menu"
      >
        <menuNav></menuNav>
      </div>
      <div class="w-[100%] md:w-[80%]">
        <headerNavVue @userData="getUser"></headerNavVue>
        <div class="w-full bg-gray-700 relative h-36 md:h-48 flex border-b border-gray-300">
        <!-- <span class="absolute top-3 right-3 border border-1 px-2 py-1 rounded-lg bg-gray-400 text-white">+</span> -->
        <!-- <h1 class="hidden col-span-2 md:flex absolute left-1/2 top-12 md:top-20 text-3xl translate-x-[-50%] p-1 opacity-[.8] rounded-lg bg-gray-600 text-white z-10 text-center">{{ datas.name }}</h1> -->
        
        <label
                      for="banner"
                      type="button"
                      class="absolute bg-opacity-[.8] bottom-2 md:bottom-5 right-2 md:right-auto md:left-1/2 md:translate-x-[-50%] bg-secondary hover:bg-primary text-white rounded-3xl py-1 px-3 whitespace-nowrap"
                      >Change Banner</label
                    >
        <img v-if="selectedFile || selectedBannerPreview" :src="selectedBannerPreview" alt="" class="w-full h-full object-cover">
        <div class=" left-2 top-2 md:left-5 md:top-24 col-span-2 flex absolute">
            <div class="md:flex w-32 h-auto md:w-48 md:h-48 items-center justify-center bg-gray-200 border border-gray-300 rounded-lg overflow-hidden">
                <div
                    class="w-full image border border-gray-400 rounded-lg overflow-hidden flex object-fit relative"
                  >
                    <img
                      src="@/assets/images/photo.jpg"
                      alt=""
                      class="object-cover w-full h-full absolute z-0"
                    />
                    <img
                      s v-if="selectedFile || selectedFilePreview" :src="selectedFilePreview"
                      alt=""
                      class="object-cover w-full h-full absolute z-1"
                    />
                    <label
                      for="photo"
                      type="button"
                      class="absolute bottom-0 bg-opacity-[.8] md:bottom-5 left-1/2 translate-x-[-50%] bg-secondary hover:bg-primary text-white md:rounded-3xl py-1 px-3 whitespace-nowrap"
                      >Change Photo</label
                    >
                  </div>
            </div>
        </div>
    </div>
    <div class="w-full col-span-8 p-3 pt-5 pl-3 md:pl-0 h-42">
        <div class="grid p-4">
          <div v-if="isLoaded">
            <form
              id="formData"
              @submit.prevent="sendData"
              enctype="multipart/form-data"
              
            >
              <div class="grid grid-cols-8 w-full">
                <div class="col-span-8 mb-4 md:col-span-2 pr-0 md:pr-8">
                  <input type="file" name="photo" id="photo" class="hidden" @change="handleFileChange" />
                  <input type="file" name="banner" id="banner" class="hidden" @change="handleBannerChange" />
                  
                </div>

                <div class="col-span-8 md:col-span-4 w-full">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <input type="hidden" name="" v-model="datas.isLocalSignUp">
                  <div class="col-span-2">
                    <FormInput
                      placeholder="Name"
                      label="Name"
                      inputType="text"
                      required="true"
                      small="false"
                      name="inst_name"
                      :value="datas.name"
                    ></FormInput>
                    </div>
                  <div class="col-span-2 md:col-span-1">
                    <FormInput
                      placeholder="Telphone"
                      label="Telphone"
                      inputType="text"
                      required="true"
                      small="false"
                      name="phone"
                      :value="datas.phone"
                    ></FormInput>
                    </div>
                  <div class="col-span-2 md:col-span-1">
                    <FormInput
                      placeholder="Email Address"
                      label="Email Address"
                      inputType="email"
                      required="true"
                      small="false"
                      name="email"
                      :value="datas.email"
                    ></FormInput>
                    
                </div>
                  <div class="col-span-2 md:col-span-1">
                    <FormInput
                      placeholder="Location"
                      label="Location"
                      inputType="text"
                      required="true"
                      small="false"
                      name="location"
                      :value="datas.location"
                    ></FormInput>
                    </div>
                  <div class="col-span-2 md:col-span-1">
                    <FormInput
                      placeholder="Abbreviation"
                      label="Abbreviation"
                      inputType="text"
                      required="true"
                      small="false"
                      name="abbreviation"
                      :value="datas.abbreviation"
                    ></FormInput>
                    </div>
                  <div class="col-span-2">
                    <FormInput
                      placeholder="Website"
                      label="Website"
                      inputType="url"
                      required="true"
                      small="false"
                      name="text"
                      :value="datas.url"
                    ></FormInput>
                    </div>
                  </div>
                  <div class="grid grid-cols-1 gap-4 w-full">
                    
    <div class="w-full flex flex-col">
        <label class="text-sm mb-2">Description<strong class="text-red-400">*</strong></label>
        <textarea rows="5" class="w-full appearance-none hidden bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-secondary" placeholder="Description" name="description" required v-model="datas.description"></textarea>
        <ckeditor :editor="editor" v-model="datas.description" @ready="onReady" @input="onChange"></ckeditor>
    </div>
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-between" v-if="isLoaded">
                <FormButton
                  type="submit"
                  label="Save Profile"
                  bstyle="primary"
                ></FormButton>
                <!-- <router-link to="/seeker/profile/education"
                  ><FormButton
                    type="button"
                    label="Education &rarr;"
                    bstyle="normal"
                  ></FormButton
                ></router-link> -->
              </div>
            </form>
          </div>
          </div>
        </div>
        <pageFooterVue></pageFooterVue>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import headerNavVue from "../institution/utils/headerNav.vue";
import menuNav from "../institution/utils/menuNav.vue";
import pageFooterVue from "../institution/utils/pageFooter.vue";
import FormInput from "../utils/FormInput.vue";
import FormButton from "../utils/FormButton.vue";
import FormSelect from '../utils/FormSelect.vue';
import apiService from "../../assets/api/apiService.js";
import axios from 'axios';
import AWN from "awesome-notifications"
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from "@ckeditor/ckeditor5-vue"

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
  name: "profilePage",
  data() {
    return {
      datas: [],
      userId: "",
      isLoaded: false,
      selectedFile: null,
      baseUrl : 'http://innodip.rw:8004/',
      selectedFilePreview:null,
      selectedBannerPreview:null,
      countries:[],
      address:'',
      editor: ClassicEditor,
      reqCont: "",

    };
  },
  components: {
    headerNavVue,
    menuNav,
    pageFooterVue,
    FormInput,
    FormButton,
    FormSelect,
    ckeditor: CKEditor.component

  },
  mounted() {

    const btn = document.querySelector(".toggleMobile");
    const menu = document.querySelector(".mobile-menu");
    const content = document.querySelector(".content");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
      content.classList.toggle("content");
    });
  },
  methods: {
    async handleFileChange(event) {
      this.selectedFile = event.target.files[0];
      // this.selectedFilePreview = URL.createObjectURL(this.selectedFile); // Create data URL for preview
      const formData = new FormData();
      formData.append('logo', this.selectedFile);
      if(this.selectedFile!=null){
      try {
        const response = await axios.post('http://innodip.rw:8004/api/institution/upload/logo/'+this.datas._id, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        this.selectedFilePreview = this.baseUrl+response.data.data.logo
        this.selectedBannerPreview = this.baseUrl+response.data.data.banner

        notifier.success("Profile picture updated", globalOptions)

      } catch (error) {
        console.error('Error uploading file:', error),
        notifier.alert("Picture not uploaded", globalOptions)

      }

    }
    },
    async handleBannerChange(event) {
      this.selectedFile = event.target.files[0];
      // this.selectedFilePreview = URL.createObjectURL(this.selectedFile); // Create data URL for preview
      const formData = new FormData();
      formData.append('banner', this.selectedFile);
      if(this.selectedFile!=null){
      try {
        const response = await axios.post('http://innodip.rw:8004/api/institution/upload/banner/'+this.datas._id, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        this.selectedBannerPreview = this.baseUrl+response.data.data.banner

        notifier.success("Profile banner updated", globalOptions)

      } catch (error) {
        console.error('Error uploading file:', error),
        notifier.alert("Picture not uploaded", globalOptions)

      }

    }
    },
    sendData() {
      const form = document.getElementById("formData");
      const serializedData = apiService.serializeFormData(form);
      // console.log(serializedData);
      apiService.handleForm('institution/update/profile/'+this.datas._id,serializedData).then(
        notifier.success('Profile Updated.', signupOption),
        );
    },
    getUser(data){
      this.datas = JSON.parse(data);
      this.selectedFilePreview = this.baseUrl+this.datas.logo
      this.selectedBannerPreview = this.baseUrl+this.datas.banner
      this.isLoaded = true;
      document.title=this.datas.name+" Information";
    //   this.datas.dob = apiService.calendarDate(this.datas.dob)
      const ad = this.datas
      this.datas.address = Object.values(ad).join(', ')
    }
  },
};
</script>

<style scoped>
.image {
  aspect-ratio: 1/1;
}
</style>