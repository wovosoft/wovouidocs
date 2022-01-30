import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"Introduction"},["/index.html","/index.md"]],
  ["v-3352235f","/alerts/",{"title":"Alerts"},["/alerts/index.html","/alerts/index.md"]],
  ["v-555fbfe6","/badges/",{"title":"Badges"},["/badges/index.html","/badges/index.md"]],
  ["v-76a6e250","/breadcrumbs/",{"title":"Breadcrumbs"},["/breadcrumbs/index.html","/breadcrumbs/index.md"]],
  ["v-62839e5e","/buttons/groups.html",{"title":"Button Groups"},["/buttons/groups","/buttons/groups.md"]],
  ["v-d6c3ca72","/buttons/",{"title":"Buttons"},["/buttons/index.html","/buttons/index.md"]],
  ["v-96167c50","/calendar/",{"title":"Calendar"},["/calendar/index.html","/calendar/index.md"]],
  ["v-78191965","/cards/",{"title":"Cards"},["/cards/index.html","/cards/index.md"]],
  ["v-03d41ff6","/carousel/",{"title":"Carousel"},["/carousel/index.html","/carousel/index.md"]],
  ["v-6e85a749","/collapse/",{"title":"Collapse"},["/collapse/index.html","/collapse/index.md"]],
  ["v-2394e1a6","/dropdowns/",{"title":"Dropdown"},["/dropdowns/index.html","/dropdowns/index.md"]],
  ["v-d02a7d16","/dropdowns/input.html",{"title":"Form Input"},["/dropdowns/input","/dropdowns/input.md"]],
  ["v-2643f7a4","/form/checkbox.html",{"title":"Form Checkbox"},["/form/checkbox","/form/checkbox.md"]],
  ["v-14948c92","/form/",{"title":"Form"},["/form/index.html","/form/index.md"]],
  ["v-909a953e","/form/input.html",{"title":"Form Input"},["/form/input","/form/input.md"]],
  ["v-64ecefd0","/form/radio.html",{"title":"Form Radio"},["/form/radio","/form/radio.md"]],
  ["v-b3c164ec","/form/rating.html",{"title":"Form Rating"},["/form/rating","/form/rating.md"]],
  ["v-ca67e4ea","/form/select.html",{"title":"Form Select"},["/form/select","/form/select.md"]],
  ["v-ccdc4da0","/getting-started/",{"title":"Getting Started"},["/getting-started/index.html","/getting-started/index.md"]],
  ["v-fb1db6e4","/icons/",{"title":"Bootstrap Icons"},["/icons/index.html","/icons/index.md"]],
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
