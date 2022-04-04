<script lang="ts">
/**
 * Contacts Page.
 * @name 'ContactPage'
 * @version 1.0.0
 */
export default {
  name: 'ContactPage',
  layout: 'alternative',
}
</script>

<script lang="ts" setup></script>

<template lang="pug">
h2 This is the contact page.
p I do NOT have a footer

ul
  li: router-link(to='/') HomePage
  li: router-link(to='/about') About
  li: router-link(to='/contacts') Contacts
</template>

<style lang="stylus" scoped>
h2
  color: green
</style>
