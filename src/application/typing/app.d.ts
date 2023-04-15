declare global {
	export type Nullable<T> = T | null

	export type Keys<T extends Record<string, unknown>> = keyof T
	export type Values<T extends Record<string, unknown>> = T[Keys<T>]

	export type GetFunctionKeys<T> = {
		[K in keyof T]: T[K] extends (...args: any[]) => void ? K : never
	}[keyof T]

	export type OmittedFunctionKeys<T> = Omit<T, GetFunctionKeys<T>>
}

export {}
