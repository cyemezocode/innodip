<template>
    <div class="overlay fixed h-[100vh] w-[100vw] z-40">
        <div class="modal bg-white w-[90%] md:w-1/2 lg:w-1/3 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-xl overflow-hidden shadow shadow-white">
            <h1 class="px-4 py-5 text-2xl border-b border relative">
                {{data.title}}
                <span class="absolute top-5 right-5 text-3xl cursor-pointer hover:text-danger" @click="closeModal()">&times;</span>
            </h1>
            <div class="holder p-6">
                <p>{{ data.message }}</p>
            </div>
            <div class="px-3 py-5 text-2xl border-b border flex justify-end gap-2">
                <button class="btn-secondary-sm" @click="closeModal()">Cancel</button>
                <button class="btn-primary-sm-danger" @click="acceptModal()">Delete</button>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'modalPage',
        props:{
            data: []
        },
        methods:{
            closeModal(){
                this.$emit('modalAction',false)
            },
            acceptModal(){
                this.$emit('modalAction',true)
            }
        }
        
    }
</script>

<style scoped>
    .overlay{
        background: rgb(0, 0, 0,.8);
        user-select: none;
        /* pointer-events: none; */
    }
</style>