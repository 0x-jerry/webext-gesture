<script lang='ts' setup>
import {
  autoPlacement,
  autoUpdate,
  flip,
  hide,
  offset,
  type Placement,
  shift,
  useFloating,
} from '@floating-ui/vue'
import { useElementHover } from '@vueuse/core';

export interface PopupProps {
  placement: Placement
}

const referenceEl = useTemplateRef('referenceEl')
const floatingEl = useTemplateRef('floatingEl')

const props = defineProps<PopupProps>()

const isHover = useElementHover(referenceEl)

const { floatingStyles } = useFloating(referenceEl, floatingEl, {
  placement: computed(() => props.placement),
  middleware: [offset(), flip(), shift()],
  whileElementsMounted: autoUpdate,
})
</script>

<template>
  <div class="reference" ref="referenceEl">
    <slot name="reference"></slot>

    <Teleport to="body">
      <div ref="floatingEl" :style="floatingStyles" v-show="isHover">
        <slot></slot>
      </div>
    </Teleport>
  </div>
</template>

<style lang='less' scoped></style>