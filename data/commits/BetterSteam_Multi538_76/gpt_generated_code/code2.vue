<template>
  <div>
    <!-- Assuming you have input fields to capture the filter values 'a' and 'b' -->
    <input v-model="a" type="text" placeholder="Filter A">
    <input v-model="b" type="text" placeholder="Filter B">

    <!-- Use the 'router-link' to navigate to the filtered list page -->
    <router-link :to="{ path: '/filtered-list', query: { a, b } }">Go to Filtered List</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: '',
      b: '',
    };
  },
};
</script>