import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion"
import { FC } from "react"
import { BiMoon } from "react-icons/bi"
import { ImSun } from "react-icons/im"
import styled from "styled-components"

import { ThemeEnum, themeSelector } from "@/entities/Theme"

import { toggleScaleAnimation } from "@/shared/animation"
import { useActions, useAppSelector } from "@/shared/hooks"

const Icon = styled.div`
	font-size: 32px;
	width: 32px;
	height: 32px;
	cursor: pointer;
`

export const ToggleThemeIcon: FC<HTMLMotionProps<"div">> = ({ ...props }) => {
	const { setTheme } = useActions()
	const { type } = useAppSelector(themeSelector)

	const setDarkTheme = () => {
		setTheme("dark")
	}

	const setLightTheme = () => {
		setTheme("light")
	}

	return (
		<motion.div {...props}>
			<AnimatePresence mode="wait">
				{type === ThemeEnum.dark ? (
					<motion.div
						key="moon"
						onClick={setLightTheme}
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
						onClick={setDarkTheme}
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
