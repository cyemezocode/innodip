<template>
    <div class="bg-gray-200 border-b  border-gray-400">
        <div class="max-w-screen-lg p-4 md:p-0 h-20  flex flex-wrap  mx-auto items-center justify-between">
            <div class="flex gap-8 items-center">
            <router-link to="/"><img src="../../assets/logo.png" class="h-10" alt=""></router-link>
                <div class="hidden md:block">
                    <ul class="flex gap-8">
                        <li class="hover:text-primary"><router-link to="/">Home</router-link></li>
                        <li class="hover:text-primary"><router-link to="/opportunities/">Opportunities</router-link></li>
                        <li class="hover:text-primary"><a href="/universities/">Academia</a></li>
                        <li class="link"><a href="/industries/">Institutions</a></li>
                    </ul>
                </div>
            </div>
            <div class="flex gap-1 md:gap-4 items-center">
                <div class="hidden md:block rounded-lg bg-white items-center overflow-hidden relative">
                    <svg class="w-6 h-6 text-gray-500 absolute top-2 left-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    <input type="text" id="search-navbar" class="bg-white pl-10 p-2 rounded-lg  border-2 border-gray-400  outline-none focus:border-primary" placeholder="Search..."></div>
                <router-link to="/signup/" class="btn-secondary-sm">Sign Up</router-link>
                <router-link to="/login/" class="btn-primary-sm">Login</router-link>
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

        </div>
            </div>
            
    </div>
    <div class="hidden md:hidden flex flex-col gap-2 items-center bg-gray-100 p-3 border-b  border-gray-300 mobile-menu">
        <div class="w-full rounded-lg bg-white items-center overflow-hidden relative">
                    <svg class="w-6 h-6 text-gray-500 absolute top-2 left-2" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    <input type="text" id="search-navbar" class="bg-white pl-10 p-2 rounded-lg  w-full border-2 border-gray-400  outline-none focus:border-primary" placeholder="Search..."></div>
                <div class="w-full">
                    <ul class="flex flex-col gap-2 justify-start items-start w-full">
                        <li class="hover:text-primary w-full"><router-link to="/">Home</router-link></li>
                        <li class="hover:text-primary w-full"><router-link to="/opportunities/">Opportunities</router-link></li>
                        <li class="hover:text-primary w-full"><router-link to="/universities/">Academia</router-link></li>
                        <li class="hover:text-primary w-full"><router-link to="/industries/">Institutions</router-link></li>
                    </ul>
                </div>
            </div>
</template>

<script>
    export default {
        name: 'headerNav',
        mounted(){
            
            const btn = document.querySelector("button.toggleMobile");
            const menu = document.querySelector(".mobile-menu");

            btn.addEventListener("click", () => {
                menu.classList.toggle("hidden");
            });
        }
    }
</script>

<style scoped>

</style>