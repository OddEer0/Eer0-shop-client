import { useRouter } from "next/router"
import { ChangeEvent, FC, useMemo, useState } from "react"

import { useBrandQuery } from "@/entities/Brand"

import { TextField } from "@/shared/ui"

import { CheckboxListItem } from "../CheckboxListItem"

import { $BrandSearchedList } from "./BrandSearchedList.styles"

export const BrandSearchedList: FC = () => {
	const [searchValue, setSearchValue] = useState("")
	const { query } = useRouter()
	const { data, isLoading, error } = useBrandQuery(query.category as string)

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	const brands = useMemo(() => {
		if (!searchValue) {
			return data
		}
		if (data) {
			return data?.filter(brand => brand.name.toLowerCase().includes(searchValue.toLowerCase()))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchValue])

	if (isLoading) {
		return <div>loading</div>
	}

	if (error) {
		return <div>error</div>
	}

	return brands && data?.length ? (
		<$BrandSearchedList>
			<TextField placeholder="Поиск..." value={searchValue} onChange={changeHandler} />
			<div className="">
				{brands.map(brand => (
					<CheckboxListItem name="brand" value={brand.name} key={brand.id} />
				))}
			</div>
		</$BrandSearchedList>
	) : null
}
