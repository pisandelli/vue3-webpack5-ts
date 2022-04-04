<script lang="ts">
export default {
  name: 'AlternativeLayout',
}
</script>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
//Get the Router so we can read some parameters
const router = useRouter()

//Check if the child page has the param Footer so we can
//add/remove the footer without creating another layout
// BUG: When change the route, params does not reload
// NEEDHELP: https://github.com/pisandelli/vue-pages-router/issues/1
const hasFooter = router.currentRoute.value.meta.params.footer
</script>

<template lang="pug">
p {{ hasFooter }}
main.main-content.alternative
  router-view

footer(v-if='hasFooter')
  p I'm a footer
</template>
