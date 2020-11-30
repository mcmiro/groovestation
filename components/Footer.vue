<template>
  <div>
    <footer>
      <div
        class="w-full py-4 bg-8a00d3 text-white text-center text-4xl font-montserrat-bold"
      >
        VERFÜGBARKEIT
        <p class="text-lg font-normal">
          Jetzt unverbindliches Angebot anfordern
        </p>
      </div>
      <div class="w-full pb-20">
        <form submit.prevent id="form" class="py-24">
          <div class="lg:container mx-auto">
            <div class="grid md:grid-cols-2 gap-4">
              <!-- Name -->
              <div class="mb-4 px-8">
                <label class="block text-white text-xl ml-6 mb-2" for="name">
                  Name*
                </label>
                <input
                  class="shadow appearance-none border w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Vor- und Nachname"
                  v-model.trim="$v.name.$model"
                />
                <div class="h-2 pt-2 ml-6">
                  <div v-if="submitStatus == 'ERROR'">
                    <p v-if="!$v.name.required" class="text-red-500 text-xs">
                      Bitte Name eingeben
                    </p>
                  </div>
                </div>
              </div>
              <!-- Email -->
              <div class="mb-4 px-8">
                <label class="block text-white text-xl ml-6 mb-2" for="email">
                  E-Mail-Adresse*
                </label>
                <input
                  class="shadow appearance-none border w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  placeholder="deine.email@gmail.com"
                  v-model.trim="$v.email.$model"
                />
                <div class="h-2 pt-2 ml-6">
                  <div v-if="submitStatus == 'ERROR'">
                    <p v-if="!$v.email.required" class="text-red-500 text-xs">
                      Bitte E-Mail-Adresse eingeben
                    </p>
                    <p v-if="!$v.email.email" class="text-red-500 text-xs">
                      Bitte richtige E-Mail-Adresse eingeben
                    </p>
                  </div>
                </div>
              </div>
              <!-- Date -->
              <div class="mb-4 px-8">
                <label class="block text-white text-xl ml-6 mb-2" for="date">
                  Datum*
                </label>
                <client-only
                  ><date-picker
                    id="date"
                    placeholder="Datum des Events"
                    :language="de"
                    v-model.trim="$v.date.$model"
                    input-class="shadow appearance-none border w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </client-only>
                <div class="h-2 pt-2 ml-6">
                  <div v-if="submitStatus == 'ERROR'">
                    <p v-if="!$v.date.required" class="text-red-500 text-xs">
                      Bitte Datum eingeben
                    </p>
                  </div>
                </div>
              </div>
              <!-- Time -->
              <div class="mb-4 px-8">
                <label class="block text-white text-xl ml-6 mb-2" for="time">
                  Uhrzeit*
                </label>
                <input
                  class="shadow appearance-none border w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="time"
                  type="text"
                  placeholder="Uhrzeit des Events"
                  v-model.trim="$v.time.$model"
                />
                <div class="h-2 pt-2 ml-6">
                  <div v-if="submitStatus == 'ERROR'">
                    <p v-if="!$v.time.required" class="text-red-500 text-xs">
                      Bitte Uhrzeit eingeben
                    </p>
                  </div>
                </div>
              </div>
              <!-- Location -->
              <div class="mb-4 px-8">
                <label
                  class="block text-white text-xl ml-6 mb-2"
                  for="location"
                >
                  Location*
                </label>
                <input
                  class="shadow appearance-none border w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="location"
                  type="text"
                  placeholder="Ort, PLZ"
                  v-model.trim="$v.location.$model"
                />
                <div class="h-2 pt-2 ml-6">
                  <div v-if="submitStatus == 'ERROR'">
                    <p
                      v-if="!$v.location.required"
                      class="text-red-500 text-xs"
                    >
                      Bitte Ort eingeben
                    </p>
                  </div>
                </div>
              </div>
              <!-- Type -->
              <div class="mb-4 px-8">
                <label class="block text-white text-xl ml-6 mb-2" for="art">
                  Grund des Feiers
                </label>
                <input
                  class="shadow appearance-none border w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="art"
                  type="text"
                  v-model="subject"
                  placeholder="Hochzeit, Geburtstag, Weihnachtsfeier..."
                />
              </div>
            </div>
            <!-- Message -->
            <div class="mb-4 px-8 w-full">
              <label class="block text-white text-xl ml-6 mb-2" for="message">
                Sonstiges
              </label>
              <textarea
                class="shadow appearance-none border w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                type="text"
                v-model="message"
                placeholder="z.B. Repoerotar, Lieder Wünsche oder es wäre schön, wenn..."
                rows="4"
              ></textarea>
            </div>
            <!-- Check Conditions -->
            <div class="mb-4 px-8 w-full">
              <label class="inline-flex items-center mt-3 cursor-pointer">
                <input
                  type="checkbox"
                  v-model.trim="checkConditions"
                  @change="$v.checkConditions.$touch()"
                  class="form-checkbox h-6 w-6 text-red-600 cursor-pointer"
                  checked
                /><span class="ml-2 text-white"
                  >Hiermit bestätige ich die
                  <NuxtLink to="/dsgvo" class="text-blue-300"
                    >Datenschutzerklärung</NuxtLink
                  ></span
                >
              </label>
              <div class="h-2 pt-2 ml-6">
                <div v-if="submitStatus == 'ERROR'">
                  <p
                    v-if="$v.checkConditions.$error"
                    class="text-red-500 text-xs"
                  >
                    Sie müssen unsere Datenschutzerklärung akzeptieren
                  </p>
                </div>
              </div>
            </div>
            <!-- Duration -->
            <div class="mb-4 w-8/12 md:w-5/12 mx-auto text-center pt-6">
              <label class="block text-white text-xl mb-2 pb-4" for="duration">
                Wie lange soll die Band spielen?
              </label>
              <input
                class="range bg-purple-200 bg-opacity-75 rounded-full"
                id="duration"
                type="range"
                min="1"
                max="5"
                step="1"
                v-model="duration"
              />
              <div class="pt-8">
                <p v-if="duration == 1" class="text-white">
                  {{ duration }} Stunde
                </p>
                <p v-else class="text-white">{{ duration }} Stunden</p>
              </div>
            </div>
          </div>
          <!-- Submit button -->
          <div>
            <button
              class="text-white mx-auto mt-20 block py-4 px-16 rounded-xl focus:outline-none focus:shadow-outline gradient-purple-pink"
              type="button"
              @click="sendRequest"
            >
              Anfrage senden
            </button>
          </div>
        </form>
        <div class="w-full text-center">
          <NuxtLink to="/dsgvo" class="text-white text-xs"
            >Datenschutz</NuxtLink
          >
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { de } from "vuejs-datepicker/dist/locale";
import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      submitStatus: null,
      name: null,
      email: null,
      date: null,
      time: null,
      location: null,
      subject: "",
      message: "",
      checkConditions: false,
      duration: 2,
      de: de,
    };
  },
  validations: {
    name: {
      required,
    },
    email: {
      required,
      email,
    },
    date: {
      required,
    },
    time: {
      required,
    },
    location: {
      required,
    },
    checkConditions: {
      sameAs: (val) => val === true,
    },
  },
  methods: {
    // send email request method
    async sendRequest() {
      // set form data in a json object
      let data = {
        date: this.date,
        time: this.time,
        location: this.location,
        subject: this.subject,
        message: this.message,
        duration: this.duration,
      };

      // setup headers, method and values
      const settings = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(data),
      };

      // run vuelidate and chech if there some errors
      this.$v.$touch();

      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
        console.log("error");
      } else {
        // change submit status
        try {
          this.submitStatus = "PENDING";
          // send request to server
          const fetchResponse = await fetch(
            "http://127.0.0.1:8000/api/send-mail",
            settings
          );
          // await response from server
          const dataRes = await fetchResponse.json();
          console.log("send");
        } catch (error) {
          return error;
        }
      }
    },
  },
};
</script>

<style lang="scss">
footer {
  background: linear-gradient(
      0deg,
      rgba(54, 15, 38, 0.7),
      rgba(54, 15, 38, 0.7)
    ),
    url("~assets/img/header/groove-station.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  // datepicker custom style
  .vdp-datepicker {
    width: 100% !important;

    &__calendar {
      transition: display 1.3s;
      width: 17rem !important;
      // background-color: #fff;
      background-color: rgba(237, 242, 247, 1);
      border: 1px solid #efefef !important;
      border-radius: 10px;
      margin-top: 10px;
      padding: 10px 15px;
      outline: none;
      color: rgba(74, 85, 104, 1);

      .cell {
        font-size: 0.875rem;
        height: 34px !important;
        line-height: 34px !important;

        &.day-header {
          font-size: 0.75rem;
          color: rgba(45, 55, 72, 1);
        }

        &.day {
          &.selected {
            color: #fff !important;
            background-color: rgba(66, 153, 225, 1) !important;
          }
        }

        &:not(.blank):not(.disabled).day {
          border-radius: 50% !important;
          transition: all 0.3s;
          border: none !important;

          &:hover {
            border: none !important;
            background-color: rgba(190, 227, 248, 1);
            border-radius: 50% !important;
            transition: all 0.3s;
          }
        }
      }
    }
  }

  .gradient-purple-pink {
    background: rgb(242, 5, 105);
    background: linear-gradient(
      34deg,
      rgba(242, 5, 105, 1) 0%,
      rgba(169, 5, 242, 1) 100%
    );
    border-radius: 30px;
  }
}

form {
  input[type="text"],
  button,
  textarea {
    border-radius: 25px;
  }
  .range {
    -webkit-appearance: none;
    width: 100%;
    height: 5px;
    outline: none;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    &:hover {
      opacity: 1;
    }
  }

  .range::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #b285f5;
    cursor: pointer;
  }

  .range::-moz-range-thumb {
    width: 250px;
    height: 20px;
    background: #0b43fa;
    cursor: pointer;
  }
}
</style>
