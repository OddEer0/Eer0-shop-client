/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image"
import { FC } from "react"
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"
import Carousel from "react-slick"

import { Skeleton } from "@/shared/ui"

import { useHomeSliderQuery } from "../../api"

import { $HomeSlider } from "./HomeSlider.styles"

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

export const HomeSlider: FC = () => {
	const { data, isLoading } = useHomeSliderQuery()

	const settings = {
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />
	}

	return (
		<$HomeSlider>
			{isLoading ? (
				<Skeleton width="100%" height="100%" />
			) : data && data.length ? (
				<Carousel {...settings}>
					{data.map(home => (
						<Image key={home.id} src={home.image} alt={home.title} width={1980} height={1080} priority />
					))}
				</Carousel>
			) : (
				<div className=""></div>
			)}
		</$HomeSlider>
	)
}
