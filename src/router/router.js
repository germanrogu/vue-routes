import { createRouter, createWebHashHistory } from "vue-router";
import isAuthenticatedGuard from "./auth-guard";

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
    beforeEnter: [ isAuthenticatedGuard ],
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

//Guard Global - Sincrono
// router.beforeEach((to, from, next) => {
//   const random = Math.random() * 100
//   if (random > 50) {
//     next()
//   } else {
//     next({ name: 'pokemon-home' })
//   }
// })

//Guard Global - Asincrono
// const canAccess = () => {
//   return new Promise(resolve => {
//     const random = Math.random() * 100
//     if (random > 50) {
//       console.log('CanAccess')
//       resolve(true)
//     } else {
//       console.log('Bloqueado')
//       resolve(false)
//     }
//   })
// }

// router.beforeEach(async (to, from, next) => {
//   const authorized = await canAccess()

//   authorized ? next() : next({ name: 'pokemon-home' })
// })

export default router;
