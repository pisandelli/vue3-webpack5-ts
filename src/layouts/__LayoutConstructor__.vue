<template lang="pug">
component(:is="layout"): slot
</template>

<script>
import AppLayoutDefault from './default'
import { shallowRef, watch } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'AppLayout',
  setup() {
    const layout = shallowRef(AppLayoutDefault)
    const route = useRoute()
    watch(
      () => route.meta,
      async (meta) => {
        try {
          const component = await require(`@/layouts/${meta.layout}.vue`)
          layout.value = component?.default || AppLayoutDefault
        } catch (e) {
          layout.value = AppLayoutDefault
        }
      }
    )
    return { layout }
  },
}
</script>
