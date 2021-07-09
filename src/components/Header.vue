<template>
  <header class="flex bg-white items-center justify-between px-4 py-6 shadow">
    <router-link :to="{ name: 'Home' }">
      <h2>VUE TİCKET APP</h2>
    </router-link>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style></style>
