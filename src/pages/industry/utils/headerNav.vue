<template>
    <div class="bg-gray-200 border-b  border-gray-400 sticky top-0 z-50">
        <div class="px-4 py-1 md:p-1 md:px-3  flex flex-wrap  mx-auto items-center justify-between">
            <div class="flex gap-8 items-center">
                <div class="hidden md:block rounded-lg bg-white items-center overflow-hidden relative">
                    <svg class="w-6 h-6 text-gray-500 absolute top-2 left-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    <input type="text" id="search-navbar" class="bg-white pl-10 p-2 rounded-lg  border-2 border-gray-400  outline-none focus:border-primary" placeholder="Search..."></div>
            </div>
            <div class="flex gap-1 md:gap-4 items-cente w-full justify-between md:justify-end md:w-auto">
                <div class="md:hidden flex items-center">
						<button class="outline-none mobile-menu-button bg-primary rounded-lg p-2 hover:bg-secondary toggleMobile">
						<svg class=" w-6 h-6 text-white "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
                <router-link to="/industry/profile" class="w-14 h-14 image border border-gray-400 rounded-full overflow-hidden flex object-fit relative">
                    <img :src="picture" alt="" class="object-cover w-full h-full">
                </router-link>
                

        </div>
            </div>
            
    </div>
    <!-- <div class="hidden md:hidden flex flex-col gap-2 items-center bg-gray-100 p-3 border-b  border-gray-300 mobile-menu">
        <div class="w-full rounded-lg bg-white items-center overflow-hidden relative">
                    <svg class="w-6 h-6 text-gray-500 absolute top-2 left-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    <input type="text" id="search-navbar" class="bg-white pl-10 p-2 rounded-lg  w-full border-2 border-gray-400  outline-none focus:border-primary" placeholder="Search..."></div>
                <div class="w-full">
                    <ul class="flex flex-col gap-2 justify-start w-full items-start">
                        <li class="link"><a href="/">Home</a></li>
                        <li class="link"><a href="/jobs/">Jobs</a></li>
                        <li class="link"><a href="/opportunities/">Opportunities</a></li>
                    </ul>
                </div>
            </div> -->
</template>

<script>
    import apiService from "../../../assets/api/apiService.js";
    export default {
        name: 'headerNav',
        data(){
            return{
                data:[],
                picture:'',
                userId:null
            }
        },
        mounted(){
            const btn = document.querySelector("button.toggleMobile");
            const menu = document.querySelector(".mobile-menu");
            btn.addEventListener("click", () => {
                menu.classList.toggle("hidden");
            });
            
            
            this.userId = JSON.parse(localStorage.getItem('currentUser'));
            if(this.userId!=null && localStorage.getItem('currentType')=='industry'){
                apiService.getData('industry/display/details/'+this.userId).then((res) => {
                this.data = res.data;
                this.picture = 'http://innodip.rw:8004/'+res.data.logo
                
                this.$emit('userData',JSON.stringify(this.data));
            });
            }else{
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>

</style>