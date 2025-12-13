<script setup lang="ts">
import { useAsyncState } from '@vueuse/core';
import { browser } from 'wxt/browser'
import Dropdown from './components/Dropdown.vue';

const topSiteData = useAsyncState(() => browser.topSites.get(), [])
topSiteData.execute()

const bookmarksData = useAsyncState(() => browser.bookmarks.getTree(), [])
bookmarksData.execute()

const bookmarksBar = computed(() => bookmarksData.state.value[0]?.children?.find(n => n.folderType === 'bookmarks-bar'))

const bookmarksOther = computed(() => bookmarksData.state.value[0]?.children?.find(n => n.folderType === 'other'))

onMounted(async () => {
  await bookmarksData
  console.log(bookmarksData.state.value)
})

// browser.history
</script>

<template>
  <div class="text-red">New Tab</div>
  <div class="flex">
    <div class="first-level" v-for="item in bookmarksBar?.children">

      <Dropdown :title="item.title" :menus="item.children" />
    </div>
  </div>
  <div>
    <div v-for="top in topSiteData.state.value">{{ top.title }}</div>
  </div>
</template>

<style scoped></style>
