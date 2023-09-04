<template>
    <div>
        <router-link :to="`${router+'/'+job._id}`" class="border-b border-gray-200 p-2 w-full flex flex-col  hover:bg-slate-200 transition ease-in-out duration-500">
            <div class="p pt-0">
                <h2 class="text-sm text-gray-500">{{ job.name }}</h2>
                <h1 class="text-lg mb-3 text-gray-700">{{ job.title }}</h1>
                <div class="grid grid-cols-1 text-sm">
                    <div class="flex items-center sm:justify-center md:justify-start gap-2">
                        <svg class="w-3 h-3 text-secondary"  aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <span>{{ job.location }}</span>
                    </div>
                    <div v-if="!job.isSalary" class="flex items-center sm:justify-center md:justify-start gap-2">
                        <svg class="w-3 h-3 text-secondary" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <span>{{ job.salaryRange }} {{ job.salaryCurrency }}</span>
        </div>
        <div class="flex items-center sm:justify-center md:justify-start gap-2">
        <svg class="w-3 h-3 text-secondary" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <span>Dealine: {{ job.deadline }}</span>
                </div>
                </div>
            </div>
        </router-link>
    </div>
</template>


<script>
    export default {
        name: 'JobCard',
        props:{
            datas:String,
            router: String

        },
        data(){
            return{
                isLoaded:false,
                job: JSON.parse(this.datas),
            }
        }
    }
</script>

<style scoped>

</style>