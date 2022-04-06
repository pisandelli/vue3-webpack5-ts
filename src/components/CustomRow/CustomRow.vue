<script lang="ts">
  export default {
    name: 'CustomRow',
  };
</script>
<template lang="pug">
.row
  slot
</template>
<script lang="ts" setup>
  import CustomColumnVue from '../CustomColumn/CustomColumn.vue';
  const props = defineProps({
    alignItems: {
      default: 'start',
      type: String,
    },
    mdAlignItems: {
      default: '',
      type: String,
    },
    justifyContent: {
      default: 'start',
      type: String,
    },
    mdJustifyContent: {
      default: '',
      type: String,
    },
  });

  const { alignItems, justifyContent } = toRefs(props);

  const mdJustifyContent = computed(() => {
    if (!props.mdJustifyContent) {
      return justifyContent.value;
    }

    return props.mdJustifyContent;
  });

  const mdAlignItems = computed(() => {
    if (!props.mdAlignItems) {
      return alignItems.value;
    }

    return props.mdAlignItems;
  });

  const context = getCurrentInstance();

  const columnsCounter = computed(() => {
    const slots = context?.slots;
    const $childrens = slots?.default
      ? slots.default().filter((child) => child.type === CustomColumnVue)
      : [];
    return $childrens?.length - 1;
  });
</script>
<style scoped lang="stylus">
  .row
    display: flex
    flex-flow: row wrap
    width: 100%
    margin: 0 auto
    gap: calc(var(--layout__gap) / v-bind(columnsCounter))
    justify-content: v-bind(justifyContent)
    align-items: v-bind(alignItems)
    _screen-md(justify-content, v-bind(mdJustifyContent))
    _screen-md(align-items, v-bind(mdAlignItems))
</style>
