<template>
  <Header />
  <main class="py-4">
    <router-view />
  </main>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
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
