<template>
    <div class="mt-5">
        <button :class="bstyle=='primary'?'btn-primary':'btn-secondary'" :type="type">{{ label }}</button>
    </div>
</template>

<script>
    export default {
        name: 'FormButton',
        props:{
            label: String,
            type: String,
            bstyle:String,
            disabled:Boolean
        },
        data(){
            return{
            }
        }
    }
</script>

<style scoped>

</style>