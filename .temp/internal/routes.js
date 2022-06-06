/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "/Users/yuchengkai/work/doc/node_modules/@vuepress/core/lib/client/components/GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-7a2d0a16",
    path: "/examples/disable-sidebar.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-7a2d0a16").then(next)
    },
  },
  {
    name: "v-a83b1cea",
    path: "/api/config-home.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-a83b1cea").then(next)
    },
  },
  {
    name: "v-36caf79e",
    path: "/api/config-theme.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-36caf79e").then(next)
    },
  },
  {
    name: "v-62d5b8af",
    path: "/api/config-frontmatter.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-62d5b8af").then(next)
    },
  },
  {
    name: "v-3ab1de36",
    path: "/examples/using-page-layout.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-3ab1de36").then(next)
    },
  },
  {
    name: "v-22002d84",
    path: "/api/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-22002d84").then(next)
    },
  },
  {
    path: "/api/index.html",
    redirect: "/api/"
  },
  {
    name: "v-1a993e6d",
    path: "/guide/api-page.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-1a993e6d").then(next)
    },
  },
  {
    name: "v-a3b65baa",
    path: "/guide/code-switcher.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-a3b65baa").then(next)
    },
  },
  {
    name: "v-46ba8acb",
    path: "/guide/dark-mode.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-46ba8acb").then(next)
    },
  },
  {
    name: "v-53d48c6a",
    path: "/guide/configuration.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-53d48c6a").then(next)
    },
  },
  {
    name: "v-6a72218b",
    path: "/guide/global-components.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-6a72218b").then(next)
    },
  },
  {
    name: "v-9d8f9f2a",
    path: "/guide/documenting.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-9d8f9f2a").then(next)
    },
  },
  {
    name: "v-403def6a",
    path: "/guide/getting-started.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-403def6a").then(next)
    },
  },
  {
    name: "v-3e98a9f3",
    path: "/guide/home.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-3e98a9f3").then(next)
    },
  },
  {
    name: "v-acf057f8",
    path: "/guide/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-acf057f8").then(next)
    },
  },
  {
    path: "/guide/index.html",
    redirect: "/guide/"
  },
  {
    name: "v-24e4ef4b",
    path: "/guide/migration.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-24e4ef4b").then(next)
    },
  },
  {
    name: "v-3cffebbe",
    path: "/guide/search.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-3cffebbe").then(next)
    },
  },
  {
    name: "v-c803dc6a",
    path: "/guide/page-layout.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-c803dc6a").then(next)
    },
  },
  {
    name: "v-92689d38",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-92689d38").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]