import { HTMLMotionProps, motion } from "framer-motion"
import { FC } from "react"

import { $Aside } from "./Aside.styles"

type AsideProps = HTMLMotionProps<"aside">

export const Aside: FC<AsideProps> = ({ ...props }) => {
	return <$Aside as={motion.aside} {...props}></$Aside>
}
