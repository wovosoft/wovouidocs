import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"Introduction"},["/index.html","/index.md"]],
  ["v-caf798c0","/accordion/",{"title":"Accordion"},["/accordion/index.html","/accordion/index.md"]],
  ["v-3352235f","/alerts/",{"title":"Alerts"},["/alerts/index.html","/alerts/index.md"]],
  ["v-3fd8e9be","/aspect/",{"title":"Aspect Ratio"},["/aspect/index.html","/aspect/index.md"]],
  ["v-555fbfe6","/badges/",{"title":"Badges"},["/badges/index.html","/badges/index.md"]],
  ["v-76a6e250","/breadcrumbs/",{"title":"Breadcrumbs"},["/breadcrumbs/index.html","/breadcrumbs/index.md"]],
  ["v-62839e5e","/buttons/groups.html",{"title":"Button Groups"},["/buttons/groups","/buttons/groups.md"]],
  ["v-d6c3ca72","/buttons/",{"title":"Buttons"},["/buttons/index.html","/buttons/index.md"]],
  ["v-96167c50","/calendar/",{"title":"Calendar"},["/calendar/index.html","/calendar/index.md"]],
  ["v-78191965","/cards/",{"title":"Cards"},["/cards/index.html","/cards/index.md"]],
  ["v-03d41ff6","/carousel/",{"title":"Carousel"},["/carousel/index.html","/carousel/index.md"]],
  ["v-d3da4d3e","/charts/",{"title":"Charts"},["/charts/index.html","/charts/index.md"]],
  ["v-27b91be2","/close-button/",{"title":"Close Button"},["/close-button/index.html","/close-button/index.md"]],
  ["v-6e85a749","/collapse/",{"title":"Collapse"},["/collapse/index.html","/collapse/index.md"]],
  ["v-4edc03da","/content/table.html",{"title":"Tables"},["/content/table","/content/table.md"]],
  ["v-2394e1a6","/dropdowns/",{"title":"Dropdown"},["/dropdowns/index.html","/dropdowns/index.md"]],
  ["v-d02a7d16","/dropdowns/input.html",{"title":"Form Input"},["/dropdowns/input","/dropdowns/input.md"]],
  ["v-2643f7a4","/form/checkbox.html",{"title":"Form Checkbox"},["/form/checkbox","/form/checkbox.md"]],
  ["v-9d060068","/form/group.html",{"title":"Form Group"},["/form/group","/form/group.md"]],
  ["v-14948c92","/form/",{"title":"Form"},["/form/index.html","/form/index.md"]],
  ["v-909a953e","/form/input.html",{"title":"Form Input"},["/form/input","/form/input.md"]],
  ["v-64ecefd0","/form/radio.html",{"title":"Form Radio"},["/form/radio","/form/radio.md"]],
  ["v-b3c164ec","/form/rating.html",{"title":"Form Rating"},["/form/rating","/form/rating.md"]],
  ["v-ca67e4ea","/form/select.html",{"title":"Form Select"},["/form/select","/form/select.md"]],
  ["v-0087f093","/form/spinbutton.html",{"title":"Spin Button"},["/form/spinbutton","/form/spinbutton.md"]],
  ["v-2ecfa7e4","/form/tags.html",{"title":"Form Tags"},["/form/tags","/form/tags.md"]],
  ["v-b23622e6","/form/textarea.html",{"title":"Textarea"},["/form/textarea","/form/textarea.md"]],
  ["v-ccdc4da0","/getting-started/",{"title":"Getting Started"},["/getting-started/index.html","/getting-started/index.md"]],
  ["v-fb1db6e4","/icons/",{"title":"Bootstrap Icons"},["/icons/index.html","/icons/index.md"]],
  ["v-d5e2f370","/layout/columns.html",{"title":"Columns"},["/layout/columns","/layout/columns.md"]],
  ["v-a10df4b2","/layout/grid.html",{"title":"Grid system"},["/layout/grid","/layout/grid.md"]],
  ["v-58702766","/layout/gutters.html",{"title":"Gutters"},["/layout/gutters","/layout/gutters.md"]],
  ["v-6789dd2c","/layout/",{"title":"Containers"},["/layout/index.html","/layout/index.md"]],
  ["v-366a25f4","/list-group/",{"title":"List Group"},["/list-group/index.html","/list-group/index.md"]],
  ["v-14f29757","/menu/",{"title":"Menu"},["/menu/index.html","/menu/index.md"]],
  ["v-99b4f720","/modals/",{"title":"Modal"},["/modals/index.html","/modals/index.md"]],
  ["v-5db44df4","/navbar/",{"title":"Navbar"},["/navbar/index.html","/navbar/index.md"]],
  ["v-5a0fcb52","/navs-and-tabs/",{"title":"Navs and tabs"},["/navs-and-tabs/index.html","/navs-and-tabs/index.md"]],
  ["v-53bead41","/offcanvas/",{"title":"Offcanvas / Sidebar"},["/offcanvas/index.html","/offcanvas/index.md"]],
  ["v-defd3988","/pagination/",{"title":"Pagination"},["/pagination/index.html","/pagination/index.md"]],
  ["v-30046c76","/placeholders/",{"title":"Placeholders"},["/placeholders/index.html","/placeholders/index.md"]],
  ["v-031b3fba","/popover/",{"title":"Popovers"},["/popover/index.html","/popover/index.md"]],
  ["v-76904e6e","/progress/",{"title":"Progress"},["/progress/index.html","/progress/index.md"]],
  ["v-5ef87b2f","/spinner/",{"title":"Spinner"},["/spinner/index.html","/spinner/index.md"]],
  ["v-d72aba40","/stack/",{"title":"Stacks"},["/stack/index.html","/stack/index.md"]],
  ["v-254f296a","/toasts/",{"title":"Toasts"},["/toasts/index.html","/toasts/index.md"]],
  ["v-c7d1caf6","/tooltip/",{"title":"Tooltip"},["/tooltip/index.html","/tooltip/index.md"]],
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
