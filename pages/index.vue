<template>
  <div>
    <Header />
    <div class="lg:container mx-auto">
      <div
        class="relative h-64 md:w-5/12 m-6 md:-mt-32 z-20"
        :class="[!isLoaded ? 'empty' : '']"
      >
        <iframe
          height="256"
          class="w-full"
          src="https://www.youtube.com/embed/TBlj4ZJOd18"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="inline-block md:block w-full px-6">
        <div
          class="bg-f0f0fe w-full lg:w-9/12 md:-mt-20 lg:-mt-48 xl:-mt-64 md:p-16 p-8 float-right text-right font-light text-xl leading-relaxed"
        >
          <div class="w-full md:pl-32">
            Wanna have a party for a remembering?<br />
            Somebody to move your feet on the dancefloor?<br />
            Meet our band and hire us to do the groove!
          </div>
          <div
            class="w-full text-5xl pt-16 text-b4009e uppercase leading-tight font-montserrat-bold"
          >
            Mehr groove<br />
            geht nicht
          </div>
        </div>
      </div>
      <div
        class="relative md:w-6/12 md:mt-72 lg:mt-32 pt-16 p-6 md:pr-16 bg-white font-light text-base leading-relaxed"
      >
        <strong>Groove Station</strong> ist DIE Band in Wien, die Ihr Event zu
        einem unvergesslichen Erlebnis macht. Starker Leadgesang + herausragende
        Begleitung + leid enschaftlicher Rockappeal: das ergibt die Musik, die
        jedes Event zum Kochen bringt. Darüber hinaus garantiert Groove Station
        „High Class-Entertainment“ sowie eine perfekte Bühnenshow mit
        Tanzgarantie.
      </div>
      <div class="w-6/12 pl-16 -mt-28 float-right hidden md:block">
        <img
          src="~/assets/img/content/groove-station-band-vienna.jpg"
          alt=""
          loading="lazy"
        />
      </div>
    </div>
    <div class="lg:container h-auto mx-auto px-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 w-full">
        <div
          class="text-6xl uppercase font-extrabold leading-tight text-bordered font-montserrat-bold tracking-wider"
        >
          <h5 class="leading-none">
            DIE BESTE<br />
            PARTY-BAND<br />
            FÜR IHR<br />
            EVENT!
          </h5>
        </div>
        <div class="flex justify-center">
          <NuxtLink to="/repertoar"
            ><div
              class="h-64 w-64 flex mr-6 sm:-ml-64 md:ml-0 mt-80 md:mt-56 bg-150086-75 absolute right-0 sm:right-auto z-20 rounded-full text-white uppercase transform rotate-90 hover:rotate-0 text-center text-2xl"
            >
              <p class="m-auto">Repertoar</p>
            </div></NuxtLink
          >
          <div class="md:w-7/12 md:-mt-16 md:ml-36">
            <img
              src="~/assets/img/content/sänger-groovestation.jpg"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div
        class="md:w-8/12 mx-auto mt-32 md:mt-16 py-16 px-12 md:px-16 bg-f0f0fe"
      >
        <div class="w-full md:w-6/12">
          Seit der Gründung im Jahr 2017 ist Groove Station eine der
          gefragtesten Partybands in Wien für Pop-Rock, Soul, Funk & Discomusik
          der 60er, 70er und 80er bis hin zu den aktuellsten Hits aus
          verschiedenen Musikrichtungen.
        </div>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 w-full bg-white pt-12 pb-24 sm:pb-0"
      >
        <div class="md:-mt-16 h-80 md:h-auto">
          <img
            class="md:w-10/12"
            src="~/assets/img/content/groove-station-outside.jpg"
            alt=""
            loading="lazy"
          />
          <NuxtLink to="/gallery"
            ><div
              class="h-64 w-64 -mt-32 md:-mt-32 md:ml-16 flex bg-pink-500 bg-opacity-50 hover:bg-opacity-75 absolute z-20 rounded-full text-white uppercase transform rotate-45 hover:-rotate-45 text-center text-2xl bg-f24cdf-50"
            >
              <p class="m-auto">Gallerie</p>
            </div>
          </NuxtLink>
        </div>
        <div class="md:-mt-32">
          <div
            class="pt-8 pl-8 bg-white text-5xl float-right leading-none text-right text-8a00d3 uppercase font-montserrat-bold leading-tight"
          >
            LET’S GROOVE<br />
            TOGETHER!
          </div>
        </div>
      </div>
      <div class="md:h-64">
        <div
          class="bg-f0f0fe md:w-9/12 md:mt-6 lg:-mt-32 px-8 py-16 md:p-16 float-right text-right font-light text-lg leading-relaxed"
        >
          <div class="w-8/12 float-right">
            Gespielt werden Welthits von Sting, Michael Jackson, Red Hot Chili
            Peppers, Lenny Kravitz, Prince, Queen, James Brown, Stevie Wonder,
            Bruno Mars, Pharell Williams u.v.a.m.
          </div>
        </div>
      </div>
    </div>
    <div class="w-full overflow-hidden pb-32">
      <Testimonials />
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoaded: false,
    };
  },
  mounted() {
    window.addEventListener("load", () => {
      this.isLoaded = true;
    });
  },
};
</script>

<style lang="scss">
header {
  background-image: url("~assets/img/header/groove-station.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 60% center;
}
</style>
