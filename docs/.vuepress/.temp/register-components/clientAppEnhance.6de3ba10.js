import { defineAsyncComponent } from 'vue'

export default ({ app }) => {
  app.component("Button", defineAsyncComponent(() => import({"components":{"Badge":{"props":{"tag":{"default":"span"},"variant":{"default":"secondary"},"pill":{"default":false},"href":{"default":null}}}},"props":{"tag":{"default":"button"},"href":{"default":null},"variant":{"default":"secondary"},"size":{"default":null},"type":{"default":"button"},"outline":{"default":false},"block":{"default":false},"pill":{"default":false},"squared":{"default":false},"disabled":{"default":false},"pressed":{"default":false},"badge":{"type":[null,null]},"badgeVariant":{"default":"primary"}}})))
}
