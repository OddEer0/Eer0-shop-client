import { motion } from "framer-motion"
import { FC } from "react"

import { toggleScaleAnimation } from "@/shared/animation"
import { Avatar } from "@/shared/ui"

import { $UserHead } from "./UserHead.styles"

interface UserHeadProps {
	avatar: Nullable<string>
	firstName: string
	lastName: string
	subTitle: Nullable<string>
	className?: string
}

export const UserHead: FC<UserHeadProps> = ({ avatar, firstName, lastName, subTitle, className }) => {
	return (
		<$UserHead className={className}>
			<motion.div variants={toggleScaleAnimation} animate="show" initial="hidden" transition={{ duration: 0.5 }}>
				<Avatar className="avatar" defaultAvatar={firstName} url={avatar} avatarSize="xlarge" />
			</motion.div>
			<div className="">
				<motion.h2
					className="h2"
					animate={{ x: 0, opacity: 1 }}
					initial={{ x: -50, opacity: 0 }}
					transition={{ delay: 0.6, duration: 0.4 }}
				>
					{firstName} {lastName}
				</motion.h2>
				<motion.p
					className="h5"
					animate={{ x: 0, opacity: 1 }}
					initial={{ x: -50, opacity: 0 }}
					transition={{ delay: 0.7, duration: 0.4 }}
				>
					{subTitle ? subTitle : "Нет описания"}
				</motion.p>
			</div>
		</$UserHead>
	)
}
