import { HTMLMotionProps, motion } from "framer-motion"
import Link from "next/link"
import { FC, ReactNode } from "react"

import { ScaleScrollable } from "@/shared/animation"
import { IDevice } from "@/shared/api"
import { Circle } from "@/shared/ui"

import { DeviceCardImageSlider } from "../DeviceCardImageSlider"

import { $DeviceCard } from "./DeviceCard.styles"

interface DeviceCardProps extends HTMLMotionProps<"div"> {
	device: IDevice
	cart: ReactNode
	favorite: ReactNode
}

export const DeviceCard: FC<DeviceCardProps> = ({ device, cart, favorite, ...props }) => {
	const animationDelay = Math.floor(Math.random() * 10)

	return (
		<$DeviceCard as={ScaleScrollable} {...props}>
			<Link href={{ pathname: `/category/device/${device.id}` }}>
				<DeviceCardImageSlider name={device.name} images={device.images} />
			</Link>
			<div className="card-body">
				<Link href={{ pathname: `/category/device/${device.id}` }}>
					<h5 className="h5">{device.name}</h5>
				</Link>
				<div className="circle-list">
					<Circle
						as={motion.div}
						diameter="15px"
						className="circle"
						animate={{ y: [0, -20, 0] }}
						transition={{ delay: animationDelay, repeat: Infinity, repeatDelay: 10, duration: 0.4 }}
					/>
					<Circle
						as={motion.div}
						diameter="15px"
						className="circle"
						color="secondary"
						animate={{ y: [0, -20, 0] }}
						transition={{ delay: animationDelay + 0.1, repeat: Infinity, repeatDelay: 10, duration: 0.4 }}
					/>
					<Circle
						as={motion.div}
						diameter="15px"
						className="circle"
						color="tertiary"
						animate={{ y: [0, -20, 0] }}
						transition={{ delay: animationDelay + 0.2, repeat: Infinity, repeatDelay: 10, duration: 0.4 }}
					/>
				</div>
			</div>
			<div className="card-footer">
				<span className="card-price h6">{device.price} руб</span>
				<div className="card-cart">{cart}</div>
			</div>
			<div className="card-favorite">{favorite}</div>
		</$DeviceCard>
	)
}
