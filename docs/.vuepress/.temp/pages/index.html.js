export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "Introduction",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1642513682000,
    "contributors": [
      {
        "name": "Narayan Adhikary",
        "email": "wovosoft@gmail.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "index.md"
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
