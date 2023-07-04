<template>
    <div class="bg-gray-500 text-white">
        <div class="bg-gray-400 px-4 h5 border-t border-slate-300">
        <div class="mx-auto flex items-center justify-between px-3 md:px-0 py-2">
            <div>&copy; Copyright {{ currentYear }}</div>
            <span>a UTB Property</span>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'pageFooter',
        computed: {
            currentYear() {
            return new Date().getFullYear();
            }
        }
    }
</script>

<style scoped>

</style>