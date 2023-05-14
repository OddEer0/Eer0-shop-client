import { motion } from "framer-motion"
import { FC } from "react"

import { yToDownAnimation } from "@/shared/animation"
import { Spinner } from "@/shared/ui"

import { useDeviceFullInfosQuery } from "../../api"

import { $DeviceFullInfo } from "./DeviceFullInfo.styles"

interface DeviceFullInfoProps {
	id: string
	className?: string
}

export const DeviceFullInfo: FC<DeviceFullInfoProps> = ({ id, className = "" }) => {
	const { data, isLoading, error } = useDeviceFullInfosQuery(id)

	if (error) {
		return <p>Произошла ошибка</p>
	}

	if (isLoading) {
		return <Spinner />
	}

	return (
		<$DeviceFullInfo className={className}>
			{data && data.length ? (
				<ul className="device-info-list">
					{data.map((info, i) => (
						<motion.li
							variants={yToDownAnimation}
							custom={i}
							animate="show"
							initial="hidden"
							className="info-row"
							key={info.id}
						>
							<h5 className="h6">{info.title}</h5>
							<p className="h6">{info.value}</p>
						</motion.li>
					))}
				</ul>
			) : (
				<p>Нет информаций</p>
			)}
		</$DeviceFullInfo>
	)
}
