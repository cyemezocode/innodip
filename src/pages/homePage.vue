<template>
    <div>
        <headerNavVue></headerNavVue>
        <div class="h-[90vh] w-full overflow-hidden landing  z-[-1] justify-between relative">
            <div class="max-w-screen-lg mx-auto px-3 md:px-0 py-4 justify-start h-full flex relative">
                <div class="text-white w-[100%] md:w-[60%] z-3">
                    <h3 class="text-5xl">Welcome to</h3>
                    <h1 class="text-7xl md:text-9xl">INODIP</h1>
                    <!-- <img src="@/assets/logo_inverse.png" class="w-full md:w-[50%] py-2" alt=""> -->

                    <div class="list-wrapper">
                        <div class="word-list text-5xl md:text-8xl h-[100px] leading-[100px]">
                            <span>Innovative</span>
                            <span>Digital</span>
                            <span>Platform</span>
                        </div>
                    </div>
                    <p>We strive to provide a comprehensive platform that empowers users to explore research, access enriching curricula, undergo skill-enhancing training, and discover exciting job prospects. Join us on this journey to unlock your full potential and shape a successful future.</p>
                </div>
                <div class="absolute right-0 bottom-0 flex justify-end items-end z-0">
                    <img src="@/assets/illustrations/landing_svg.svg" alt="" class="w-[90%]">
                </div>
            </div>
        </div>
        <div class="max-w-screen-lg mx-auto px-3 md:px-0 py-4 justify-center mt-[-100px]">
            
            <!-- <div class="flex w-full items-center gap-4 mb-3">
                <svg class="w-12 h-12 text-secondary" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                 <h1 class="text-3xl text-gray-500">Explore Opportunities</h1>
            </div> -->
            <div class="front"  ref="myElement">
                <div class="grid grid-cols-2 md:grid-cols-6 rounded-xl  overflow-hidden mb-4 opacity-[.9]">
                    
                <router-link to="/jobs/" class="card-hover dark h-44 flex flex-col justify-between items-center">
                    <svg  class="w-16 h-16 text-secondary" fill="#000000" viewBox="0 0 24 24" id="job" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><rect id="secondary" x="5" y="5" width="14" height="18" rx="1" transform="translate(26 2) rotate(90)" style="fill: #2ca9bc; stroke-width: 2;"></rect><path id="primary" d="M16,7H8V4A1,1,0,0,1,9,3h6a1,1,0,0,1,1,1Zm1,4H7m8,0v2m6,7V8a1,1,0,0,0-1-1H4A1,1,0,0,0,3,8V20a1,1,0,0,0,1,1H20A1,1,0,0,0,21,20Z" style="fill: none; stroke: #000000; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path></g></svg>
                    <h1 class="text-xl text-gray-500">Jobs</h1>
                </router-link>
                <router-link to="/internship/" class="card-hover dark h-44 flex flex-col justify-between items-center">
                    <svg class="w-16 h-16 text-secondary" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M344.1664 235.1872c31.744 0 61.3888 12.16 83.712 33.9968l4.608 4.736 0.256-0.256a119.168 119.168 0 0 1 75.4944-37.8368l6.2208-0.4864 6.3232-0.1536h154.624c28.5952 0 52.1216 22.4256 54.0928 50.688l0.1536 3.8912 2.9696 199.424-50.9952-14.8992-2.816-177.0752a11.4688 11.4688 0 0 0-9.1392-11.0592l-1.9456-0.1792h-141.952c-32.9728 0-65.1776 26.0352-67.6864 56.8832l-0.1536 3.8656v386.6112l3.4048-1.5616 2.4064-1.3312 2.3296-1.408 4.5568-3.1744a5.4272 5.4272 0 0 1 7.936 1.28 6.912 6.912 0 0 1 1.1264 3.7376c0.1024 1.5104-0.0512 3.5584-0.4096 6.1696l-1.024 6.3232c-0.6144 3.4816-1.4336 7.424-2.3808 11.52l-2.1504 9.0368c-3.4304 13.696-6.272 20.7104-10.368 21.76a123.648 123.648 0 0 1-112.9984-26.3936l-3.2-2.9184H188.9024a54.4512 54.4512 0 0 1-53.6832-46.7456l-0.4352-3.9936-0.128-3.8912v-411.904c0-28.8256 22.272-52.5056 50.3808-54.528l3.8656-0.128h155.264z m-5.632 50.4576H196.5568a11.392 11.392 0 0 0-10.9056 9.2672l-0.1792 1.9968v395.4176c0 5.376 4.0704 10.0864 9.1392 11.0592l1.9456 0.2048h160.3584c8.5504 0 16.8704 3.4304 22.8864 9.3184l2.432 2.6624c5.9392 6.9632 13.0816 12.5696 20.992 16.5632l3.1232 1.408V346.4192c0-31.232-30.848-58.496-63.6928-60.6464l-4.1216-0.128z" fill="#ED892D"></path><path d="M331.3408 502.4256h-80.64a20.1728 20.1728 0 0 1 0-40.32h80.64a20.1472 20.1472 0 1 1 0 40.32z m0-100.8128h-80.64a20.1728 20.1728 0 0 1 0-40.32h80.64a20.1472 20.1472 0 1 1 0 40.32z m-80.64 161.3056h80.64a20.1472 20.1472 0 1 1 0 40.3456h-80.64a20.1472 20.1472 0 1 1 0-40.3456zM613.632 401.6128H512.768a20.1728 20.1728 0 0 1 0-40.32h100.8384a20.1472 20.1472 0 1 1 0 40.32z" fill="#F5C280"></path><path d="M645.4784 482.9696a112.256 112.256 0 0 1 74.0864 196.5824l1.024-0.9984 3.072 1.792a164.5824 164.5824 0 0 1 48.6912 44.1088l4.7616 6.8096 1.8688 2.9696 54.016-77.312a25.1904 25.1904 0 0 1 29.5424-9.1392l2.8928 1.28 2.6368 1.5872c11.264 7.8848 14.1312 23.3472 6.4 34.8416l-73.3184 104.9856 0.3328 1.6896c0.8704 4.7872 1.536 9.6256 1.9456 14.5152l0.512 7.424 0.1536 7.2448a25.1904 25.1904 0 0 1-50.3808 0.384l-0.1024-5.4272a113.4336 113.4336 0 0 0-226.7648 3.072v1.9712a25.1904 25.1904 0 0 1-50.3808 0 163.84 163.84 0 0 1 89.6256-146.0736l0.4864-0.2304-3.3536-3.4304a112 112 0 0 1-29.3376-64.2816l-0.512-6.0672-0.1536-6.0416a112.256 112.256 0 0 1 112.256-112.256z m0 39.04a73.216 73.216 0 1 0 0 146.432 73.216 73.216 0 0 0 0-146.432z m211.84 36.2496a20.0704 20.0704 0 0 1 0.2304 40.1408h-52.224a20.0704 20.0704 0 0 1-0.2304-40.1152z" fill="#BE4BDB"></path><path d="M857.3184 497.2032h-88.6016a20.096 20.096 0 0 0 0.2304 40.1152h88.576a20.096 20.096 0 0 0-0.2048-40.1152z" fill="#B152D4"></path></g></svg>
                    <h1 class="text-xl text-gray-500">Internship</h1>
                </router-link>
                <router-link to="/research/" class="card-hover dark h-44 flex flex-col justify-between items-center">
                    <svg class="w-16 h-16 text-secondary" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <path id="search-a" d="M11.7099609,0.572509766 C9.46940104,1.29012044 7.99951172,3.05419922 7.30029297,5.86474609 C6.25146484,10.0805664 4.95166016,10.6181641 0.719970703,9.11865234 C2.23974609,11.9257813 5.32006836,13.0512695 7.30029297,13.0512695 C9.28051758,13.0512695 14.4091797,10.2941895 13.8215332,5.0534668 C13.3114421,3.52709961 12.6075846,2.03344727 11.7099609,0.572509766 Z"></path> <path id="search-c" d="M14.1791377,12.7701494 L19.7100661,18.3101411 C20.0966446,18.6967197 20.0966446,19.3234875 19.7100661,19.7100661 C19.3234875,20.0966446 18.6967197,20.0966446 18.3101411,19.7100661 L12.7803471,14.1712106 C11.4385246,15.2160226 9.75152329,15.8383427 7.91917136,15.8383427 C3.54553379,15.8383427 0,12.2928089 0,7.91917136 C0,3.54553379 3.54553379,0 7.91917136,0 C12.2928089,0 15.8383427,3.54553379 15.8383427,7.91917136 C15.8383427,9.74688445 15.2191696,11.4299819 14.1791377,12.7701494 Z M7.91917136,13.8585499 C11.1993995,13.8585499 13.8585499,11.1993995 13.8585499,7.91917136 C13.8585499,4.63894318 11.1993995,1.97979284 7.91917136,1.97979284 C4.63894318,1.97979284 1.97979284,4.63894318 1.97979284,7.91917136 C1.97979284,11.1993995 4.63894318,13.8585499 7.91917136,13.8585499 Z"></path> </defs> <g fill="none" fill-rule="evenodd" transform="translate(2 2)"> <g transform="translate(1 2)"> <mask id="search-b" fill="#ffffff"> <use xlink:href="#search-a"></use> </mask> <use fill="#D8D8D8" xlink:href="#search-a"></use> <g fill="#FFA0A0" mask="url(#search-b)"> <rect width="24" height="24" transform="translate(-3 -4)"></rect> </g> </g> <mask id="search-d" fill="#ffffff"> <use xlink:href="#search-c"></use> </mask> <use fill="#000000" fill-rule="nonzero" xlink:href="#search-c"></use> <g fill="#7600FF" mask="url(#search-d)"> <rect width="24" height="24" transform="translate(-2 -2)"></rect> </g> </g> </g></svg>
                    <h1 class="text-xl text-gray-500">Research</h1>
                </router-link>
                <router-link to="/consultancy/" class="card-hover dark h-44 flex flex-col justify-between items-center">
                    <svg class="w-16 h-16 text-secondary"  fill="#108A37" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 35.124 35.125" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M33.125,4.125H2c-1.1,0-2,0.9-2,2V29c0,1.1,0.9,2,2,2h3.832v-1.562c-0.157,0.057-0.323,0.092-0.5,0.092 c-0.829,0-1.5-0.672-1.5-1.5l0.001-9.475c0-0.831,0.672-1.5,1.5-1.5h3.232l0.565,0.754l-1.038,5.879l1.406,1.326l1.406-1.326 l-1.038-5.879l0.565-0.754h3.009l7.242-2.237c0.795-0.243,1.633,0.199,1.877,0.99c0.244,0.792-0.199,1.631-0.99,1.876l-7.458,2.303 c-0.144,0.045-0.293,0.068-0.443,0.068h-0.51c0.001,0.026,0.008,0.055,0.008,0.084v10.86h19.959c1.101,0,2-0.899,2-2V6.125 C35.125,5.023,34.227,4.125,33.125,4.125z M9.5,16.034c-1.885,0-3.412-2.344-3.412-4.494c0-2.151,1.527-3.291,3.412-3.291 c1.885,0,3.412,1.14,3.412,3.291C12.912,13.688,11.384,16.034,9.5,16.034z M22.516,11.914c0.023-2.704,2.223-4.888,4.932-4.888 c0.08,0,0.156,0.008,0.236,0.012v4.876H22.516z M28.175,17.596c-2.727,0-4.937-2.209-4.937-4.935c0-0.016,0.004-0.032,0.004-0.047 h5.168V7.736c2.613,0.124,4.699,2.278,4.699,4.924C33.111,15.387,30.9,17.596,28.175,17.596z"></path> </g> </g></svg>
                    <h1 class="text-xl text-gray-500">Consultancy</h1>
                </router-link>
                <router-link to="/publication/" class="card-hover dark h-44 flex flex-col justify-between items-center">
                    <svg class="w-16 h-16 text-secondary" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M27 6H5C3.34315 6 2 7.34315 2 9V23C2 24.6569 3.34315 26 5 26H27C28.6569 26 30 24.6569 30 23V9C30 7.34315 28.6569 6 27 6Z" fill="#388E3C"></path> <path d="M16 6V26H5C4.20435 26 3.44129 25.6839 2.87868 25.1213C2.31607 24.5587 2 23.7956 2 23V9C2 8.20435 2.31607 7.44129 2.87868 6.87868C3.44129 6.31607 4.20435 6 5 6H16Z" fill="#66BB6A"></path> <path d="M12 6V20C12 20.2652 11.8946 20.5196 11.7071 20.7071C11.5196 20.8946 11.2652 21 11 21C10.7348 21 10.4804 20.8946 10.2929 20.7071C10.1054 20.5196 10 20.2652 10 20V6H12Z" fill="#F5F5F5"></path> <path d="M25 13H20C19.7348 13 19.4804 12.8946 19.2929 12.7071C19.1054 12.5196 19 12.2652 19 12C19 11.7348 19.1054 11.4804 19.2929 11.2929C19.4804 11.1054 19.7348 11 20 11H25C25.2652 11 25.5196 11.1054 25.7071 11.2929C25.8946 11.4804 26 11.7348 26 12C26 12.2652 25.8946 12.5196 25.7071 12.7071C25.5196 12.8946 25.2652 13 25 13Z" fill="#E0E0E0"></path> <path d="M25 17H22C21.7348 17 21.4804 16.8946 21.2929 16.7071C21.1054 16.5196 21 16.2652 21 16C21 15.7348 21.1054 15.4804 21.2929 15.2929C21.4804 15.1054 21.7348 15 22 15H25C25.2652 15 25.5196 15.1054 25.7071 15.2929C25.8946 15.4804 26 15.7348 26 16C26 16.2652 25.8946 16.5196 25.7071 16.7071C25.5196 16.8946 25.2652 17 25 17Z" fill="#E0E0E0"></path> <path d="M25 21H20C19.7348 21 19.4804 20.8946 19.2929 20.7071C19.1054 20.5196 19 20.2652 19 20C19 19.7348 19.1054 19.4804 19.2929 19.2929C19.4804 19.1054 19.7348 19 20 19H25C25.2652 19 25.5196 19.1054 25.7071 19.2929C25.8946 19.4804 26 19.7348 26 20C26 20.2652 25.8946 20.5196 25.7071 20.7071C25.5196 20.8946 25.2652 21 25 21Z" fill="#E0E0E0"></path> </g></svg>
                    <h1 class="text-xl text-gray-500">Publication</h1>
                </router-link>
                <router-link to="/curriculum/" class="card-hover dark h-44 flex flex-col justify-between items-center">
                    <svg class="w-16 h-16 text-secondary" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 392.533 392.533" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#56ACE0;" d="M273.939,69.818H70.432c-7.24,0-13.123,5.883-13.123,13.123v227.943h229.818V83.006 C287.127,75.701,281.244,69.818,273.939,69.818z"></path> <path style="fill:#FFC10D;" d="M70.432,370.747h203.507c7.24,0,13.123-5.883,13.123-13.123v-24.954H57.374v24.954 C57.374,364.865,63.257,370.747,70.432,370.747z"></path> <path style="fill:#FFFFFF;" d="M191.58,185.212c0-10.667-8.663-19.329-19.329-19.329c-10.667,0-19.329,8.663-19.329,19.329 c0,10.667,8.663,19.394,19.329,19.394C182.917,204.606,191.58,195.879,191.58,185.212z"></path> <path style="fill:#FFC10D;" d="M335.095,262.853V34.909c0-7.176-5.883-13.123-13.123-13.123H118.529 c-7.24,0-13.123,5.883-13.123,13.123v13.123h168.663c19.265,0,34.909,15.709,34.909,34.909v179.976h26.117V262.853z"></path> <path style="fill:#FFFFFF;" d="M308.913,284.638v38.012h13.123c7.24,0,13.123-5.883,13.123-13.123v-24.954h-26.246V284.638 L308.913,284.638z"></path> <g> <path style="fill:#194F82;" d="M142.384,117.851h59.669c6.012,0,10.925-4.848,10.925-10.925c0-6.012-4.848-10.925-10.925-10.925 h-59.669c-6.012,0-10.925,4.848-10.925,10.925C131.459,112.937,136.372,117.851,142.384,117.851z"></path> <path style="fill:#194F82;" d="M172.186,144.032c-22.691,0-41.18,18.489-41.18,41.18s18.489,41.18,41.18,41.18 s41.18-18.489,41.18-41.18S194.941,144.032,172.186,144.032z M172.186,204.541c-10.667,0-19.329-8.663-19.329-19.394 c0-10.667,8.663-19.329,19.329-19.329s19.329,8.663,19.329,19.329C191.58,195.879,182.853,204.541,172.186,204.541z"></path> <path style="fill:#194F82;" d="M322.036,0H118.529C99.265,0,83.62,15.709,83.62,34.909v13.123H70.497 c-19.265-0.065-34.909,15.58-34.909,34.844v238.869v35.879c0,19.265,15.709,34.909,34.909,34.909h203.507 c19.265,0,34.909-15.709,34.909-34.909v-13.123h13.123c19.265,0,34.909-15.709,34.909-34.909V34.909 C356.945,15.709,341.301,0,322.036,0z M287.127,357.624c0,7.24-5.883,13.123-13.123,13.123H70.432 c-7.24,0-13.123-5.883-13.123-13.123v-24.954h229.818V357.624L287.127,357.624z M119.628,310.885 c1.164-28.057,24.242-50.554,52.558-50.554s51.394,22.497,52.558,50.554H119.628z M287.127,310.885h-40.598 c-1.164-40.016-34.004-72.339-74.343-72.339s-73.18,32.194-74.343,72.339H57.374v-118.82h17.519 c6.012,0,10.925-4.848,10.925-10.925c0-6.077-4.848-10.925-10.925-10.925H57.374v-21.786h32.711 c6.012,0,10.925-4.848,10.925-10.925c0-6.012-4.848-10.925-10.925-10.925H57.374V82.812c0-7.176,5.883-13.123,13.123-13.123 h203.507c7.24,0,13.123,5.883,13.123,13.123v227.879h0V310.885z M335.095,309.657c0,7.24-5.883,13.123-13.123,13.123h-13.123 v-0.905v-37.107h26.182v24.889L335.095,309.657L335.095,309.657z M335.095,262.853h-26.182V82.877 c0-19.265-15.709-34.909-34.909-34.909H105.341V34.844c0-7.176,5.883-13.123,13.123-13.123h203.507 c7.24,0,13.123,5.883,13.123,13.123V262.853L335.095,262.853z"></path> </g> <path style="fill:#FFC10D;" d="M172.186,260.396c-28.251,0-51.394,22.497-52.558,50.554h105.115 C223.58,282.893,200.566,260.396,172.186,260.396z"></path> </g></svg>
                    <h1 class="text-xl text-gray-500">Curriculum</h1>
                </router-link>
            </div>
            <div class="flex w-full items-center gap-4 mb-3">
                <svg class="w-12 h-12 text-secondary" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                 <h1 class="text-3xl text-gray-500">Our Institutions</h1>
            </div>
            
            <div class="relative">
                <button class="absolute right-[-20px] top-1/2 translate-y-[-50%] z-10 bg-gray-900 w-10 h-10 rounded-full text-white flex justify-center items-center text-lg hover:bg-secondary transition duration-300 ease-in-out">&rarr;</button>
                <button class="absolute left-[-20px] top-1/2 translate-y-[-50%] z-10 bg-gray-900 w-10 h-10 rounded-full text-white flex justify-center items-center text-lg hover:bg-secondary transition duration-300 ease-in-out">&larr;</button>
                <div class="grid grid-cols-2 md:grid-cols-6 rounded-xl border border-slate-700 overflow-hidden mb-4 relative">
                    <router-link :to="'university/'+ind._id" v-for="ind in institutions" :key="ind.id" class="card-hover dark2 h-44 flex flex-col justify-between items-center overflow-hidden">
                        <img :src="baseUrl+ind.logo" :alt="ind.name" class="w-full px-4 object-cover">
                        <h1 class="text-xl text-center">{{ind.name}}</h1>
                    </router-link>
                </div>
            </div>
            
            <div class="flex w-full items-center gap-4 mb-3">
                <svg class="w-12 h-12 text-secondary" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                 <h1 class="text-3xl text-gray-500">What we have for you</h1>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-2 mb-5">
                <div class="border rounded-lg overflow-hidden" v-for="mainCat in datas.mainCategories" :key="mainCat">
                    <h2 class="text-2xl w-full border-b p-4 bg-gray-100">{{mainCat.name}}</h2>
                    <ul class="h-56 overflow-x-scroll p-4 custom-scrollbar">
                        <li v-for="(ty, index) in mainCat.cats" :key="ty" class="link"><router-link to="#">{{index+=1}}. {{ty.name}}</router-link></li>
                    </ul>
                </div>
            </div>

        </div>
        <div class="flex w-full items-center gap-4">
        <svg class="w-12 h-12 text-secondary"  aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
        <h1 class="text-3xl text-gray-500">Top Review Industries</h1>
        </div>
        </div>
        <!-- <div class="sliderPane flex gap-2 overflow-x-scroll px-3 md:px-4 lg:px-32 pb-2">
            <div v-for="img in images" :key="img"  class="mb-2 flex justify-center items-end flex-grow flex-shrink-0 rounded-3xl bg-gray-200 py-2 px-4 text-white h-52 hover:bg-green-700 relative  overflow-hidden cursor-pointer orgItem">
                <img :src="img.download_url" :alt="img.author" class="absolute top-0 left-0 w-full h-full object-cover z-0">
                <div class="absolute z-10 bg-gray-50 text-gray-600 top-auto w-[90%] left-auto rounded-3xl px-4 py-2">
                    {{ img.author }}
                </div>
            </div>
        </div> -->
  <swiper
    :slides-per-view="distanceToLeft<=20?3:8"
    :space-between="10"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide @click="hello(img._id)" v-for="(img, index) in industries" :key="index" :style="getFirstItemStyle(index)"  class="mb-2 flex justify-center items-end flex-grow flex-shrink-0 rounded-3xl bg-gray-200 py-2 px-4 text-white h-52 hover:bg-green-700 relative  overflow-hidden cursor-pointer orgItem">
        <img :src="baseUrl+img.logo" :alt="img.name" class="absolute top-0 left-0 w-full h-full object-cover z-0">
                <div class="absolute z-10 bg-gray-50 text-gray-600 top-auto w-[90%] left-[5%] rounded-3xl px-4 py-2 opacity-[.8] bottom-2 text-center">
                    {{ img.name }}
                </div>
    </swiper-slide>
  </swiper>
        <div class="grid max-w-screen-lg mx-auto py-4 justify-center grid-cols-1 md:grid-cols-2">
        <div class="flex w-full items-center gap-4">
        <svg class="w-12 h-12 text-secondary" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
        <h1 class="text-3xl text-gray-500">Recent Opportunities in:</h1>
        </div>
        </div>
         
        <div class="grid max-w-screen-lg mx-auto px-3 md:px-0 py-22">
            
        <div v-if="isLoaded" class="flex gap-2 flex-wrap  overflow-hidden mb-4">
            
            <div class="mb-2 rounded-3xl py-2 px-4 text-white hover:bg-green-700 whitespace-nowrap cursor-pointer" :class="'all'==activeCat?'bg-green-500':'bg-stone-700'" @click="activeCat='all'">
            All
            </div>
            <div v-for="(job, index) in datas.categories" :key="index" :datas="JSON.stringify(job)" class="mb-2 rounded-3xl py-2 px-4 text-white hover:bg-green-700 whitespace-nowrap cursor-pointer" :class="job.name==activeCat?'bg-green-500':'bg-stone-700'" @click="activeCat=job.name">
            {{ job.name }}
            </div>
        </div>
        <div v-if="!isLoaded"  class="sliderPane flex gap-2 overflow-x-scroll px-2 md:px-4 lg:px-32 pb-2">
                <div v-for="job in 10" :key="job" class="mb-2 rounded-3xl text-gray-300 h-10 py-2 px-4 hover:bg-gray-300 bg-gray-300">
                    sampletext</div>
        </div>
            <div v-if="isLoaded">
                <jobCardVue v-for="job in datas" :key="job" :datas="JSON.stringify(job)" router="/opportunity" :hasDesc=true></jobCardVue>
            </div>
            <div v-if="!isLoaded">
                <jobCardVueSkeleton v-for="job in 3" :key="job" :hasDesc=true></jobCardVueSkeleton>
            </div>
            <div class="flex items-center justify-center" v-if="isLoaded">
                <FormButton type="button" label="Load More" bstyle="normal"></FormButton>
            </div>
        </div>
        <pageFooterVue></pageFooterVue>
    </div>
</template>

<script>

import headerNavVue from './utils/headerNav.vue'
import pageFooterVue from './utils/pageFooter.vue'
// import FormButton from './utils/FormButton.vue';
// import 'vue3-carousel/dist/carousel.css'
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import jobCardVue from './utils/jobCard.vue';
import jobCardVueSkeleton from './utils/skeletons/jobCard.vue';
import apiService from '../assets/api/apiService.js'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
    export default {
        data(){
            return{
                username: 'cyemezo',
                datas:[],
                industries: [],
                institutions: [],
                activeCat:'all',
                isLoaded:false,
                distanceToLeft: 0,
                itemsToShow:3,
                baseUrl: 'http://innodip.rw:8004/',
            }
        },
        components:{
            headerNavVue,
            pageFooterVue,
            // FormButton, 
            // Carousel,
            // Slide,
            // Pagination,
            // Navigation,
            jobCardVue,
            jobCardVueSkeleton,
      Swiper,
      SwiperSlide,
        },
        setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
        };
        },
        mounted(){
            apiService.getOpportunities().then(jobsList => {
                this.datas = jobsList,
                console.log(jobsList)
                // this.activeCat = jobsList.categories[0].name;
                this.isLoaded = true
            });
            apiService.getIndustries().then(industryList => {
                this.industries = industryList;
            });
            apiService.getInstitutions().then(instituteList => {
                this.institutions = instituteList;
            });
            this.getDistanceToLeft();
            document.title="Innovative Digital Platform - HOME"
        },
        methods:{
            hello(id){
                this.$router.push('industry/'+id)
            },
            sendData(){
                const form = document.getElementById('formData');
                const serializedData = apiService.serializeFormData(form);
                console.log(serializedData);
            },
            getDistanceToLeft() {
            const element = this.$refs.myElement;
            if (element) {
                const rect = element.getBoundingClientRect();
                this.distanceToLeft = rect.left;
            }
            },
            getFirstItemStyle(index) {
            if (index === 0) {
                return {
                /* Apply your CSS styles for the first item here */
                marginLeft: this.distanceToLeft+'px',
                };
            }
            return {}; // Empty object for other items (no additional styles)
            },

        },
        breakpoints: {
      // 700px and up
      640: {
        itemsToShow: 2.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
    }
</script>

<style scoped>
.landing{
    background-image: url('@/assets/images/bg_innodip2.jpg');
    background-size: cover;
    background-position: center;
}
.list-wrapper{
    display: inline-block;
    gap: 5px;
  text-align: left;
  overflow: hidden;
}
div.word-list span {
  display: block;
}
div.word-list {
  position: relative;
  animation: cycle ease 5s infinite;
}

@keyframes cycle {
  0% {top: 0;}
  20% {top: 0;}
  30% {top: -100px;}
  50% {top: -100px;}
  60% {top: -200px;}
  80% {top: -200px;}
  100% {top: 0px;}
}

/* colors */
span:nth-child(1) {
  color:#B58C1A;
}
span:nth-child(2) {
  color:#108A37;
}
span:nth-child(3) {
  color:#f7f76f;
}
.orgItem{
    aspect-ratio: 1/1;
}
.sliderPane .carousel__slide{
    margin: 0px 10px;
    cursor: pointer;
}
.sliderPane {
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}

.sliderPane::-webkit-scrollbar {
  width: 0;
  height: 0;
}

.sliderPane::-webkit-scrollbar-thumb {
  background-color: transparent;
}

.sliderPane::-webkit-scrollbar-track {
  background-color: transparent;
}
.homeImg{
    height: 400px;
}
.mobiS{
    width: 100px;
}
.front{
    /* min-height: calc(100vh - 100px); */
}
.dark2 img{
    mix-blend-mode: color-burn;
}
.dark2:hover img{
    mix-blend-mode: normal;
}
/* Custom scrollbar for all browsers */
.custom-scrollbar {
  scrollbar-width: thin;
}

/* WebKit-based browsers */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #108A37;
  border-radius: 5px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #B58C1A;
}

/* Firefox */
.custom-scrollbar::-moz-scrollbar {
  width: 8px;
}

.custom-scrollbar::-moz-scrollbar-thumb {
  background-color: #888;
  border-radius: 5px;
}

.custom-scrollbar::-moz-scrollbar-thumb:hover {
  background-color: #555;
}

/* Internet Explorer */
.custom-scrollbar::-ms-scrollbar {
  width: 8px;
}

.custom-scrollbar::-ms-scrollbar-thumb {
  background-color: #888;
  border-radius: 5px;
}

.custom-scrollbar::-ms-scrollbar-thumb:hover {
  background-color: #555;
}

</style>