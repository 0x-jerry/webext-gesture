<script lang="ts" setup>
import { useEventListener } from '@vueuse/core'
import { reactive } from 'vue'
import { calcDirection, calcPath, distance } from './utils'
import type { GestureDir, GesturePosition } from '@/services/types'

export interface GestureDetectionProps {
  /**
   * @default 10
   */
  checkGap?: number
}

const { checkGap = 10 } = defineProps<GestureDetectionProps>()

const emit = defineEmits<{
  detected: [gesture: GestureDir[]]
}>()

const gestureState = reactive({
  processing: false,
  dirs: [] as GestureDir[],
  tracker: [] as GesturePosition[],
  clearHandler: -1,
  clearTimeout: 200,
})

const trackerPath = computed(() => calcPath(gestureState.tracker))

useEventListener(window, 'contextmenu', (evt) => {
  if (gestureState.processing) {
    gestureState.processing = false
    clearPath()
    clearTimeout(gestureState.clearHandler)
    return
  }

  gestureState.processing = true
  evt.preventDefault()
})

useEventListener(window, 'mouseup', () => {
  if (!gestureState.processing) {
    return
  }

  clearTimeout(gestureState.clearHandler)

  gestureState.clearHandler = window.setTimeout(() => {
    gestureState.processing = false
    if (gestureState.dirs.length) {
      emit('detected', gestureState.dirs)
    }

    clearPath()
  }, gestureState.clearTimeout)
})

useEventListener(window, 'mousemove', (evt) => {
  if (!gestureState.processing) {
    return
  }

  const currentPos = { x: evt.clientX, y: evt.clientY }

  const latestPos = gestureState.tracker[gestureState.tracker.length - 1]

  if (!latestPos) {
    gestureState.tracker.push(currentPos)
    return
  }

  const _distance = distance(latestPos, currentPos)

  if (_distance < checkGap) {
    return
  }

  const _dir = calcDirection(latestPos, currentPos)

  if (gestureState.dirs.at(-1) !== _dir) {
    gestureState.dirs.push(_dir)
  }

  gestureState.tracker.push(currentPos)
})

function clearPath() {
  gestureState.dirs = []
  gestureState.tracker = []
}
</script>

<template>
  <div class="tracker">
    <svg style="width: 100%; height: 100%" v-if="trackerPath">
      <path :d="trackerPath" stroke="red" stroke-width="2" fill="none" />
    </svg>

    <div class="gesture-directions" v-if="gestureState.dirs">
      <div class="gesture-direction" v-for="g in gestureState.dirs">
        {{ g }}
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.tracker {
  position: fixed;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.gesture-directions {
  position: fixed;
  bottom: 400px;
  width: 80vw;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.gesture-direction {
  @size: 100px;
  width: @size;
  height: @size;
}
</style>
