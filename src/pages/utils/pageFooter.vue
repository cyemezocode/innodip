<template>
    <div class="bg-gray-500 text-white">
        <div class="block md:grid max-w-screen-lg mx-auto grid-cols-4 gap-4 px-3 md:px-0 py-8">
        <div class="flex flex-col items-center md:block">
            <img src="../../assets/logo_inverse.png" class="h-16 mb-6" alt="">
            <p>"Find your dream job online. Explore, apply, and connect with potential employers. Boost your job search and land the perfect opportunity."</p>
        </div>
        <div class="mt-4 md:mt-0">
            <h2 class="text-2xl border-b border-gray-400 pb-3 mb-3">Social Links</h2>
            <ul>
                <li><a href="">Twitter</a></li>
                <li><a href="">LinkedIn</a></li>
                <li><a href="">Facebook</a></li>
            </ul>
        </div>
        <div class="mt-4 md:mt-0">
            <h2 class="text-2xl border-b border-gray-400 pb-3 mb-3">Membership</h2>
            <ul>
                <li><a href="">Why Joining</a></li>
                <li><a href="">Universities</a></li>
                <li><a href="">Industries</a></li>
                <li><a href="">Councils</a></li>
            </ul>
        </div>
        <div class="mt-4 md:mt-0 flex items-center justify-center">
            <router-link to="#" class="rounded-lg mt-12 bg-white p-4 text-black hover:bg-green-400">Apply Now</router-link>
        </div>
        </div>
        <div class="bg-gray-400 h5 border-t border-slate-300">
        <div class="max-w-screen-lg mx-auto flex items-center justify-between px-3 md:px-0 py-2">
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