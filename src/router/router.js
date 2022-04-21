import { createRouter, createWebHashHistory } from "vue-router";

// import AboutPage from '@/modules/pokemon/pages/AboutPage'
// import ListPage from '@/modules/pokemon/pages/ListPage'
// import PokemonPage from '@/modules/pokemon/pages/PokemonPage'
// import NoPageFound from "@/modules/shared/pages/NoPageFound";

const routes = [
  {
    path: "/",
    redirect: '/pokemon',
  },
  {
    path: "/pokemon",
    name: "pokemon",
    component: () => import( /*webpackChunkName: "PokemonLayout" */ "@/modules/pokemon/layouts/PokemonLayout"),
    children: [

      {
        path: "home",
        name: 'pokemon-home',
        component: () =>
          import(
        /*webpackChunkName: "ListPage" */ "../modules/pokemon/pages/ListPage"
          ),
      },
      {
        path: "about",
        name: 'pokemon-about',
        component: () =>
          import(
        /*webpackChunkName: "AboutPage" */ "../modules/pokemon/pages/AboutPage"
          ),
      },
      {
        path: "pokemonid/:id",
        name: 'pokemon-id',
        component: () =>
          import(
        /*webpackChunkName: "PokemonPage" */ "../modules/pokemon/pages/PokemonPage"
          ),
        props: (route) => {
          const { id } = route.params;
          return isNaN(Number(id)) ? { id: 1 } : { id: Number(id) };
        },
      },
      {
        path: "",
        redirect: { name: 'pokemon-home' },
      },

    ]
  },
  //DBZ Layout
  {
    path: "/dbz",
    name: 'dbz',
    component: () => import( /*webpackChunkName: "DBZLayout" */ "@/modules/dbz/layouts/DragonBallLayout"),
    children: [
      {
        path: 'characters',
        name: 'dbz-characters',
        component: () => import( /*webpackChunkName: "CharactersPage" */ '@/modules/dbz/pages/Characters')
      },
      {
        path: 'about',
        name: 'dbz-about',
        component: () => import( /*webpackChunkName: "AboutPage" */ '@/modules/dbz/pages/About')
      },
      {
        path: "",
        redirect: { name: 'dbz-characters' },
      },
    ]
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
