<script lang="ts">
/**
 * Home Page.
 * @name 'HomePage'
 * @version 1.0.0
 */
export default {
  name: 'HomePage',
}
</script>

<template lang="pug">
HelloWorld

ul
  li: router-link(to='/') HomePage
  li: router-link(to='/about') About
  li: router-link(to='/contacts') Contacts
</template>

<style lang="stylus" scoped>
h2
  color: blue
</style>
