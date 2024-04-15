import { FC } from "react"

import { $Empty } from "./Empty.styles"
import { EmptyProps } from "./Empty.types"

export const Empty: FC<EmptyProps> = ({ width = "40px", count = 1, ...props }) => {
	return (
		<>
			{new Array(count).fill("").map((_, i) => (
				<$Empty {...props} key={i} width={width} />
			))}
		</>
	)
}
