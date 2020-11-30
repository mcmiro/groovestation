<template>
  <div>
    <NavBar class="pt-6" />
    <div class="w-full">
      <div class="w-full md:w-8/12 float-left relative -top-28 overflow-hidden">
        <img
          src="~/assets/img/content/groovestation-gesang.jpg"
          alt=""
          class="object-cover"
        />
        <div
          class="absolute top-0 left-0 overlay w-full h-full bg-gradient-to-r from-black opacity-40"
        ></div>
      </div>
      <div
        class="w-full md:w-5/12 relative md:absolute -top-28 md:top-16 md:right-0"
      >
        <img
          src="~/assets/img/content/akustik.jpg"
          alt=""
          class="w-full object-cover block"
        />
      </div>
    </div>
    <div
      class="w-full relative text-bordered text-6xl font-montserrat-bold overflow-hidden -top-100"
      @mouseover="hovered = true"
      @mouseleave="hovered = false"
    >
      <div
        class="text-right-to-left text-blue-900"
        :class="[hovered ? 'move' : '']"
      >
        AKUSTIK
      </div>
      <div
        class="text-left-to-right text-white"
        :class="[hovered ? 'move' : '']"
      >
        DUO
      </div>
    </div>
    <div class="w-full overflow-hidden px-6 md:px-0 pt-6 pb-16">
      <div class="md:w-8/12 p-12 bg-f0f0fe float-left">
        <div class="w-full">
          Seit der Gründung im Jahr 2017 ist Groove Station eine der
          gefragtesten Partybands in Wien für Pop-Rock, Soul, Funk &amp;
          Discomusik der 60er, 70er und 80er bis hin zu den aktuellsten Hits aus
          verschiedenen Musikrichtungen.
        </div>
      </div>
      <a href="/repertoar" class=""
        ><div
          class="h-64 w-64 flex mt-24 ml-0 -mt-8 md:mt-16 md:-ml-20 float-left bg-150086-75 z-20 rounded-full text-white uppercase transform rotate-90 hover:rotate-0 text-center text-2xl"
        >
          <p class="m-auto">Repertoare</p>
        </div></a
      >
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      hovered: false,
    };
  },
};
</script>