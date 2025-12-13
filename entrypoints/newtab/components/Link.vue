<script lang="ts" setup>
export interface LinkProps {
  label: string;
  url?: string;
  active?: boolean
}

const props = defineProps<LinkProps>();
</script>

<template>
  <a class="link px-4 py-2" :class="{ active }" :href="props.url" target="_blank">
    <slot>{{ props.label }}</slot>
  </a>
</template>

<style lang="less" scoped>
.link {
  display: block;
  --uno: text-gray-8 truncate;
  text-decoration: none;
  max-width: 300px;

  &.active,
  &:hover {
    --uno: bg-gray-1;
  }
}
</style>
