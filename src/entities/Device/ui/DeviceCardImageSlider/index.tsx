/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image"
import { FC, useState } from "react"
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"
import Carousel from "react-slick"

import { $DeviceCardImageCarousel } from "./DeviceCardImageSlider.styles"

interface DeviceCardImageSliderProps {
	name?: string
	images: string[]
}

function SampleNextArrow(props: { className?: any; style?: any; onClick?: any }) {
	const { className, style, onClick } = props
	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			<SlArrowRight />
		</div>
	)
}

function SamplePrevArrow(props: { className?: any; style?: any; onClick?: any }) {
	const { className, style, onClick } = props
	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			<SlArrowLeft />
		</div>
	)
}

export const DeviceCardImageSlider: FC<DeviceCardImageSliderProps> = ({ images, name = "" }) => {
	const [currentShow, setCurrentShow] = useState(1)

	const settings = {
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		beforeChange: (cur: number, next: number) => setCurrentShow(next + 1)
	}
	return (
		<$DeviceCardImageCarousel>
			<Carousel {...settings}>
				{images.map(image => (
					<Image
						priority
						draggable={false}
						key={image}
						src={image}
						className="img"
						width={340}
						height={377}
						alt={name}
					/>
				))}
			</Carousel>
			{images.length > 1 && (
				<h6 className="carousel-image-count">
					{currentShow}/{images.length}
				</h6>
			)}
		</$DeviceCardImageCarousel>
	)
}
