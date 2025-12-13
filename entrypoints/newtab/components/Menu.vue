<script lang='ts' setup>
import Link from './Link.vue'
import Menu from './Menu.vue'
import Popup from './Popup.vue'

export interface MenuProps {
  children?: MenuProps[]
  title: string
  url?: string
}

const props = defineProps<MenuProps>()

const isFolder = computed(() => !props.url)
</script>

<template>
  <div class="menu">
    <template v-if="isFolder">
      <Popup placement="right-start">
        <template #reference>
          <div class="menu-label">{{ props.title }}</div>
        </template>
        <div class="popover">
          <Menu v-for="(menu, index) in props.children" :key="index" v-bind="menu" />
        </div>

      </Popup>
    </template>
    <template v-else>
      <Link :label="title" :url="url!" />
    </template>
  </div>

</template>

<style lang='less'></style>