export const data = {
  "key": "v-ccdc4da0",
  "path": "/getting-started/",
  "title": "Getting Started",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Using NPM",
      "slug": "using-npm",
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
    "updatedTime": 1642782083000,
    "contributors": [
      {
        "name": "Narayan Adhikary",
        "email": "wovosoft@gmail.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "getting-started/index.md"
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
