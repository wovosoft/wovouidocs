export const data = {
  "key": "v-30995611",
  "path": "/getting-started/getting-started.html",
  "title": "Getting Started",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Install Using NPM",
      "slug": "install-using-npm",
      "children": []
    },
    {
      "level": 2,
      "title": "Using Yarn",
      "slug": "using-yarn",
      "children": []
    }
  ],
  "git": {
    "updatedTime": null,
    "contributors": []
  },
  "filePathRelative": "getting-started/getting-started.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
