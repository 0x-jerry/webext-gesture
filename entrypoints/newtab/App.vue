<script setup lang="ts">
import { useAsyncState } from '@vueuse/core';
import { browser } from 'wxt/browser'
import Dropdown from './components/Dropdown.vue';
import Link from './components/Link.vue';
import RecentClosed from './components/RecentClosed.vue';
import TopSites from './components/TopSites.vue';

const filter = ref('')

const topSiteData = useAsyncState(() => browser.topSites.get(), [])
topSiteData.execute()

const bookmarksData = useAsyncState(() => browser.bookmarks.getTree(), [])
bookmarksData.execute()

const historyData = useAsyncState(() => browser.history.search({ text: '' }), [])
historyData.execute()

const recentClosed = useAsyncState(() => browser.sessions.getRecentlyClosed(), [])
recentClosed.execute()

const bookmarksBar = computed(() => bookmarksData.state.value[0]?.children?.find(n => n.folderType === 'bookmarks-bar'))

const bookmarksOther = computed(() => bookmarksData.state.value[0]?.children?.find(n => n.folderType === 'other'))

</script>

<template>
  <div class="shadow-lg overflow-auto flex fixed top-0 left-0 w-full z-10">
    <div class="flex flex-1 w-0">
      <template v-for="item in bookmarksBar?.children">
        <Dropdown :title="item.title" :menus="item.children" />
      </template>
    </div>
    <div v-if="bookmarksOther?.children?.length">
      <Dropdown :title="bookmarksOther.title" :menus="bookmarksOther.children" />
    </div>
  </div>
  <div class="mt-100px">
    <div class="content w-60vw max-w-700px m-auto">
      <div class="w-full px-4 py-2 border-(1 solid gray-3) rounded-full text-lg mb-4">
        <input class="w-full border-none appearance-none outline-none " v-model="filter" type="text"
          placeholder="Search ...">
      </div>

      <TopSites :filter="filter" :max-count="5" />
      <RecentClosed :filter="filter" :max-count="5" />
    </div>
  </div>
</template>

<style scoped></style>
