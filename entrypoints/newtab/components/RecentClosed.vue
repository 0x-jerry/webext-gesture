<script lang='ts' setup>
import { useAsyncState } from '@vueuse/core'
import { matchString } from '../utils'
import Link from './Link.vue'
import NoData from './NoData.vue'
import Section from './Section.vue'

export interface RecentClosedProps {
  filter?: string
  maxCount?: number
}

const props = defineProps<RecentClosedProps>()

const data = useAsyncState(async () => {
  const items = await browser.sessions.getRecentlyClosed()
  const _items = items
    .map((n) => ({
      title: n.tab?.title,
      url: n.tab?.url,
    }))
    .filter((n) => !!(n.title && n.url && matchString(n.title, props.filter)))

  return props.maxCount ? _items.slice(0, props.maxCount) : _items
}, [])

data.execute()

const result = computed(() => filter(props.filter))

function filter(value?: string) {
  let r = data.state.value

  if (value) {
    r = r.filter((n) => matchString(n.title || '', value))
  }

  return r.slice(0, props.maxCount)
}
</script>

<template>
  <Section title="Recently Closed">
    <template v-if='result.length'>
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