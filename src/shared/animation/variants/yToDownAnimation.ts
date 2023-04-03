export const yToDownAnimation = {
	show: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.1
		}
	}),
	hidden: {
		opacity: 0,
		y: -75
	}
}
