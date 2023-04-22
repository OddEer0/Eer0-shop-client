import { FC } from "react"

import { $Aside } from "./Aside.styles"

interface DevicePageAsideProps {
	price: number
	stock: number
	stockPercent: number
}

export const DevicePageAside: FC = () => {
	return <$Aside></$Aside>
}
