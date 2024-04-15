import { useRouter } from "next/router"
import { FC } from "react"

import { useBrandQuery } from "@/entities/Brand"

import { useInput } from "@/shared/hooks"
import { TextField } from "@/shared/ui"

import { CheckboxListItem } from "../CheckboxListItem"

import { $BrandSearchedList } from "./BrandSearchedList.styles"

export const BrandSearchedList: FC = () => {
	const input = useInput("")
	const { query } = useRouter()
	const { data, isLoading, error } = useBrandQuery(query.category as string)

	const brands = data?.filter(brand => brand.name.toLowerCase().includes(input.value.toLowerCase()))

	if (isLoading) {
		return <div>loading</div>
	}

	if (error) {
		return <div>error</div>
	}

	return (
		<>
			{brands ? (
				<$BrandSearchedList>
					<TextField inputSize="small" placeholder="Поиск..." {...input} />
					<div className="">
						{brands.map(brand => (
							<CheckboxListItem name="brand" value={brand.name} key={brand.id} />
						))}
					</div>
				</$BrandSearchedList>
			) : (
				<div>dsad</div>
			)}
		</>
	)
}
