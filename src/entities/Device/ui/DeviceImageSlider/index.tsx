import { motion } from "framer-motion"
import Image from "next/image"
import { FC, useState } from "react"
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"
import Carousel from "react-slick"

import { deviceImageQuerySelector, useDeviceQuery } from "../../api"

import { $DeviceImageSlider } from "./DeviceImageSlider.styles"

interface DeviceImageSliderProps {
	id: string
	alt?: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SampleNextArrow(props: { className?: any; style?: any; onClick?: any }) {
	const { className, style, onClick } = props
	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			<SlArrowRight />
		</div>
	)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SamplePrevArrow(props: { className?: any; style?: any; onClick?: any }) {
	const { className, style, onClick } = props
	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			<SlArrowLeft />
		</div>
	)
}

export const DeviceImageSlider: FC<DeviceImageSliderProps> = ({ id, alt = "" }) => {
	const { data } = useDeviceQuery(id, deviceImageQuerySelector)
	const [currentShow, setCurrentShow] = useState(1)

	return (
		<$DeviceImageSlider>
			{data && (
				<Carousel
					nextArrow={<SampleNextArrow />}
					prevArrow={<SamplePrevArrow />}
					customPaging={i => {
						return (
							<span>
								<Image src={data[i]} alt={alt} width={130} height={100} />
								{currentShow - 1 === i && (
									<motion.span className="device-image-underline" layoutId="device-image-underline"></motion.span>
								)}
							</span>
						)
					}}
					beforeChange={(cur: number, next: number) => setCurrentShow(next + 1)}
					dots
				>
					{data.map(image => (
						<Image
							priority
							draggable={false}
							key={image}
							src={image}
							alt={alt}
							width={750}
							height={650}
							className="img"
						/>
					))}
				</Carousel>
			)}
		</$DeviceImageSlider>
	)
}
