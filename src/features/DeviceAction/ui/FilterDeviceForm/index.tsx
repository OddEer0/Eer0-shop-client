import { FC } from "react"

import { useFilterDeviceForm } from "../../hooks"

export const FilterDeviceForm: FC = () => {
	const { submitHandler } = useFilterDeviceForm()

	return (
		<form onSubmit={submitHandler}>
			<div className=""></div>
		</form>
	)
}
