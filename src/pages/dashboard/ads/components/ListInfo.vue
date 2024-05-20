<script setup lang="ts">
import { NListItem, NThing, NTag, NList } from 'naive-ui'
import { IAd } from '@/models'
interface Props {
  ad: IAd
}
const props = defineProps<Props>()

const { ad } = props
</script>

<template>
  <div class="contant-list">
    <n-list>
      <n-list-item>
        <template #prefix>
          <span class="material-symbols-rounded"> location_on </span>
        </template>
        <n-thing>{{ ad.district?.title }} </n-thing>
      </n-list-item>
      <n-list-item>
        <template #prefix>
          <span class="material-symbols-rounded"> account_circle </span>
        </template>
        <template #default> {{ ad.realtor.name }} </template>
        <template #suffix v-if="ad.realtor.isRealtor">
          <n-tag type="info" size="small"> Realtor </n-tag>
        </template>
      </n-list-item>
      <n-list-item>
        <template #prefix>
          <span class="material-symbols-rounded"> payments </span>
        </template>
        <n-thing>{{ Math.round(ad.price) }} </n-thing>
      </n-list-item>
      <n-list-item>
        <template #prefix>
          <span class="material-symbols-rounded"> schedule </span>
        </template>

        <n-thing>{{ ad.publicationDate }} </n-thing>
      </n-list-item>
      <n-list-item>
        <template #prefix> <span class="material-symbols-rounded"> work </span></template>

        <n-thing>{{ ad.worker?.name == null ? 'null' : ad.worker?.name }} </n-thing>
      </n-list-item>
    </n-list>
  </div>
</template>

<style lang="scss">
.n-select {
  margin-bottom: 10px;
}
</style>
