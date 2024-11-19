<script lang="ts" setup>
import GestureDetection from './components/GestureDetection.vue'
import { GestureDir } from './components/types'

function detectedGesture(gesture: GestureDir[]) {
  console.log(gesture)
}
</script>

<template>
  <GestureDetection @detected="detectedGesture" />
</template>

<style lang="less" scoped></style>
