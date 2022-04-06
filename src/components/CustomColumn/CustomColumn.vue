<script lang="ts">
  export default {
    name: 'CustomColumn',
  };
</script>

<template lang="pug">
.column
  slot
</template>

<script lang="ts" setup>
  const props = defineProps({
    cols: {
      type: Number,
      default: 12,
    },
    mdCols: {
      type: Number,
      default: 0,
    },
    alignItems: {
      type: String,
      default: 'start',
    },
    justifyContent: {
      type: String,
      default: 'start',
    },
    mdAlignItems: {
      type: String,
      default: '',
    },
  });

  const { cols, alignItems, justifyContent } = toRefs(props);

  const mdAlignItems = computed(() => {
    if (!props.mdAlignItems) {
      return alignItems.value;
    }

    return props.mdAlignItems;
  });

  const mdCols = computed(() => {
    if (props.mdCols <= 0) {
      return cols.value;
    }

    return props.mdCols;
  });

  const colsDifference = computed(() => {
    if (props.cols < 12) {
      return 'var(--layout__gap)';
    }

    return '0px';
  });

  const colsMdDifference = computed(() => {
    if (mdCols.value < 12) {
      return 'var(--layout__gap)';
    }

    return '0px';
  });
</script>

<style scoped lang="stylus">
  .column
    display: flex
    flex-direction: column
    align-items: v-bind(alignItems)
    justify-content: v-bind(justifyContent)
    width: calc( v-bind(cols) / 12 * calc(100% - v-bind(colsDifference)))
    _screen-md(width, calc( v-bind(mdCols) / 12 * calc(100% - v-bind(colsMdDifference))))
    _screen-md(align-items, v-bind(mdAlignItems))
</style>
