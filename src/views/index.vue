<script lang="ts">
  export default {
    name: 'IndexPage',
  };
</script>

<template lang="pug">
section.container
  h1 Example Flex
  custom-row.container__row
    custom-column.container__column(:md-cols='3')
      h2 1
    custom-column.container__column(:md-cols='3')
      h2 2
  custom-row.container__row(justify-content='center')
    custom-column.container__column(:md-cols='3', align-items='center')
      h2 1
    custom-column.container__column(:md-cols='3', align-items='center')
      h2 2
  custom-row.container__row(justify-content='flex-end')
    custom-column.container__column(:md-cols='3', align-items='flex-end')
      h2 1
    custom-column.container__column(:md-cols='3', align-items='flex-end')
      h2 2
</template>
<style scoped lang="stylus">
  .container
    padding: var(--layout__gap)
    &__row
      border: 1px solid #333
      padding: 10px
    &__column
      border: 1px solid #999
</style>
