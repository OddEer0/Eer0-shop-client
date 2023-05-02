import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion"
import { FC } from "react"
import { BiMoon } from "react-icons/bi"
import { ImSun } from "react-icons/im"
import styled from "styled-components"

// eslint-disable-next-line no-restricted-imports
import { useAppStore } from "@/app/store"

import { ThemeEnum, themeSelector } from "@/entities/Theme"

import { toggleScaleAnimation } from "@/shared/animation"

const Icon = styled.div`
	font-size: 32px;
	width: 32px;
	height: 32px;
	cursor: pointer;
`

export const ToggleThemeIcon: FC<HTMLMotionProps<"div">> = ({ ...props }) => {
	const { theme, toggleHandle } = useAppStore(themeSelector)

	return (
		<motion.div {...props}>
			<AnimatePresence mode="wait">
				{theme === ThemeEnum.dark ? (
					<motion.div
						key="moon"
						onClick={() => toggleHandle()}
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
						onClick={() => toggleHandle()}
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
