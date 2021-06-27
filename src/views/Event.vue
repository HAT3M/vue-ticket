<template>
  <div class="flex items-start px-4">
    <div class="w-1/3">
      <img :src="image.url" class="w-full" />
    </div>
    <div class="pl-4">
      <h1 class="text-xl text-white font-bold mb-2">{{ data.name }}</h1>
      <div class="text-base text-white">
        <span>Date:</span>
        <span>{{ date }} - {{ time }}</span>
      </div>
      <router-link :to="{ name: 'Home' }">
        <button
          class="
            mt-10
            px-8
            py-3
            text-white
            border border-white
            hover:bg-white hover:text-purple-900
          "
        >
          Back
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
const env = import.meta.env;
import axios from "axios";

export default {
  name: "Event",
  props: ["id"],
  created() {
    axios
      .get(
        `${env.VITE_API_URL}events/${this.id}.json?apikey=${env.VITE_API_KEY}`
      )
      .then((response) => {
        this.data = response.data;
        this.image = response.data.images[0];
        this.date = response.data.dates.start.localDate;
        this.time = response.data.dates.start.localTime;
      });
  },
  data() {
    return {
      data: {},
      image: "",
      date: "",
      time: "",
    };
  },
  methods: {},
};
</script>
<style lang="scss"></style>
