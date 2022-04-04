<script lang="ts">
/**
 * About Page.
 * @name 'AboutPage'
 * @version 1.0.0
 */
export default {
  name: 'AboutPage',
  layout: 'alternative',
  params: { footer: true }, //can be any parameter you like
}
</script>

<script lang="ts" setup></script>

<template lang="pug">
h2 This is the about page.
p I do have a footer

ul
  li: router-link(to='/') HomePage
  li: router-link(to='/about') About
  li: router-link(to='/contacts') Contacts

</template>

<style lang="stylus" scoped>
h2
  color: green
</style>
