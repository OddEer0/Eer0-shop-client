export { api, fakeApi } from "./instance"

export type {
	IUser,
	IUserLoginBody,
	IUserRegistrationBody,
	ICategory,
	IDevice,
	IFilter,
	IDeviceAxiosResponse,
	ICategoryAxiosResponse,
	IFilterWithInfo,
	IInfo
} from "./types"

export { deviceService, categoryService, brandService, filterService, userService, cartService } from "./services"
