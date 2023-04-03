import { motion } from "framer-motion"
import { FC } from "react"

import { yToDownAnimation } from "@/shared/animation"
import { Tag } from "@/shared/ui"

import { useProfileQuery } from "../../api"
import { UserHead } from "../UserHead"

import { $Profile } from "./Profile.styles"

export const Profile: FC = () => {
	const { data, isLoading } = useProfileQuery()

	if (isLoading) return <span>loading</span>

	return data ? (
		<$Profile>
			<UserHead avatar={data.avatar} firstName={data.firstName} subTitle={data.subTitle} lastName={data.lastName} />
			<ul className="user-profile-info-list">
				<motion.li variants={yToDownAnimation} animate="show" initial="hidden" custom={0} transition={{ delay: 0.4 }}>
					<h5>Имя пользователя:</h5>
					<h5 className="list-value">{data.nickname}</h5>
				</motion.li>
				<motion.li variants={yToDownAnimation} animate="show" initial="hidden" custom={0.5} transition={{ delay: 0.4 }}>
					<h5>Аккаунт пользователя:</h5>
					<h5 className="list-value">{data.email}</h5>
				</motion.li>
				<motion.li variants={yToDownAnimation} animate="show" initial="hidden" custom={1} transition={{ delay: 0.4 }}>
					<h5>День рождение:</h5>
					<h5 className="list-value">Не указан</h5>
				</motion.li>
				<motion.li
					className="multi-value"
					variants={yToDownAnimation}
					animate="show"
					initial="hidden"
					custom={1.5}
					transition={{ delay: 0.4 }}
				>
					<h5>Роли пользователя:</h5>
					<h5 className="list-value">
						{data.roles.map(role => (
							<Tag key={role}>{role}</Tag>
						))}
					</h5>
				</motion.li>
			</ul>
		</$Profile>
	) : null
}