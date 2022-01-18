import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("Button", defineAsyncComponent(() => import("E:/narayan/laragon/www/wovouivuepress/node_modules/@wovosoft/wovoui/src/components/Button.vue")))
}
