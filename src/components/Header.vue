<template>
  <header class="flex bg-white items-center justify-between px-4 py-6 shadow">
    <router-link :to="{ name: 'Home' }">
      <img alt="Tarfin logo" src="https://tarfin.com/img/logo.svg" />
    </router-link>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style></style>
