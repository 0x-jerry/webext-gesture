<script lang="ts" setup>
import GestureDetection from './components/GestureDetection.vue'
import { GestureDir } from '../services/types'
import { execGestures } from './components/actions'
import { getGestureService } from '../services/GestureService'

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
