<!-- FilteredList.vue -->
<template>
  <div>
    <!-- Display your filtered list here -->
    <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: '', // Initialize 'a' with an empty string
      b: '', // Initialize 'b' with an empty string
      items: [ // Sample data
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        // Add more items as needed
      ],
    };
  },
  computed: {
    filteredItems() {
      // Apply the filter on 'items' based on 'a' and 'b'
      return this.items.filter((item) => {
        // Add your filtering logic here based on 'a' and 'b'
        // For example:
        return item.name.includes(this.a) && item.name.includes(this.b);
      });
    },
  },
  created() {
    // Access the router query parameters and update 'a' and 'b'
    this.a = this.$route.query.a || '';
    this.b = this.$route.query.b || '';
  },
};
</script>