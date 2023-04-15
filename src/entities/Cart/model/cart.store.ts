import { IDevice } from "@/shared/api"
import { createPersistStore } from "@/shared/utils"

interface CartStateTypes {
	devices: IDevice[]
	addDevice(device: IDevice): void
}

export const useCartStore = createPersistStore<CartStateTypes>(
	set => ({
		devices: [],
		addDevice(device: IDevice) {
			set(state => {
				state.devices.push(device)
			})
		}
	}),
	{ name: "cartStore", version: 1 }
)
