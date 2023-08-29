<template>
        <div class="w-full flex flex-col" :class="small=='false'?'mb-4':''" v-if="inputType!='textarea'">
            <label v-if="small=='false'" class="text-sm mb-2">{{ label }} <strong v-if="required" class="text-red-400">*</strong></label>
            <select @change="setCitizen" class="w-fullblock appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-secondary" :class="small==true?'mt-4':''" :required="required" :placeholder="placeholder" :name="name" :value="value">
                <option value="">{{placeholder}}</option>
                <slot></slot>
            </select>
            <router-link  :to="`${toSub}`" v-if="sub" class="link text-xs">{{sub}}</router-link>
        </div>
</template>

<script>
    export default {
        emits: ['setCitizen'],
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
            locOpts:Object
        },
        methods:{
            setCitizen(event){
                this.$emit('setCitizen',event)
            }
        }
    }
</script>

<style scoped>

</style>