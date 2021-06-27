<template>
  <table class="w-full mt-5">
    <thead>
      <tr>
        <th
          class="p-4 text-center text-white border border-gray-50"
          v-for="th in columns"
          :key="th.id"
        >
          {{ th.text }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in entries" class="border bg-purple-300" :key="item.id">
        <td class="border border-gray-200 text-center p-3 w-1/6">
          {{ item.id }}
        </td>
        <td class="border border-gray-200 text-center p-3 w-1/6">
          {{ item.name }}
        </td>
        <td class="border border-gray-200 text-center p-3 w-1/6">
          {{ item.type }}
        </td>
        <td class="border border-gray-200 text-center p-3 w-1/6">
          {{ item.dates.start.localDate }}
        </td>
        <td class="border border-gray-200 text-center p-3 w-1/6">
          <router-link :to="{ name: 'Event', params: { id: item.id } }"
            ><button
              class="
                px-6
                py-4
                bg-purple-900
                text-white
                w-full
                hover:bg-purple-500
                transition-all
                duration-300
              "
            >
              View
            </button>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Table",
  props: {
    columns: Array,
    entries: Array,
  },
  computed: {
    tableHeader() {
      return this.columns || [];
    },
    tableData() {
      return this.entries || [];
    },
  },
};
</script>

<style></style>
