import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("E:/narayan/laragon/www/wovouivuepress/docs/.vuepress/theme/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("E:/narayan/laragon/www/wovouivuepress/docs/.vuepress/theme/lib/client/layouts/Layout.vue")),
}
