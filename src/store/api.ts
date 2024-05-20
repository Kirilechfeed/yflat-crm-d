import { defineStore } from 'pinia'
import { mande } from 'mande'
import { IGetAdsData, IGetAdsQueryParams } from '@/models'

const BASE_URL = 'http://164.92.148.252:8080'
const api = mande(`${BASE_URL}/`)

export const useApi = defineStore('api', {
  actions: {
    async getAds(queryParams: IGetAdsQueryParams) {
      const { rentalAdvertisments, totalAdsNumber } = await api.get<IGetAdsData>({
        query: queryParams,
      })

      return { rentalAdvertisments, totalAdsNumber }
    },
  },
})
