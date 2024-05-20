export interface IAd {
  id: number
  title: string
  price: number
  district: IDistrict | null
  worker: IWorker | null
  images: string[]
  linkToSource: string
  realtor: IRealtor
  rentalAdProcessingState: IAdProcessingState
  publicationDate: string
}

export interface IRealtor {
  name: string
  mobileNumber: string
  isRealtor: boolean
}

export interface IAdProcessingState {
  statusId: number
  statusName: string
  note: string | null
}

export interface IDistrict {
  id: number
  title: string
}

export interface IAdStatus {
  id: number
  title: string
}

export interface IAdsPagination {
  pageSize: number
  pageNumber: number
}

export interface IAdsFilter {
  fromPrice?: number
  toPrice?: number
  districtId?: number
  statusId?: number
  workerId?: number
  isRealtor?: boolean
}

export interface IGetAdsQueryParams extends IAdsFilter, IAdsPagination {}

export interface IGetAdsData {
  rentalAdvertisments: IAd[]
  totalAdsNumber: number
}

export interface IWorker {
  id: number
  name: string
}
