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
  }), flip(), shift(), size({
    apply({ availableWidth, availableHeight, elements }) {
      // Change styles, e.g.
      Object.assign(elements.floating.style, {
        maxWidth: `${Math.max(0, availableWidth)}px`,
        maxHeight: `${Math.max(0, availableHeight)}px`,
      });
    }
  })],
  whileElementsMounted: autoUpdate,
})
</script>

<template>
  <div class="reference" ref="referenceEl">
    <slot name="reference" :active="isVisible"></slot>

    <Teleport to="body">
      <div ref="floatingEl" class="content" :style="floatingStyles" v-show="isVisible">
        <slot></slot>
      </div>
    </Teleport>
  </div>
</template>

<style lang='less' scoped></style>