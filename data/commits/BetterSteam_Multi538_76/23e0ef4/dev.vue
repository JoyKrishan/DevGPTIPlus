      this.updateRoute();
      this.updateRoute();
    },
    updateRoute() {
      this.$router.push({ path: "/page", query: { page: this.filter.page } });
    },
    updateCurrentPageFromRoute() {
      const page = Number(this.$route.query.page);
      if (!isNaN(page) && page > 0) {
        this.filter.page = page;
      }
    "$route.query.page": "updateCurrentPageFromRoute",