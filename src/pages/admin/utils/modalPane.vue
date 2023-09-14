<template>
    <div class="">
        <div v-if="showModal" v-on:click="triggerToggleModal()" class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex top-0">
      <div class="relative w-auto my-6 mx-auto max-w-6xl" @click.stop>
        <!--content-->
        <div class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          <!--header-->
          <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 class="text-xl font-semibold">
              <slot name="title"></slot>
            </h3>
            <button class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none" v-on:click="triggerToggleModal()">
              <span class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <!--body-->
            <form class="w-full max-w-lg" @submit.prevent="sendData(this)" id="formData">
          <div class="relative p-6 flex-auto">
            <slot name="form" class="my-4 text-slate-500 text-lg leading-relaxed">
            </slot>
          </div>
          <!--footer-->
          <div class="flex gap-3 items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button class="btn-secondary" type="button" v-on:click="triggerToggleModal()">
              Close
            </button>
            <button class="btn-primary">
              Save
            </button>
          </div>
          </form>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
</template>

<script>
// import apiService from '../../../assets/api/apiService.js'
// import AWN from "awesome-notifications"
import axios from 'axios';

import $ from 'jquery'

let globalOptions =  {
  alert: "Oops! Something got wrong",

}
globalOptions.labels = {
  alert: "Sign Up",
}

let signupOption =  {
  success: "Your account is successful created.",

}
signupOption.labels = {
  alert: "Sign Up",
}


// let notifier = new AWN(globalOptions)
    export default {
        props:['showModal','endpoint','alertTitle'],
        
        methods: {
            triggerToggleModal() {
            this.$emit("triggerModal");
            },
            sendData() {
                
                const uploadForm = document.getElementById("formData");
                this.handleFormSubmission(uploadForm,'http://innodip.rw:8004/main-categories');
                
            },
            handleFormSubmission(form,base) {
            form.addEventListener("submit", function (e) {
                e.preventDefault(); // Prevent the default form submission
                
                const formData = new FormData(form); // Use the submitted form
                const endpoint = base;
                axios.post(endpoint, formData)
                .then(response => {
                    $('form').trigger('reset')
                    console.log("Upload successful:", response.data);
                    // notifier.success(response.data.message, signupOption)
                })
                .catch(error => {
                    console.error("Error uploading:", error);
                    // notifier.alert(error.response.data.errors.attachmentOfCertificate[1], signupOption)
                });
            });
            },
        },
    }
</script>

<style scoped>

</style>