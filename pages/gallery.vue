<template>
  <div>
    <div class="w-full bg-1329b9">
      <div class="container mx-auto">
        <NavBar class="light pt-6" />
      </div>
    </div>
    <Modal v-if="modalOpen" @close-modal="closeModal" :image="activeImage" />
    <div class="container mx-auto px-4 py-16">
      <h1 class="py-4 text-4xl font-montserrat-bold">Gallerie</h1>
      <div class="w-full text-center">
        <img
          v-for="(image, index) in images"
          :key="index"
          loading="lazy"
          :src="image"
          @click="openImage(image)"
          class="image w-6/12 sm:w-4/12 md:w-3/12 inline pt-2 px-1 cursor-pointer"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      modalOpen: false,
      activeImage: null,
    };
  },
  mounted() {
    this.importAll(require.context("../assets/gallery/", true, /\.jpg$/));
  },

  methods: {
    importAll(r) {
      r.keys().forEach((key) => this.images.push(r(key)));
    },
    closeModal() {
      this.modalOpen = false;
    },
    openImage(image) {
      this.modalOpen = true;
      this.activeImage = image;
    },
  },
};
</script>

<style lang="scss">
</style>