<script setup lang="ts">
import AdCard from './AdCard.vue'
import { IAd } from '@/models'
interface Props {
  ads: IAd[]
}
const props = defineProps<Props>()

interface Emits {
  (e: 'show-details', ad: IAd): void
}
const emit = defineEmits<Emits>()

const handleAdCardClick = (ad: IAd) => {
  emit('show-details', ad)
}
</script>

<template>
  <div class="container">
    <div v-for="ad in $props.ads" :key="ad.id" class="card">
      <AdCard :ads="ad" @click="handleAdCardClick(ad)" />
    </div>
  </div>
</template>

<style land="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  overflow-y: hidden;
  justify-content: space-around;
  padding: 0px 30px;
}

.card {
  padding: 0px 5px;
}
@media (max-width: 1200px) {
  .container {
    display: flex;
    overflow-y: hidden;
    justify-content: space-around;
    padding: 0px 30px;
  }
  .card {
    flex: 0 1 50%;
    padding: 0px 5px;
  }
}
@media (max-width: 830px) {
  .card {
    flex: 0 1 100%;
  }
}
</style>
