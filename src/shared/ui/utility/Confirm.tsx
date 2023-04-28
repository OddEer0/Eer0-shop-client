import { createStore } from "@/shared/utils"

interface ConfirmStore {
	isShow?: boolean
	message: Nullable<string>
}

export const useConfirmStore = createStore<ConfirmStore>(set => ({
	isShow: false,
	message: null
}))
