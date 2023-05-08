import { FC } from "react"

import { Meta } from "@/shared/ui"

import { $RefoundView } from "./Refound.styles"
import { RefoundList } from "./RefoundList"

export const RefoundView: FC = () => {
	return (
		<>
			<Meta title="Eer0 Shop | Возвраты" />
			<$RefoundView>
				<RefoundList />
			</$RefoundView>
		</>
	)
}
