<template>
  <div>
    <div class="block md:flex relative">
      <div
        class="hidden md:block w-full md:w-[20%] sticky top-0 h-[100vh] mobile-menu"
      >
        <menuNav></menuNav>
      </div>
      <div class="w-[100%] md-[80%]">
        <headerNavVue></headerNavVue>
        <div class="p-4 justify-center content">
          <div
            class="flex flex-col md:flex-row flex-wrap items-center justify-between gap-4"
          >
            <div class="flex items-center w-full md:w-auto px-2 md:px-0">
              <svg
                class="w-16 h-16 text-secondary"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <h1 class="text-4xl text-gray-500">My Profile</h1>
            </div>
            <div class="w-full md:w-auto px-2 md:px-0"></div>
          </div>
        </div>
        <div class="grid p-4">
          <div v-if="isLoaded">
            <form
              id="formData"
              @submit.prevent="sendData"
              enctype="multipart/form-data"
            >
              <div class="grid grid-cols-8 w-full">
                <div class="col-span-8 mb-4 md:col-span-2 pr-0 md:pr-8">
                  <input type="file" name="photo" id="photo" class="hidden" />
                  <div
                    class="w-full image border border-gray-400 rounded-lg overflow-hidden flex object-fit relative"
                  >
                    <img
                      src="@/assets/images/photo.jpg"
                      alt=""
                      class="object-cover w-full h-full"
                    />
                    <label
                      for="photo"
                      type="button"
                      class="absolute bottom-5 left-1/2 translate-x-[-50%] bg-secondary hover:bg-primary text-white rounded-3xl py-1 px-3 whitespace-nowrap"
                      >Change Photo</label
                    >
                  </div>
                </div>
                <div class="col-span-8 md:col-span-4 w-full">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <FormInput
                      placeholder="First name"
                      label="First name"
                      inputType="text"
                      required="true"
                      small="false"
                      name="fname"
                      :value="datas.fname"
                    ></FormInput>
                    <FormInput
                      placeholder="Last name"
                      label="Last name"
                      inputType="text"
                      required="true"
                      small="false"
                      name="lname"
                      :value="datas.lname"
                    ></FormInput>
                    <FormInput
                      placeholder="Telphone"
                      label="Telphone"
                      inputType="text"
                      required="true"
                      small="false"
                      name="phone"
                      :value="datas.phone"
                    ></FormInput>
                    <FormInput
                      placeholder="Email Address"
                      label="Email Address"
                      inputType="email"
                      required="true"
                      small="false"
                      name="email"
                      :value="datas.email"
                    ></FormInput>
                    <FormInput
                      placeholder="Date of Birth"
                      label="Date of Birth"
                      inputType="date"
                      required="true"
                      small="false"
                      name="dateOfBirth"
                      :value="datas.dateOfBirth"
                    ></FormInput>
                    <FormInput
                      placeholder="National Identification Number"
                      label="National Identification Number"
                      inputType="text"
                      required="true"
                      small="false"
                      name="nid"
                      :value="datas.nid"
                    ></FormInput>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <FormInput
                      placeholder="Address"
                      label="Address"
                      inputType="text"
                      required="true"
                      small="false"
                      name="address"
                      :value="datas.address"
                    ></FormInput>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                    <FormInput
                      placeholder="Biography"
                      label="Biography"
                      inputType="textarea"
                      required="true"
                      small="false"
                      name="bio"
                      :value="datas.biography"
                    ></FormInput>
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-between" v-if="isLoaded">
                <FormButton
                  type="submit"
                  label="Save Profile"
                  bstyle="primary"
                ></FormButton>
                <router-link to="/seeker/profile/education"
                  ><FormButton
                    type="button"
                    label="Education &rarr;"
                    bstyle="normal"
                  ></FormButton
                ></router-link>
              </div>
            </form>
          </div>
        </div>
        <pageFooterVue></pageFooterVue>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import headerNavVue from "../seeker/utils/headerNav.vue";
import menuNav from "../seeker/utils/menuNav.vue";
import pageFooterVue from "../seeker/utils/pageFooter.vue";
import FormInput from "../utils/FormInput.vue";
import FormButton from "../utils/FormButton.vue";
import apiService from "../../assets/api/apiService.js";
export default {
  name: "profilePage",
  data() {
    return {
      datas: [],
      activeCat: "",
      isLoaded: false,
    };
  },
  components: {
    headerNavVue,
    menuNav,
    pageFooterVue,
    FormInput,
    FormButton,
  },
  mounted() {
    apiService.getProfile().then((profile) => {
      this.datas = profile.profile;
      this.isLoaded = true;
      document.title="Personal Information"
    });

    const btn = document.querySelector(".toggleMobile");
    const menu = document.querySelector(".mobile-menu");
    const content = document.querySelector(".content");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
      content.classList.toggle("content");
    });
  },
  methods: {
    sendData() {
      const form = document.getElementById("formData");
      const serializedData = apiService.serializeFormData(form);
      console.log(serializedData);
      apiService.handleForm(serializedData).then(console.log("sent"));
    },
  },
};
</script>

<style scoped>
.image {
  aspect-ratio: 1/1;
}
</style>