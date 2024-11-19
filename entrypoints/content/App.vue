<script lang="ts" setup>
import type { GestureDir } from '@/services/types'
import GestureDetection from './components/GestureDetection.vue'
import { execGestures } from './components/actions'
import { getGestureService } from '@/services/GestureService'

const gestureService = getGestureService()

async function detectedGesture(gesture: GestureDir[]) {
  if (await execGestures(gesture)) {
    return
  }

  await gestureService.execGestures(gesture)
}
</script>

<template>
  <GestureDetection @detected="detectedGesture" />
</template>

<style lang="less" scoped></style>
