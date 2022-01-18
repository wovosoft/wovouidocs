import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("Button", defineAsyncComponent(() => import("E:/narayan/laragon/www/wovouivuepress/docs/.vuepress/components/Button.vue")))
}
