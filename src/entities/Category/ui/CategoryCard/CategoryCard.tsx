import { HTMLMotionProps, motion } from "framer-motion"
import Image from "next/image"
import { FC, ReactNode } from "react"

import { ScaleOpacityScrollable } from "@/shared/animation"
import { ICategory } from "@/shared/api"

import { $CategoryCard } from "./CategoryCard.styles"

interface CategoryCardProps extends HTMLMotionProps<"div"> {
	data: ICategory
	like?: ReactNode
}

export const CategoryCard: FC<CategoryCardProps> = ({ data, ...props }) => {
	return (
		<$CategoryCard as={ScaleOpacityScrollable} {...props}>
			<motion.div initial={{ y: -70 }} animate={{ y: 0 }} transition={{ duration: 0.4 }} className="img-wrapper">
				<Image
					style={{ width: "236px", height: "188px" }}
					priority
					draggable={false}
					width={236}
					height={188}
					src={data.img}
					alt={data.name}
				/>
			</motion.div>
			<motion.div
				initial={{ y: -40, opacity: 0.4 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.25 }}
				className="card-body"
			>
				<h2 className="title">{data.name}</h2>
			</motion.div>
		</$CategoryCard>
	)
}
