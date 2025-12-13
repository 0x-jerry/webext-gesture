<script lang='ts' setup>
import { useAsyncState } from '@vueuse/core'
import { matchString } from '../utils'
import Link from './Link.vue'
import NoData from './NoData.vue'
import Section from './Section.vue'

export interface TopSitesProps {
  filter?: string
  maxCount?: number
}

const props = defineProps<TopSitesProps>()

const data = useAsyncState(async () => {
  const items = await browser.topSites.get()
  const _items = items.filter((n) => !!(n.title && n.url))

  return _items
}, [])

data.execute()

const result = computed(() => filter(props.filter))

function filter(value?: string) {
  let r = data.state.value
  if (value) {
    r = r.filter((n) => matchString(n.title, value))
  }

  return r.slice(0, props.maxCount)
}
</script>

<template>
  <Section title="Top Sites">
    <template v-if="result.length">
      <template v-for='item in result'>
        <Link :label='item.title!' :url='item.url!' />
      </template>
    </template>
    <template v-else>
      <NoData />
    </template>
  </Section>

</template>

<style lang='less' scoped></style>