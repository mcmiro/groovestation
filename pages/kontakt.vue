<template>
  <div>
    <div class="w-full bg-1329b9">
      <div class="container mx-auto">
        <NavBar class="light pt-6" />
      </div>
    </div>
    <div class="w-full min-h-screen bg-image text-center">
      <img
        src="~/assets/img/icons/logo-writen.svg"
        alt=""
        class="md:w-8/12 mx-auto px-8 pt-64"
      />
      <p class="text-2xl">Tel: <a href="tel:+436605550550">+436605550550</a></p>
      <p class="text-2xl">
        E-Mail: <a href="groovestation@gmx.at">groovestation@gmx.at</a>
      </p>
      <p class="font-bold text-2xl pt-8">
        Thank you, <br />We will get in touch with you shortly.
      </p>
      <p class="text-2xl py-8">Meanwhile, follow us on:</p>
      <a href="https://de-de.facebook.com/groovestationvienna/" target="blank"
        ><img
          src="~/assets/img/icons/facebook.svg"
          alt=""
          loading="lazy"
          class="w-12 mx-auto inline"
      /></a>
      <a href="https://www.instagram.com/groovestation_band/" target="blank"
        ><img
          src="~/assets/img/icons/instagram.svg"
          alt=""
          loading="lazy"
          class="w-12 mx-auto inline"
      /></a>
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
.bg-image {
  background: linear-gradient(
      0deg,
      hsla(0, 0%, 100%, 0.7),
      hsla(0, 0%, 100%, 0.7)
    ),
    url("~assets/img/content/groovestation.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
}
</style>