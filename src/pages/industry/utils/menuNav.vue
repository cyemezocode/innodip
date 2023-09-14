<template>
  <div
    class="bg-gray-200 border-r border-gray-400 h-[100vh] flex flex-col items-center pt-4 sticky top-0 mobile-menu"
  >
    <div
      class="block md:hidden absolute top-5 right-5 text-3xl cursor-pointer toggleMobile"
    >
      &times;
    </div>
    <router-link to="/seeker/dashboard/"
      ><img src="../../../assets/logo.png" class="h-10" alt=""
    /></router-link>
    <div class="md:block w-full p-4">
      <ul class="flex flex-col gap-2">
        <li class="text-lg link">
          <router-link to="/industry/" class="flex items-center gap-2">
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            Dashboard</router-link
          >
        </li>

        <li class="text-lg link">
          <router-link
            to="/industry/opportunities/"
            class="flex items-center gap-2"
          >
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            Opportunies</router-link
          >
        </li>
        <li class="text-lg link">
          <router-link
            to="/industry/applications/"
            class="flex items-center gap-2"
          >
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            Applications</router-link
          >
        </li>
        <li class="text-lg link">
          <router-link
            to="/industry/universities/"
            class="flex items-center gap-2"
          >
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            Academia</router-link
          >
        </li>
        <li class="text-lg link">
          <router-link to="#" class="flex items-center gap-2">
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            Curriculums</router-link
          >
        </li>
        <li class="text-lg link">
          <router-link to="#" class="flex items-center gap-2">
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            Publication</router-link
          >
        </li>
        <li class="text-lg link">
          <router-link to="#" class="flex items-center gap-2">
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            Consultancy</router-link
          >
        </li>
        <li class="text-lg link">
          <router-link to="#" class="flex items-center gap-2">
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            Research</router-link
          >
        </li>
        <li class="text-lg link">
          <router-link to="#" class="flex items-center gap-2">
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            Internship</router-link
          >
        </li>
        <div class="h-[1px] my-4 bg-gray-300 w-full"></div>
        <li class="text-lg link">
          <router-link to="/industry/profile/" class="flex items-center gap-2">
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            Profile</router-link
          >
        </li>

        <li class="text-lg link danger">
          <router-link to="" @click="logOut" class="flex items-center gap-2">
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.636 5.636a9 9 0 1012.728 0M12 3v9"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            Sign Out</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerNav",
  mounted() {
    const btn = document.querySelector(".toggleMobile");
    const menu = document.querySelector(".mobile-menu");

    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  },
  methods: {
    logOut() {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("currentType");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
</style>