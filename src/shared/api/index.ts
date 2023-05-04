export { api, fakeApi } from "./instance"

export type {
	IUser,
	IUserLoginBody,
	IUserRegistrationBody,
	ICategory,
	IDevice,
	IFilter,
	IDeviceAxiosResponse,
	IInfo,
	ICart,
	ISetCountCartDevice,
	IPostCartAdd,
	IBrand,
	IBrand$All,
	IBrand$Categories,
	IBrand$Device,
	ICategory$Brands,
	ICategory$BrandsFilters,
	ICategory$Devices,
	ICategory$Filters,
	IDevice$Brand,
	IDevice$Category,
	IDevice$Comments,
	IDevice$Infos,
	IFilter$Category,
	IFilter$Infos,
	IInfo$Devices,
	IInfo$Filter,
	IPostBrand,
	IPutBrand,
	IComment,
	IComment$Avatar,
	IComment$Device,
	IComment$DeviceUser,
	IComment$User,
	IPostComment
} from "./types"

export { RoleEnum } from "./types"

export * from "./services"
