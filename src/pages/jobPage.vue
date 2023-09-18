<template>
  <div>
    <headerNavVue></headerNavVue>

    <div class="max-w-screen-lg mx-auto py-4">
      <div
        class="flex flex-col flex-col-reverse md:grid grid-cols-10 gap-4 px-3 md:px-0"
      >
        <div
          class="w-full col-span-10 md:col-span-3 border border-gray-200 rounded-lg overflow-hidden"
        >
          <h1 class="bg-gray-300 p-3 text-xl">Recommended</h1>
          <div v-if="isLoadedRelated">
            <relatedJob
              v-for="job in datas"
              :key="job"
              :datas="JSON.stringify(job)"
              router="/opportunity"
            ></relatedJob>
          </div>
          <div v-if="!isLoadedRelated">
            <relatedJobSkeleton
              v-for="job in 5"
              :key="job"
            ></relatedJobSkeleton>
          </div>
        </div>
        <div class="w-full col-span-10 md:col-span-7 grid-cols-10">
          <div class="w-full flex flex-col md:flex-row card relative" v-if="isLoaded">
            <span
              class="md:absolute top-3 right-3 border border-1 px-2 py-1 rounded-lg bg-gray-400 text-white"
              >{{ jobData.category.industryCategoryName }}</span
            >
            <div class="col-span-2 flex justify-start">
              <router-link
                :title="'Visit ' + jobData.provider.industryName"
                :to="'/industry/' + jobData.provider.industryId"
                class="hidden md:flex w-44 h-44 md:w-32 md:h-32 items-center justify-center bg-gray-200 border border-gray-300 rounded-lg overflow-hidden"
                ><img :src="baseUrl + jobData.provider.industryLogo" alt=""
              /></router-link>
            </div>
            <div class="col-span-8 pl-3 pt-0">
              <h2 class="text-xl text-gray-500">{{ jobData.name }}</h2>
              <h1 class="text-3xl mb-3 text-gray-700">{{ jobData.title }}</h1>
              <div class="flex flex-col md:flex-row gap-3 text-sm">
                <div
                  class="flex items-center sm:justify-center md:justify-start gap-2"
                >
                  <svg
                    class="w-6 h-6 text-secondary"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>{{ jobData.location }}</span>
                </div>
                <div
                  class="flex items-center sm:justify-center md:justify-start gap-2"
                >
                  <svg
                    class="w-6 h-6 text-secondary"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>Posted: {{ jobData.publicationDate }}</span>
                </div>
                <div
                  v-if="!jobData.isSalary"
                  class="flex items-center sm:justify-center md:justify-start gap-2"
                >
                  <svg
                    class="w-6 h-6 text-secondary"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span
                    >{{ jobData.salaryRange }}
                    {{ jobData.salaryCurrency }}</span
                  >
                </div>
                <div
                  class="flex items-center sm:justify-center md:justify-start gap-2"
                >
                  <svg
                    class="w-6 h-6 text-secondary"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>Deadline: {{ jobData.deadline }}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- skeleton -->
          <div class="w-full flex card" v-if="!isLoaded">
            <div class="col-span-2 flex justify-start">
              <div
                class="hidden md:flex w-44 h-44 md:w-32 md:h-32 items-center justify-center bg-gray-200 border border-gray-300 rounded-lg overflow-hidden"
              ></div>
            </div>
            <div class="col-span-8 pl-3 pt-0">
              <h2 class="bg-gray-300 h-4 w-40 rounded-lg"></h2>
              <h1 class="bg-gray-300 h-4 w-58 rounded-lg mt-4"></h1>
              <div class="flex gap-3 mt-6">
                <div
                  class="flex items-center sm:justify-center md:justify-start gap-2"
                >
                  <svg class="w-6 h-6 bg-gray-300 rounded-lg"></svg>
                  <span class="h-4 w-24 bg-gray-300 rounded-lg"></span>
                </div>
                <div
                  class="flex items-center sm:justify-center md:justify-start gap-2"
                >
                  <svg class="w-6 h-6 bg-gray-300 rounded-lg"></svg>
                  <span class="h-4 w-24 bg-gray-300 rounded-lg"></span>
                </div>
                <div
                  class="flex items-center sm:justify-center md:justify-start gap-2"
                >
                  <svg class="w-6 h-6 bg-gray-300 rounded-lg"></svg>
                  <span class="h-4 w-24 bg-gray-300 rounded-lg"></span>
                </div>
                <div
                  class="flex items-center sm:justify-center md:justify-start gap-2"
                >
                  <svg class="w-6 h-6 bg-gray-300 rounded-lg"></svg>
                  <span class="h-4 w-24 bg-gray-300 rounded-lg"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full flex flex-col" v-if="!isLoaded">
            <!-- description -->
            <div class="mb-4" v-for="p in 3" :key="p">
              <div class="flex w-full items-center gap-4 mb-4">
                <svg class="w-8 h-8 bg-gray-300 rounded-lg"></svg>
                <span class="h-4 w-32 bg-gray-300 rounded-lg"></span>
              </div>
              <p class="h-2 w-52 bg-gray-300 rounded-lg my-2"></p>
              <p class="h-2 w-42 bg-gray-300 rounded-lg my-2"></p>
              <p class="h-2 w-32 bg-gray-300 rounded-lg my-2"></p>
              <p class="h-2 w-62 bg-gray-300 rounded-lg my-2"></p>
            </div>
          </div>
          <div class="w-full flex flex-col" v-if="isLoaded">
            <!-- description -->
            <div class="mb-4">
              <div class="flex w-full items-center gap-4 mb-4">
                <svg
                  class="w-10 h-10 text-secondary"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <h1 class="text-3xl text-gray-500">Description</h1>
              </div>
              <p v-html="jobData.description"></p>
            </div>
            <!-- requirement -->
            <div class="mb-4">
              <div class="flex w-full items-center gap-4 mb-4">
                <svg
                  class="w-10 h-10 text-secondary"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <h1 class="text-3xl text-gray-500">Requirements</h1>
              </div>
              <p v-html="jobData.requirement"></p>
            </div>
            <!-- facilities -->
            <div class="mb-4">
              <div class="flex w-full items-center gap-4 mb-4">
                <svg
                  class="w-10 h-10 text-secondary"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <h1 class="text-3xl text-gray-500">Qualifications</h1>
              </div>
              <p v-html="jobData.qualification"></p>
            </div>
            <div class="mb-4">
              <div class="flex w-full items-center gap-4 mb-4">
                <svg
                  class="w-10 h-10 text-secondary"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <h1 class="text-3xl text-gray-500">Facilities</h1>
              </div>
              <p>{{ jobData.facility.facilityName }}</p>
            </div>
          </div>

          <div
            class="w-full flex justify-between items-center card"
            v-if="!isLoaded"
          >
            <div class="flex gap-4">
              <div class="w-9 h-9 bg-gray-400 rounded-lg"></div>
              <div class="w-9 h-9 bg-gray-400 rounded-lg"></div>
              <div class="w-9 h-9 bg-gray-400 rounded-lg"></div>
            </div>
            <div class="w-20 h-9 bg-gray-400 rounded-lg"></div>
          </div>
          <div
            class="w-full flex justify-between items-center card"
            v-if="isLoaded"
          >
            <div class="flex gap-4">
              <a
                target="_blank"
                :href="'https://www.facebook.com/share.php?u=' + curUrl"
                class="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
              >
                <svg
                  class="w-5 h-5 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  />
                </svg>
              </a>

              <a
                target="_blank"
                :href="`http://twitter.com/share?&url=${curUrl}&text=${msg}&hashtags=${tags.trim()}`"
                class="bg-blue-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
              >
                <svg
                  class="w-5 h-5 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                  />
                </svg>
              </a>
              <a
                target="_blank"
                :href="`https://www.linkedin.com/sharing/share-offsite/?url=${curUrl}`"
                class="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
              >
                <svg
                  class="w-5 h-5 fill-current"
                  role="img"
                  viewBox="0 0 256 256"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"
                    ></path>
                  </g>
                </svg>
              </a>
              <a
                target="_blank"
                :href="`https://api.whatsapp.com/send?text=${msg}: ${curUrl}`"
                class="bg-green-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
                  />
                </svg>
              </a>
            </div>
            <FormButton v-if="!isLoaded"
              type="submit"
              label="Apply Now"
              bstyle="primary"
              class="mt-auto"
            ></FormButton>
          </div>
        </div>
      </div>
    </div>
    <pageFooterVue></pageFooterVue>
  </div>
</template>

<script>
import headerNavVue from "./utils/headerNav.vue";
import pageFooterVue from "./utils/pageFooter.vue";
import FormButton from "./utils/FormButton.vue";
import relatedJob from "./utils/relatedJobs.vue";
import relatedJobSkeleton from "./utils/skeletons/relatedJobs.vue";
import apiService from "../assets/api/apiService.js";
export default {
  data() {
    return {
      username: "cyemezo",
      datas: [],
      jobData: [],
      isLoaded: false,
      isLoadedRelated: false,
      jodId: "",
      baseUrl: "http://innodip.rw:8004/",
      msg: null,
      title: null,
      curUrl: null,
      tags: null,
    };
  },
  components: {
    headerNavVue,
    pageFooterVue,
    FormButton,
    relatedJob,
    relatedJobSkeleton,
  },
  mounted() {
    this.jobId = this.$route.params.id;
    this.loadJob();

    apiService.getOpportunities().then((jobsList) => {
      (this.datas = jobsList), (this.isLoadedRelated = true);
    });
  },
  methods: {
    loadJob() {
      const id = this.$route.params.id;
      apiService.getData("opportunity/" + id).then((res) => {
        this.jobData = res.data;
        this.isLoaded = true;
        (document.title = this.jobData.name),
          (this.curUrl = window.location.href);
        this.title = res.data.name;
        this.msg = res.data.name+' Innovative Digital Platform';
        this.tags = res.data.keyword.join(",");
      });
    },
  },
  watch: {
    $route(to) {
      this.isLoaded = false;
      this.jobId = to.params.id;
      this.loadJob();
    },
  },
};
</script>

<style scoped>
.sliderPane .carousel__slide {
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
</style>