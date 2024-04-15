import { HTMLMotionProps, motion, useScroll, useTransform } from "framer-motion"
import { FC, PropsWithChildren, useRef } from "react"

import { StyledWrapper } from "./ScaleOpacityScrollable.styles"

export const ScaleScrollable: FC<PropsWithChildren<HTMLMotionProps<"div">>> = ({ children, ...props }) => {
	const ref = useRef<HTMLDivElement>(null)
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["end start", "-0.2 start"]
	})
	const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1])

	return (
		<StyledWrapper as={motion.div} ref={ref} style={{ scale }} {...props}>
			{children}
		</StyledWrapper>
	)
}
