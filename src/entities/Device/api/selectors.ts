import { IDeviceAxiosResponse } from "@/shared/api"

export const deviceQuerySelector = (data: IDeviceAxiosResponse) => data.devices

export const devicePageCountQuerySelector = (data: IDeviceAxiosResponse) => data.pageCount
