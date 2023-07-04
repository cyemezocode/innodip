<template>
        <div class="w-full flex flex-col" :class="small=='false'?'mb-4':''" v-if="inputType!='textarea'">
            <label v-if="small=='false'" class="text-sm mb-2">{{ label }} <strong v-if="required" class="text-red-400">*</strong></label>
            <input class="w-full border border-gray-400 px-3 py-2 rounded-xl outline-none focus:border-primary focus:border-2 transition ease-in-out duration-500" :class="small==true?'mt-4':''" :required="required" :placeholder="placeholder" :type="inputType" :name="name" :value="value">
            <router-link  :to="`${toSub}`" v-if="sub" class="link text-sm">{{sub}}</router-link>
        </div>
        <div class="w-full flex flex-col" :class="small=='false'?'mt-4':''" v-if="inputType=='textarea'">
            <label v-if="small=='false'" class="text-sm mb-2">{{ label }} <strong v-if="required" class="text-red-400">*</strong></label>
            <textarea class="w-full border border-gray-400 px-3 py-2 rounded-xl outline-none focus:border-primary focus:border-2 transition ease-in-out duration-500" :class="small==true?'mt-4':''" :required="required" :placeholder="placeholder" :type="inputType" :name="name">
            
            </textarea>
        </div>
</template>

<script>
  // Initialization for ES Users
  import {
    Input,
    initTE,
  } from "tw-elements";

  initTE({ Input });
    export default {
        name: 'FormInput',
        props:{
            placeholder: String,
            label: String,
            value: String,
            sub: String,
            toSub: String,
            inputType:String,
            required: String,
            small: String,
            name:String,
        }
    }
</script>

<style scoped>

</style>