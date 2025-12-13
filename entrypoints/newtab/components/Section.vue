<script lang='ts' setup>
export interface SectionProps {
  title: string;
}

defineProps<SectionProps>()

</script>

<template>
  <div class="section px-4 py-2">
    <div class="title text-gray-4 text-xl mb-2">
      {{ title }}
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>

</template>

<style lang='less'></style>