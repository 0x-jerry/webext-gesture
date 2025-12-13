<script lang='ts' setup>
export interface LinkProps {
  label: string;
  url: string;
}

const props = defineProps<LinkProps>()
</script>

<template>
  <a class='link' :href='props.url' target='_blank'>
    <slot>{{ props.label }}</slot>
  </a>
</template>

<style lang='less' scoped></style>