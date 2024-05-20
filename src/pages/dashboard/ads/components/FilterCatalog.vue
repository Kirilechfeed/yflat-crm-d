<script setup lang="ts">
import { NList, NListItem, NSelect, NButton, NInputNumber } from 'naive-ui'
import { ref } from 'vue'

interface Props {
  districts: []
  settingsTest: []
}

interface Emits {
  (e: 'saveFilter', ad): void
}
const emit = defineEmits<Emits>()
const props = defineProps<Props>()

const { districts } = props
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
    id: 1,
    name: 'Nikita',
  },
  {
    id: 2,
    name: 'Daniil',
  },
]
const realtor = [
  {
    label: 'true',
    value: true,
  },
  {
    label: 'false',
    value: false,
  },
]

let valueMin = ref(props.settingsTest[0].valueMin)
let valueMax = ref(props.settingsTest[0].valueMax)
let valueStatus = ref(props.settingsTest[1].statusName)
let valueDistrict = ref(props.settingsTest[2].title)
let valueWorker = ref(props.settingsTest[3].name)
let isRealtor = ref(props.settingsTest[4].isRealtor)

function saveFilter() {
  const settings = [
    { value: 'price', valueMin: valueMin.value, valueMax: valueMax.value },
    { value: 'rentalAdProcessingState', statusName: valueStatus.value },
    { value: 'district', title: valueDistrict.value },
    { value: 'worker', name: valueWorker.value },
    { value: 'realtor', isRealtor: isRealtor.value },
  ]

  emit('saveFilter', settings)
}
function resetFilter() {
  valueMin.value = null
  valueMax.value = null
  valueStatus.value = null
  valueDistrict.value = null
  valueWorker.value = null
  isRealtor.value = null
}
</script>
<template>
  <div class="wrapper">
    <n-list>
      <n-list-item>
        <h3>Price:</h3>
        <div class="input-price">
          <n-input-number v-model:value="valueMin" placeholder="Min" :min="0" :max="50000" size="small" />
          <p class="help-elem">-</p>
          <n-input-number v-model:value="valueMax" placeholder="Max" :min="0" :max="50000" size="small" />
        </div>
      </n-list-item>
      <n-list-item>
        <h3>Status:</h3>
        <n-select
          v-model:value="valueStatus"
          size="small"
          :placeholder="'Select status'"
          :placement="'bottom'"
          :options="status"
          :label-field="'statusName'"
          :value-field="'statusName'"
        ></n-select>
      </n-list-item>
      <n-list-item>
        <h3>District:</h3>
        <n-select
          v-model:value="valueDistrict"
          size="small"
          :placeholder="'Select district'"
          :placement="'bottom'"
          :options="districts"
          :label-field="'title'"
          :value-field="'title'"
        ></n-select>
      </n-list-item>
      <n-list-item>
        <h3>Worker:</h3>
        <n-select
          v-model:value="valueWorker"
          size="small"
          :placeholder="'Select worker'"
          :placement="'bottom'"
          :options="workers"
          :label-field="'name'"
          :value-field="'name'"
        ></n-select>
      </n-list-item>
      <n-list-item>
        <h3>Is Realtor:</h3>
        <n-select
          v-model:value="isRealtor"
          size="small"
          :placeholder="'Select is Realtor'"
          :placement="'bottom'"
          :options="realtor"
          :label-field="'label'"
          :value-field="'value'"
        ></n-select>
      </n-list-item>
      <div class="footer">
        <n-button @click="resetFilter" strong secondary type="primary"> Reset </n-button>
        <n-button @click="saveFilter" type="primary"> Save </n-button>
      </div>
    </n-list>
  </div>
</template>

<style scoped>
.input-price {
  display: flex;
  padding: 10px 0px;
}
.help-elem {
  margin: 0px 30px;
}
.footer {
  margin-top: 10px;
  display: flex;
  justify-content: end;
  & > *:not(:last-child) {
    margin-right: 10px;
  }
}
</style>
