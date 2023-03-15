export interface IDevice {
	id: string
	name: string
	description: string
	price: string
	stock: Nullable<string>
	stockPercent: Nullable<string>
	type: string
	count: string
	images: string[]
}
