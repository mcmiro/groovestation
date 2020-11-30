<template>
  <div>
    <div class="w-full bg-1329b9">
      <div class="container mx-auto">
        <NavBar class="light pt-6" />
      </div>
    </div>
    <div class="container mx-auto pb-16">
      <h1 class="p-8 text-4xl font-montserrat-bold">Repertoar</h1>
      <div class="grid md:grid-cols-3 gap-4">
        <div class="px-8" v-for="(song, index) in songs" :key="index">
          <span class="font-montserrat-bold">{{ song.name }} </span>
          <p class="pb-4">{{ song.artist }}</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      songs: [
        { name: "Wicked Game", artist: "Criss Isack" },
        { name: "Englishman in New York", artist: "Sting" },
        { name: "Why did you do it", artist: "Strach" },
        { name: "I need a Dollar", artist: "Aloe Blacc" },
        { name: "Bussi Baby", artist: "Wanda" },
        { name: "Little less conversation", artist: "Elvis" },
        { name: "Are you gonna be my girl", artist: "Jat" },
        { name: "Heroes", artist: "David Bowie" },
        { name: "Rebel Yel", artist: "Billy Idol" },
        { name: "Summer in the City", artist: "Cocker" },
        { name: "Vertigo", artist: "U2" },
        { name: "Where the streets has no name", artist: "U2" },
        { name: "Message in the bottle", artist: "Sting" },
        { name: "Let’s Dance", artist: "David Bowie" },
        { name: "Don’t you forget about me", artist: "Simply Minds" },
        { name: "Suspicious Minds", artist: "Elvis" },
        { name: "Hound Dog", artist: "Elvis" },
        { name: "Burning Love", artist: "Elvis" },
        { name: "Crazy little thing called love", artist: "Queen" },
        { name: "I feel good", artist: "James Brown" },
        { name: "Uptown Funk", artist: "Bruno Mars" },
        { name: "Treasure", artist: "Bruno Mars" },
        { name: "Dance with somebody", artist: "Mando Diao" },
        { name: "Blured Lines", artist: "Pharell" },
        { name: "Sex Bomb", artist: "Tom Jones" },
        { name: "Get Lucky", artist: "Pharell" },
        { name: "Kiss", artist: "Prince" },
        { name: "White wedding", artist: "Billy Idol" },
        { name: "Are you gonna go my way", artist: "Kravitz" },
        { name: "Fly away", artist: "Kravitz" },
        { name: "Cocaine", artist: "Clapton" },
        { name: "White Room", artist: "Cream" },
        { name: "I belong to you", artist: "Kravitz" },
        { name: "Californication", artist: "RHCP" },
        { name: "Danni California", artist: "RHCP" },
        { name: "Under the Bridge", artist: "RHCP" },
        { name: "Give it Away", artist: "RHCP" },
        { name: "Superstition", artist: "Wonder" },
        { name: "Under my Thumb", artist: "Rollin Stones" },
        { name: "Satisfaction", artist: "Rolling Stones" },
        { name: "Aint no Use", artist: "The Meters" },
        { name: "People Say", artist: "The Meters" },
        { name: "Pride and Joy", artist: "Stevie Ray Vaughan" },
        { name: "Walking by myself", artist: "Gary Moore" },
        { name: "Shape of my heart", artist: "Sting" },
        { name: "Hamm Kumst", artist: "Seiler und Speer" },
        { name: "Just the two of us", artist: "Bill Witters" },
        { name: "Celebration", artist: "Kool and the Gang" },
      ],
    };
  },
};
</script>
