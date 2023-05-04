import { createStore } from "@/shared/utils"

interface ConfirmStore {
	isShow: boolean
	message: Nullable<string>
	closeConfirm: () => void
	cancel?: Nullable<() => void>
	confirm?: Nullable<() => void>
	setConfirm: (message: string, confirm?: Nullable<() => void>, close?: Nullable<() => void>) => void
}

export const useConfirmStore = createStore<ConfirmStore>(set => ({
	isShow: false,
	message: null,
	closeConfirm() {
		set(store => {
			store.isShow = false
			store.message = null
			store.cancel = null
			store.confirm = null
		})
	},
	setConfirm(message, confirmFn, cancelFn) {
		set(store => {
			store.cancel = cancelFn
			store.confirm = confirmFn
			store.isShow = true
			store.message = message
		})
	},
	confirm: null,
	cancel: null
}))

export const confirmSelector = (state: ConfirmStore) => state.setConfirm
