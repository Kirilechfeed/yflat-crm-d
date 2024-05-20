<script setup lang="ts">
import { NCarousel, NCard, NButton } from 'naive-ui'
import { IAd } from '@/models'
import ListInfo from '@/pages/dashboard/ads/components/ListInfo.vue'

interface Props {
  ads: IAd
}
interface Emits {
  (e: 'click', ad: IAd): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
const { ads } = props

const handleInfoClick = () => {
  emit('click', ads)
}
function toClass() {
  return ads.rentalAdProcessingState.statusName.toLocaleLowerCase().replace(/\s+/g, '')
}
</script>

<template>
  <div class="ad-wrapper">
    <n-card :bordered="true" :hoverable="true">
      <div :class="`proces ${toClass()}`"></div>
      <n-carousel show-arrow>
        <img v-for="img in ads.images" class="carousel-img" :src="img" />
      </n-carousel>

      <ListInfo @click="handleInfoClick" :ad="ads" />
      <n-button :block="true" type="primary">
        {{ ads.realtor.mobileNumber == '' ? 'Номер скрыт' : ads.realtor.mobileNumber }}
      </n-button>
    </n-card>
  </div>
</template>
<style lang="scss">
.proces {
  border: 3px solid white;
  margin-bottom: 8px;
  border-radius: 5px;
}

.created {
  border-color: white;
}
.inprogress {
  border-color: rgb(10, 133, 10);
}
.booked {
  border-color: rgb(124, 17, 17);
}
.rented {
  border-color: rgb(45, 29, 138);
}
.ad-wrapper .n-list-item__prefix {
  display: flex;
  align-items: center;
}
.ad-wrapper .n-list-item__main {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
}

.ad-wrapper .n-button--block {
  margin-top: 10px;
}
</style>
<style lang="scss" scoped>
.ad-wrapper {
  margin: 10px 0px;
  border-radius: 5px;
  &:hover {
    transition: 01s;
    cursor: pointer;
  }
  .n-card {
    max-width: 300px;
  }
  .carousel-img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  @media (max-width: 1200px) {
    .n-card {
      max-width: 400px;
    }
  }
  @media (max-width: 830px) {
    .n-card {
      max-width: 800px;
    }
  }
}
</style>
