<template >
    <div class="w-full flex card">
    <div class="col-span-2 flex justify-start">
                        <div class="hidden md:flex w-44 h-44 md:w-32 md:h-32 items-center justify-center bg-gray-200 border border-gray-300 rounded-lg overflow-hidden"></div>
                    </div>
                    <div class="w-full col-span-8 pl-3 pt-0">
                        <h2 class="bg-gray-300 h-4 w-40 rounded-lg"></h2>
                        <h1 class="bg-gray-300 h-4 w-1/2 md:w-72 rounded-lg mt-4"></h1>
                        <div class="flex gap-3 mt-2">
                            <div class="flex items-center sm:justify-center md:justify-start gap-2">
                                <svg class="w-4 h-3 bg-gray-300 rounded-lg"></svg>
                                <span class="h-3 w-10 md:w-20 bg-gray-300 rounded-lg"></span>
                            </div>
                            <div class="flex items-center sm:justify-center md:justify-start gap-2">
                                <svg class="w-4 h-3 bg-gray-300 rounded-lg"></svg>
                                <span class="h-4 w-10 md:w-20 bg-gray-300 rounded-lg"></span>
                            </div>
                            <div class="flex items-center sm:justify-center md:justify-start gap-2">
                                <svg class="w-4 h-3 bg-gray-300 rounded-lg"></svg>
                                <span class="h-4 w-10 md:w-20 bg-gray-300 rounded-lg"></span>
                            </div>
                            <div class="flex items-center sm:justify-center md:justify-start gap-2">
                                <span class="h-4 w-10 md:w-20 bg-gray-300 rounded-lg"></span>
                            </div>
                    </div>
                    <div v-if="hasDesc==true" class="w-full text-sm">
                        <h1 class=" bg-gray-300 h-2 w-1/2 md:w-58 rounded-lg mt-2"></h1>
                        <h1 class=" bg-gray-300 h-2 w-1/3 md:w-full rounded-lg mt-2"></h1>
                        <h1 class=" bg-gray-300 h-2 w-1/4 md:w-42 rounded-lg mt-2"></h1>

                    </div>
                    </div>
                </div>

                


</template>

<script>
    export default {
        name: 'JobCard',
        props:{
            hasDesc: Boolean
        }
    }
</script>

<style scoped>

</style>