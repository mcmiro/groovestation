<template>
  <div>
    <div class="flex h-20">
      <div
        class="fixed md:relative z-40 h-16 w-16 rounded-full bg-theme ml-4 p-4 text-black cursor-pointer hover:bg-transparent border border-opacity-0 hover:border-opacity-100 border-white duration-500"
        @click="toggleMenu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          class="fill-current"
        >
          <g>
            <g>
              <g>
                <path
                  d="M1.7,11.2c12.2,0,24.4,0,36.7,0c1.6,0,1.6-2.5,0-2.5c-12.2,0-24.4,0-36.7,0C0.1,8.8,0.1,11.2,1.7,11.2L1.7,11.2z"
                ></path>
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M1.7,21.2c12.2,0,24.4,0,36.7,0c1.6,0,1.6-2.5,0-2.5c-12.2,0-24.4,0-36.7,0C0.1,18.8,0.1,21.2,1.7,21.2L1.7,21.2z"
                ></path>
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M1.7,31.2c12.2,0,24.4,0,36.7,0c1.6,0,1.6-2.5,0-2.5c-12.2,0-24.4,0-36.7,0C0.1,28.8,0.1,31.2,1.7,31.2L1.7,31.2z"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <Logo />
    </div>
    <nav
      class="fixed md:absolute z-40 left-0 p-8 -mt-20 bg-64309a text-white text-4xl font-bold uppercase whitespace-no-wrap overflow-hidden w-2 duration-300"
      :class="[menuOpen ? nav.active : nav.inActive]"
    >
      <div :class="[menuOpen ? menu.active : menu.inActive]">
        <div
          class="float-right text-white h-8 w-8 cursor-pointer"
          :class="[menuOpen ? closer.active : closer.inActive]"
          @click="toggleMenu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            class="fill-current"
          >
            <g>
              <g>
                <path
                  d="M7.9,33.8c8.6-8.6,17.3-17.3,25.9-25.9C35,6.8,33.2,5,32.1,6.2c-8.6,8.6-17.3,17.3-25.9,25.9
			C5,33.2,6.8,35,7.9,33.8L7.9,33.8z"
                  class="st0"
                ></path>
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M6.2,7.9c8.6,8.6,17.3,17.3,25.9,25.9c1.1,1.1,2.9-0.6,1.8-1.8C25.2,23.4,16.6,14.8,7.9,6.2
			C6.8,5,5,6.8,6.2,7.9L6.2,7.9z"
                  class="st0"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <ul
          class="pt-8 pb-4 font-montserrat-bold"
          :class="[menuOpen ? menu.active : menu.inActive]"
        >
          <li class="pt-2">
            <a
              href="/"
              aria-current="page"
              class="nuxt-link-exact-active nuxt-link-active"
              >Home</a
            >
          </li>
          <li class="pt-2">
            <NuxtLink to="/gallery" class="">Gallerie</NuxtLink>
          </li>
          <li class="pt-2">
            <NuxtLink to="/repertoar" class="">Repertoar</NuxtLink>
          </li>
          <li class="pt-2">
            <NuxtLink to="/kontakt" class="">Kontakt</NuxtLink>
          </li>
          <li class="pt-2">
            <NuxtLink to="/duo-akustik" class="">Duo Akustik</NuxtLink>
          </li>
        </ul>
        <div>
          <a
            href="https://de-de.facebook.com/groovestationvienna/"
            target="blank"
            ><img
              src="~/assets/img/icons/facebook.svg"
              alt=""
              loading="lazy"
              class="h-12 w-12 inline"
          /></a>
          <a href="https://www.instagram.com/groovestation_band/" target="blank"
            ><img
              src="~/assets/img/icons/instagram.svg"
              alt=""
              loading="lazy"
              class="h-12 w-12 inline"
          /></a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      menu: {
        active: "w-full",
        inActive: "w-0 opacity-0",
      },
      nav: {
        active: "w-screen md:pl-4 md:pl-16 md:w-6/12 sm:ml-2",
        inActive: "w-2 px-0",
      },
      closer: {
        active: "mr-8 duration-500",
        inActive: "opacity-0 -mr-32 overflow-hidden",
      },
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style>
</style>