      this.$router.push({ path: "/items", query: this.filter });
      this.filter.page = Number(this.$route.query.page);
      this.filter.name = String(this.$route.query.name);
      this.filter.company = String(this.$route.query.company);
      this.filter.genre = String(this.$route.query.genre);
      this.filter.maxPrice = Number(this.$route.query.maxPrice);
      this.filter.minPrice = Number(this.$route.query.minPrice);
      this.filter.releaseDate = String(this.$route.query.releaseDate);
      console.log(this.filter);