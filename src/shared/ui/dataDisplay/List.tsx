import { HTMLAttributes, ReactNode } from "react"

interface ListProps<T> extends HTMLAttributes<HTMLUListElement> {
	items: T[]
	renderItem: (item: T, index?: number) => ReactNode
}

export function List<T>({ renderItem, items, ...props }: ListProps<T>) {
	return <ul {...props}>{items.map(renderItem)}</ul>
}
