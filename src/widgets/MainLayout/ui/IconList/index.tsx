import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
import { FC } from "react"
import { BiCartAlt, BiHeart } from "react-icons/bi"
import { toast } from "react-toastify"

import { CartBadge } from "@/entities/Cart"
import { FavoriteBadge } from "@/entities/Favorite"
import { useProfileQuery, userIdQuerySelector } from "@/entities/User"

import { UNAUTHORIZED } from "@/shared/constants"

import { $IconList } from "./IconList.styles"

const animation = {
	initial: {
		y: -60,
		opacity: 0,
		scale: 0.3
	},
	animate: (i: number) => ({
		y: 0,
		scale: 1,
		opacity: 1,
		transition: {
			delay: 0.05 * i
		}
	})
}

export const IconList: FC = () => {
	const { data } = useProfileQuery(userIdQuerySelector)
	const router = useRouter()

	const cartHandler = () => {
		if (data) {
			router.push("/cart")
		} else {
			toast.error(UNAUTHORIZED)
		}
	}

	return (
		<$IconList>
			<motion.li className="icon" variants={animation} initial="initial" animate="animate" custom={1}>
				<Link href="/favorite">
					<FavoriteBadge>
						<BiHeart />
					</FavoriteBadge>
				</Link>
			</motion.li>
			<motion.li
				onClick={cartHandler}
				className="icon"
				variants={animation}
				initial="initial"
				animate="animate"
				custom={2}
			>
				<CartBadge>
					<BiCartAlt />
				</CartBadge>
			</motion.li>
		</$IconList>
	)
}
