// routes.ts

// Import the components
import FilteredList from './components/FilteredList.vue';

// Define your routes
const routes = [
  {
    path: '/',
    redirect: '/filtered-list', // Redirect the root URL to the filtered list
  },
  {
    path: '/filtered-list',
    name: 'FilteredList',
    component: FilteredList,
    props: (route) => ({ // Pass the query parameters 'a' and 'b' as props to the component
      a: route.query.a || '',
      b: route.query.b || '',
    }),
  },
];

export default routes;