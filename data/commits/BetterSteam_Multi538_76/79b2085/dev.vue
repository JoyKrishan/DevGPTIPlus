        {{ page }}
import { RawLocation } from "vue-router";
      if (!(this.filter.maxPrice && this.filter.minPrice)) {
      if (!this.filter.genre) {
      this.routeTo({
        path: "/items",
        query: { page: String(this.filter.page ?? 1 + 1) },
      });
      this.routeTo({
        path: "/items",
        query: { page: String(this.filter.page ?? 1 - 1) },
      });
      this.routeTo(this.routeToItems());
    routeToItems(): RawLocation {
      return {
        path: "/items",
        query: {
          page: String(this.filter.page),
          name: this.filter.name,
          company: this.filter.company,
          genre: this.filter.genre,
          minPrice: String(this.filter.minPrice),
          maxPrice: String(this.filter.maxPrice),
          releaseDate: this.filter.releaseDate,
        },
      };
    },
    async routeTo(location: RawLocation) {
      try {
        await this.$router.push(location);
      } catch (err) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (err?.name !== "NavigationDuplicated") {
          throw err;
        }
      }
    filter(): GameFilter {
      return {
        page: this.page,
        company: this.company,
        name: this.name,
        genre: this.genre,
        maxPrice: this.maxPrice,
        minPrice: this.minPrice,
        releaseDate: this.releaseDate,
      };
    },
        this.updateRoute();
  },
  props: {
    page: { type: Number, default: undefined },
    name: { type: String, default: undefined },
    company: { type: String, default: undefined },
    genre: { type: String, default: undefined },
    maxPrice: { type: Number, default: undefined },
    minPrice: { type: Number, default: undefined },
    releaseDate: { type: String, default: undefined },
  },
  mounted() {
    this.getGames();