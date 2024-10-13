import VueRouter, { Route } from "vue-router";
  {
    path: "/",
    component: App,
    props: (route: Route) => ({
      page: route.query.page ? parseInt(route.query.page as string) : undefined,
      name: route.query.name,
      company: route.query.company,
      genre: route.query.genre,
      maxPrice: parseInt(route.query.maxPrice as string),
      minPrice: parseInt(route.query.minPrice as string),
      releaseDate: route.query.releaseDate,
    }),
  },