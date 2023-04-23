export interface CounterProps {
	value?: number
	changeValue?: (value: number) => void
	maxValue?: number
	minValue?: number
	setCount?: number
	className?: string
	debounceTime?: number
}
