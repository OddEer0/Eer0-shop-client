import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion"
import { FC } from "react"
import { BiMoon } from "react-icons/bi"
import { ImSun } from "react-icons/im"
import styled from "styled-components"

import { ThemeEnum, useTheme } from "@/entities/Theme"

import { toggleScaleAnimation } from "@/shared/animation"

const Icon = styled.div`
	font-size: 32px;
	width: 32px;
	height: 32px;
	cursor: pointer;
`

export const ToggleThemeIcon: FC<HTMLMotionProps<"div">> = ({ ...props }) => {
	const { theme, toggleTheme } = useTheme()

	return (
		<motion.div {...props}>
			<AnimatePresence mode="wait">
				{theme === ThemeEnum.dark ? (
					<motion.div
						key="moon"
						onClick={toggleTheme}
						variants={toggleScaleAnimation}
						animate="show"
						exit="hidden"
						initial="init"
					>
						<Icon as={BiMoon} />
					</motion.div>
				) : (
					<motion.div
						key="sun"
						onClick={toggleTheme}
						variants={toggleScaleAnimation}
						animate="show"
						exit="hidden"
						initial="init"
					>
						<Icon as={ImSun} />
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	)
}
