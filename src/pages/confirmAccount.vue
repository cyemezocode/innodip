<template>
    <div>
        <headerNavVue></headerNavVue>
        <div class="max-w-screen-lg mx-auto px-3 md:px-0 py-4 justify-center">
            <div class="border border-1 mb-5 rounded-lg overflow-hidden grid w-full grid-cols-1 md:grid-cols-2">
                <div class="flex flex-col items-center justify-center">
                    <h2 class="text-3xl my-3">Confirm Verification Code</h2>
                    <img src="../assets/illustrations/confirm.svg" class="px-18 homeImg">
                </div>
                <div class="flex flex-col items-center bg-gray-200">
                    <h1 class="text-3xl text-center border-b border-gray-300 w-full py-3">Verification Code</h1>
                    <form @submit.prevent="sendData(this)" class="w-full px-4 py-4" id="formData">
                        <div class="flex items-start justify-start flex-col">
                            <div class="flex justify-center w-full">
                                <v-otp-input
                                    ref="otpInput"
                                    input-classes="otp-input"
                                    separator="-"
                                    :num-inputs="5"
                                    :should-auto-focus="true"
                                    :is-input-num="true"
                                    @on-change="handleOnChange"
                                    @on-complete="handleOnComplete"
                                />
                            </div>
                                <button @click.prevent="handleClearInput()">Clear Input</button>
                        </div>

                    </form>
                </div>
            </div>
            </div>
            
        <pageFooterVue></pageFooterVue>
    </div>
</template>

<script>
import headerNavVue from './utils/headerNav.vue'
import pageFooterVue from './utils/pageFooter.vue'
// import 'vue3-carousel/dist/carousel.css'
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'\
import apiService from '../assets/api/apiService.js'

    export default {
        data(){
            return{
                username: 'cyemezo',
                datas:[],
                images: [],
                activeCat:'',
                isLoaded:false
            }
        },
        components:{
            headerNavVue,
            pageFooterVue,
        },
        methods:{
            sendData(){
            const form = document.getElementById("formData");
            const serializedData = apiService.serializeFormData(form);
            console.log(serializedData);
            apiService.handleForm(serializedData).then(console.log("sent"));
            },
    handleOnComplete(value) {
      console.log('OTP completed: ', value);
      alert('Completed')
    },
    handleOnChange(value) {
      console.log('OTP changed: ', value);
    },
    handleClearInput() {
      this.$refs.otpInput.clearInput();
    },
        },
        mounted(){
            document.title='Confirm Verification Code'
            
    },
    }
</script>

<style>
.homeImg{
    height: 400px;
}
.otp-input{
  width: 60px;
  height: 60px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}
.otp-input:focus{
  outline: #158941 3px solid;
}
/* Background colour of an input field with value */
.otp-input.is-complete {
  background-color: #e4e4e4;
}
.otp-input::-webkit-inner-spin-button,
.otp-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input::placeholder {
  font-size: 25px;
  text-align: center;
  font-weight: 600;
}
</style>