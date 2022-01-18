import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"Introduction"},["/index.html","/index.md"]],
  ["v-3352235f","/alerts/",{"title":"Alerts"},["/alerts/index.html","/alerts/index.md"]],
  ["v-555fbfe6","/badges/",{"title":"Badges"},["/badges/index.html","/badges/index.md"]],
  ["v-76a6e250","/breadcrumbs/",{"title":"Breadcrumbs"},["/breadcrumbs/index.html","/breadcrumbs/index.md"]],
  ["v-62839e5e","/buttons/groups.html",{"title":"Button Groups"},["/buttons/groups","/buttons/groups.md"]],
  ["v-d6c3ca72","/buttons/",{"title":"Buttons"},["/buttons/index.html","/buttons/index.md"]],
  ["v-78191965","/cards/",{"title":"Cards"},["/cards/index.html","/cards/index.md"]],
  ["v-2394e1a6","/dropdowns/",{"title":"Dropdown"},["/dropdowns/index.html","/dropdowns/index.md"]],
  ["v-d02a7d16","/dropdowns/input.html",{"title":"Form Input"},["/dropdowns/input","/dropdowns/input.md"]],
  ["v-12d19c72","/Form/",{"title":"Form"},["/Form/index.html","/Form/index.md"]],
  ["v-01e68820","/buttons/toolbars/",{"title":"Button Toolbar"},["/buttons/toolbars/index.html","/buttons/toolbars/index.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
