export const circleOpenAnimation = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 50% 50%)`,
		transition: {
			type: "spring",
			stiffness: 10,
			restDelta: 2
		}
	}),
	closed: {
		clipPath: "circle(0px at 50% 50%)",
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 40
		}
	}
}
