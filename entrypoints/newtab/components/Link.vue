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
    <img v-if="url" :src="`_favicon?size=16&pageUrl=${url}`" alt="">
    <span class="flex-1 truncate">
      {{ props.label }}
    </span>
  </a>
</template>

<style lang="less" scoped>
.link {
  --uno: text-gray-8 flex gap-2 items-center;
  text-decoration: none;

  &.active,
  &:hover {
    --uno: bg-gray-1;
  }
}
</style>
