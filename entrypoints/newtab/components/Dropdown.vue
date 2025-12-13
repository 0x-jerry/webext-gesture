<script lang='ts' setup>
import Link from './Link.vue'
import type { MenuProps } from './Menu.vue'
import Menu from './Menu.vue'
import Popup from './Popup.vue'

export interface DropdownProps {
  title: string
  url?: string
  menus?: MenuProps[]
}

const props = defineProps<DropdownProps>()
</script>

<template>
  <div>
    <template v-if="url">
      <Link :label="title" :url="url" />
    </template>
    <template v-else>
      <Popup placement="bottom-start">
        <template #reference="{ active }">
          <Link :label="title" :active="active" />
        </template>

        <div class="bg-white shadow-lg overflow-auto max-h-85vh w-400px">
          <Menu v-for="(menu, index) in props.menus" :key="index" v-bind="menu" />
        </div>
      </Popup>
    </template>
  </div>

</template>

<style lang='less'></style>