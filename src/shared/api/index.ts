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
	IInfo,
	ICart,
	IAddToCart,
	IRemoveFromCart
} from "./types"

export { deviceService, categoryService, brandService, filterService, userService, cartService } from "./services"
