import { motion } from "framer-motion"
import Image from "next/image"
import { FC, useState } from "react"
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"
import Carousel from "react-slick"

import { $DeviceImageSlider } from "./DeviceImageSlider.styles"

interface DeviceImageSliderProps {
	images: string[]
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

export const DeviceImageSlider: FC<DeviceImageSliderProps> = ({ images, alt = "" }) => {
	const [currentShow, setCurrentShow] = useState(1)

	return (
		<$DeviceImageSlider>
			<Carousel
				nextArrow={<SampleNextArrow />}
				prevArrow={<SamplePrevArrow />}
				customPaging={i => {
					return (
						<span>
							<Image src={images[i]} alt={alt} width={130} height={100} />
							{currentShow - 1 === i && (
								<motion.span className="device-image-underline" layoutId="device-image-underline"></motion.span>
							)}
						</span>
					)
				}}
				beforeChange={(cur: number, next: number) => setCurrentShow(next + 1)}
				dots
			>
				{images.map(image => (
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
		</$DeviceImageSlider>
	)
}
