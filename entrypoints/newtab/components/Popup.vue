<script lang='ts' setup>
import {
  autoUpdate,
  flip,
  offset,
  type Placement,
  shift,
  size,
  useFloating,
} from '@floating-ui/vue'
import { useElementHover } from '@vueuse/core';

export interface PopupProps {
  placement: Placement
}

const referenceEl = useTemplateRef('referenceEl')
const floatingEl = useTemplateRef('floatingEl')

const props = defineProps<PopupProps>()

const isHoverReference = useElementHover(referenceEl, {
  delayLeave: 10
})

const isHoverContent = useElementHover(floatingEl)

const isVisible = computed(() => isHoverReference.value || isHoverContent.value)

const { floatingStyles } = useFloating(referenceEl, floatingEl, {
  placement: computed(() => props.placement),
  middleware: [offset({
    mainAxis: 1,
  }), flip()],
  whileElementsMounted: autoUpdate,
})

const styles = computed(() => {
  return {
    ...floatingStyles.value,
    zIndex: 100
  }
})
</script>

<template>
  <div class="reference" ref="referenceEl">
    <slot name="reference" :active="isVisible"></slot>

    <div ref="floatingEl" :style="styles" v-if="isVisible">
      <slot></slot>
    </div>
  </div>
</template>

<style lang='less' scoped></style>