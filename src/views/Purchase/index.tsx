import { FC } from "react"

import { Meta } from "@/shared/ui"

import { $PurchaseView } from "./Purchase.styles"
import { PurchaseDeviceList } from "./ui/PurchaseDeviceList"

export const PurchaseView: FC = () => {
	return (
		<>
			<Meta title="Eer0 Shop | Купленные" />
			<$PurchaseView>
				<PurchaseDeviceList />
			</$PurchaseView>
		</>
	)
}
