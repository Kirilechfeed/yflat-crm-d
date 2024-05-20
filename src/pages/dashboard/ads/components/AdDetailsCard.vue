<script setup lang="ts">
import { NSpace, NSelect, NCard, NInput, NButton } from 'naive-ui'
import { ref } from 'vue'
import ListInfo from './ListInfo.vue'
import { IAd } from '@/models'
interface Props {
  ad: IAd
}
interface Emits {
  (e: 'clicks', ad: IAd): void
}

const emit = defineEmits<Emits>()
const props = defineProps<Props>()
const { ad } = props
console.log(ad)
let valueStatus = ref(ad.rentalAdProcessingState.statusName)
let valueWorker = ref(ad.worker?.name)
let note = ref<string | null>(ad.rentalAdProcessingState.note)

const status = [
  {
    stateId: 0,
    statusName: 'Created',
  },
  {
    stateId: 1,
    statusName: 'In Progress',
  },
  {
    stateId: 2,
    statusName: 'Booked',
  },
  {
    stateId: 3,
    statusName: 'Rented',
  },
]
const workers = [
  {
    id: 0,
    name: 'Not worker',
  },
  {
    id: 1,
    name: 'Nikita',
  },
  {
    id: 2,
    name: 'Daniil',
  },
]

function setSetting() {
  ad.worker = { ...workers.filter(e => e.name == valueWorker.value)[0] }
  ad.rentalAdProcessingState = { ...status.filter(e => e.statusName == valueStatus.value)[0] }
  ad.rentalAdProcessingState.note = note.value
  emit('clicks', ad)
}
</script>

<template>
  <n-card :bordered="false" size="small" role="dialog" aria-modal="true">
    <n-space vertical>
      <n-select
        v-model:value="valueStatus"
        size="small"
        :placeholder="'Select status'"
        :placement="'bottom'"
        :options="status"
        :label-field="'statusName'"
        :value-field="'statusName'"
        :default-value="ad.rentalAdProcessingState.statusName"
      />
    </n-space>
    <n-space vertical>
      <n-select
        v-model:value="valueWorker"
        size="small"
        :placeholder="'Select worker'"
        :placement="'bottom'"
        :options="workers"
        :label-field="'name'"
        :value-field="'name'"
        :default-value="ad.worker?.name"
      />
    </n-space>
    <ListInfo :ad="ad" />
    <n-space vertical>
      <n-input
        v-model:value="note"
        :default-value="ad.rentalAdProcessingState.note"
        type="textarea"
        placeholder="Enter your note"
      />
    </n-space>
    <div class="footer">
      <n-button strong secondary type="primary"> Open OLX </n-button>
      <n-button @click="setSetting" type="primary"> Save </n-button>
    </div>
  </n-card>
</template>

<style land="scss" scoped>
.footer {
  margin-top: 10px;
  display: flex;
  justify-content: end;
  & > *:not(:last-child) {
    margin-right: 10px;
  }
}
</style>
