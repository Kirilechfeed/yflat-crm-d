<script setup lang="ts">
import AdsCatalog from './components/AdsCatalog.vue'
import AdDetailsCard from './components/AdDetailsCard.vue'
import FilterCatalog from './components/FilterCatalog.vue'
import { NButton, NModal } from 'naive-ui'
import { ref, computed, reactive } from 'vue'
import { IAd, IGetAdsData } from '@/models'
import data from './data'

let data1 = reactive<IGetAdsData>(data)
let filteredData = ref<IAd[]>(data1.rentalAdvertisments)
let selectedAd = ref<IAd | null>(null)
let showFilter = ref(false)

const districts = []

data1.rentalAdvertisments.forEach(element => {
  districts.push(element.district)
})
const nameDistrics = districts.reduce((o, i) => {
  if (!o.find(v => v.id == i.id)) {
    o.push(i)
  }
  return o
}, [])

const showAdDetailsModal = computed(() => {
  return !!selectedAd.value
})

const showAdDetails = (ad: IAd) => {
  selectedAd.value = ad
}
function setSetting() {
  selectedAd.value = null
}
const settingsTest = ref([
  { value: 'price', valueMin: null, valueMax: null },
  { value: 'rentalAdProcessingState', statusName: null },
  { value: 'district', title: null },
  { value: 'worker', name: null },
  { value: 'realtor', isRealtor: null },
])

function saveFilter(settings: any) {
  settingsTest.value = settings
  filteredData.value = data1.rentalAdvertisments.filter(ad => {
    return settings.every((setting: any) => {
      if (!ad.hasOwnProperty(setting.value)) return false

      if (setting.valueMin != null && ad[setting.value] < setting.valueMin) return false
      if (setting.valueMax != null && ad[setting.value] > setting.valueMax) return false

      if (setting.statusName != null && ad[setting.value] !== null) {
        if (setting.statusName != null && ad[setting.value].statusName !== setting.statusName) return false
      }
      if (setting.title != null && ad[setting.value] !== null) {
        if (setting.title != null && ad[setting.value].title !== setting.title) return false
      }

      if (setting.name != null && ad[setting.value] == null) {
        return false
      } else {
        if (setting.name != null && ad[setting.value].name !== setting.name) return false
      }
      if (setting.isRealtor != null && ad[setting.value] !== null) {
        if (setting.isRealtor != null && ad[setting.value].isRealtor !== setting.isRealtor) return false
      }
      return true
    })
  })
  console.log(filteredData.value)
  showFilter.value = false
}
</script>
<template>
  <div class="wrapper">
    <div class="filter">
      <n-button ghost color="rgb(163, 230, 53)" quaternary circle>
        <template #icon>
          <span class="material-symbols-rounded"> refresh </span>
        </template>
      </n-button>
      <n-button type="primary" @click="showFilter = true"> Filter </n-button>
    </div>

    <div class="container">
      <AdsCatalog @show-details="showAdDetails" :ads="filteredData" />
    </div>

    <div class="page"></div>
  </div>

  <n-modal
    preset="dialog"
    size="small"
    class="details-modal"
    :show="showAdDetailsModal"
    :title="selectedAd?.title"
    :bordered="false"
    @hide="selectedAd = null"
  >
    <AdDetailsCard :ad="selectedAd" @clicks="setSetting" />
  </n-modal>

  <n-modal
    preset="dialog"
    size="small"
    class="details-modal"
    v-model:show="showFilter"
    :title="'Filters'"
    :bordered="false"
  >
    <FilterCatalog :districts="nameDistrics" @save-filter="saveFilter" :settingsTest="settingsTest" />
  </n-modal>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  max-height: 100%;
}
.filter {
  display: flex;
  justify-content: end;
  & > :not(:last-child) {
    margin-right: 15px;
  }
  padding: 10px 40px 15px 0px;
}
.container {
  overflow-y: auto;
}
.page {
  height: 70px;
  box-shadow: 0px -10px 10px rgb(17, 24, 39);
}
</style>
