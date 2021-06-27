<template>
  <div class="flex flex-col items-center">
    <h1 class="text-3xl font-bold text-center text-white mb-2">
      Search Events
    </h1>
    <div class="flex items-center max-w-lg w-full">
      <input
        type="text"
        v-model="keyword"
        @change="changeInput($event)"
        class="max-w-lg w-full p-3 h-12"
      />
      <button
        @click="getData()"
        class="
          bg-black bg-opacity-70
          text-white text-sm
          font-bold
          py-3
          px-10
          min-w-min
          h-12
        "
      >
        Search
      </button>
    </div>
  </div>
  <Table v-if="entries.length > 0" :columns="columns" :entries="entries" />
  <pagination
    v-model="page"
    :records="totalResult"
    :per-page="25"
    @paginate="myCallback"
  />
</template>

<script>
import Table from "../components/Table.vue";
import Pagination from "v-pagination-3";
const env = import.meta.env;
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      keyword: "",
      totalResult: 0,
      page: 1,
      perPage: 20,
      activePage: 1,
      columns: [
        { id: 1, text: "ID" },
        { id: 3, text: "Name" },
        { id: 4, text: "Type" },
        { id: 5, text: "Date" },
        { id: 6, text: "Details" },
      ],
      entries: [],
    };
  },
  created() {},
  components: {
    Table,
    Pagination,
  },
  methods: {
    myCallback(e) {
      this.page = e;
      this.getData();
    },
    changeInput() {
      this.page = 1;
    },
    async getData() {
      this.entries = [];
      if (this.keyword.length >= 3) {
        axios
          .get(
            `${env.VITE_API_URL}events.json?keyword=${this.keyword}&apikey=${env.VITE_API_KEY}&page=${this.page}`
          )
          .then((response) => {
            this.entries = response.data._embedded?.events || [];
            this.totalResult = response.data.page.totalElements || 0;
          });
      }
    },
  },
};
</script>
<style lang="scss">
.VuePagination__pagination {
  display: flex;
  justify-content: center;
  padding: 20px 10px;

  &-item {
    padding: 0 10px;
    background: #4c1d95;
    color: white;
    margin: 0 10px;
    transition: all 0.3s ease-in-out;

    &:hover,
    &.active {
      background: #8b5cf6;
    }
    &.disabled {
      opacity: 0.5;
    }
  }
}
.VuePagination__count {
  display: none;
}
</style>
