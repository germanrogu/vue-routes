import { createRouter, createWebHashHistory } from "vue-router";

// import AboutPage from '@/modules/pokemon/pages/AboutPage'
// import ListPage from '@/modules/pokemon/pages/ListPage'
// import PokemonPage from '@/modules/pokemon/pages/PokemonPage'
// import NoPageFound from "@/modules/shared/pages/NoPageFound";

const routes = [
  {
    path: "/",
    component: () =>
      import(
        /*webpackChunkName: "ListPage" */ "../modules/pokemon/pages/ListPage"
      ),
  },
  {
    path: "/about",
    component: () =>
      import(
        /*webpackChunkName: "AboutPage" */ "../modules/pokemon/pages/AboutPage"
      ),
  },
  {
    path: "/:id",
    component: () =>
      import(
        /*webpackChunkName: "PokemonPage" */ "../modules/pokemon/pages/PokemonPage"
      ),
    props: (route) => {
      const { id } = route.params;
      return isNaN(Number(id)) ?{id:1} : { id: Number(id) };
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: () =>
      import(
        /*webpackChunkName: "NoPageFound" */ "../modules/shared/pages/NoPageFound"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
