import { StateCreator, create } from "zustand"
import { PersistOptions, devtools, persist } from "zustand/middleware"
import { immer } from "zustand/middleware/immer"

export const createStore = <T = unknown>(state: StateCreator<T, [["zustand/immer", never]], []>) => {
	return create<T>()(devtools(immer(state)))
}

export const createPersistStore = <T = unknown>(
	state: StateCreator<T, [["zustand/devtools", never], ["zustand/immer", never], ["zustand/persist", unknown]], []>,
	options: PersistOptions<T, T>
) => {
	return create<T>()(devtools(immer(persist(state, options))))
}
