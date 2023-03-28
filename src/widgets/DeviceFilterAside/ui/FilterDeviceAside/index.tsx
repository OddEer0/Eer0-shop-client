import { FC, useRef } from "react"
import SimpleBar from "simplebar-react"

import {
	BrandSearchedList,
	FilterDeviceModalOpenButton,
	OnlyCashSwitch,
	PriceSlider,
	StockDeviceSwitch
} from "@/features/DeviceFilter"

import { Accordion } from "@/shared/ui"

import { TitledSwitch } from "../TitledSwitch"

import { $FilterDeviceAside } from "./FilterDeviceAside.styles"

export const FilterDeviceAside: FC = () => {
	return (
		<$FilterDeviceAside>
			<SimpleBar className="scroll" forceVisible="y">
				<div className="sidebar">
					<h2 className="h2">Фильтр</h2>
					<TitledSwitch title="Только в наличий" switchComponent={<OnlyCashSwitch />} />
					<TitledSwitch title="Товары с акцией" switchComponent={<StockDeviceSwitch />} />
					<Accordion className="filter-accordion">
						<Accordion.Summary text="По цене" className="filter-summary" defaultState={true}>
							<PriceSlider />
						</Accordion.Summary>
						<Accordion.Summary text="По бренду" className="filter-summary" defaultState={true}>
							<BrandSearchedList />
						</Accordion.Summary>
					</Accordion>
					<FilterDeviceModalOpenButton>Фильтры</FilterDeviceModalOpenButton>
				</div>
			</SimpleBar>
		</$FilterDeviceAside>
	)
}
