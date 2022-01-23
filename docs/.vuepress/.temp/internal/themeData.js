export const themeData = {
  "logo": "/wovoui.png",
  "repo": "https://github.com/wovosoft/wovouidocs",
  "docsDir": "docs",
  "docsBranch": "master",
  "editLink": true,
  "mainRepoBranch": "master",
  "sidebar": [
    "/getting-started/",
    "/alerts/",
    "/badges/",
    "/breadcrumbs/",
    "/buttons/",
    "/buttons/groups/",
    "/buttons/toolbars/",
    "/calendar/",
    "/cards/",
    "/dropdowns/",
    {
      "text": "Form",
      "link": "/form/",
      "collapsible": true,
      "children": [
        "/form/checkbox",
        "/form/input",
        "/form/radio/",
        "/form/rating/"
      ]
    },
    "/icons/"
  ],
  "navbar": [
    {
      "text": "Icons",
      "link": "/icons"
    },
    {
      "text": "WovoSoft",
      "link": "https://wovosoft.com"
    }
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
