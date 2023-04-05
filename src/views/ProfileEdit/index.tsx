import { motion } from "framer-motion"
import { FC } from "react"

import { ChangeProfile, ChangeUserAvatar } from "@/features/UserAction"

import { toggleScaleAnimation } from "@/shared/animation"
import { Meta } from "@/shared/ui"

import { $ProfileEdit } from "./ProfileEdit.styles"

export const ProfileEditView: FC = () => {
	return (
		<>
			<Meta title="Eer0 Shop | Profile" />
			<$ProfileEdit>
				<motion.div
					variants={toggleScaleAnimation}
					animate="show"
					initial="hidden"
					transition={{ duration: 0.5 }}
					whileHover={{ scale: 1.05 }}
				>
					<ChangeUserAvatar className="change-avatar" />
				</motion.div>
				<ChangeProfile />
			</$ProfileEdit>
		</>
	)
}
