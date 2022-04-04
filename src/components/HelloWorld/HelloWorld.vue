<script lang="ts">
/**
 * Hello World example
 * @name 'HelloWorld'
 * @version 1.0.0
 */
export default {
  name: 'HelloWorld',
}
</script>

<script lang="ts" setup>
const msg = ref('Hello World!')
const color = '#FF00FF'
</script>

<template lang="pug">
h1 {{ msg }}
</template>

<style lang="stylus" scoped>
h1
  color: v-bind(color)
</style>
