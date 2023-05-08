import { LayoutGroup, motion } from "framer-motion"
import Image from "next/image"
import { FC, HTMLAttributes } from "react"

import { BUY_METHOD, buyMethodSelector, useBuyDeviceStore } from "@/entities/BookingDevice"

import { yToDownAnimation } from "@/shared/animation"
import { cn } from "@/shared/helpers"

import { $BuyMethod } from "./BuyMethod.styles"

type BuyMethodProps = HTMLAttributes<HTMLDivElement>

export const BuyMethod: FC<BuyMethodProps> = ({ ...props }) => {
	const { setMethod, method: methodName } = useBuyDeviceStore(buyMethodSelector)
	const clickHandler = (name: string) => {
		setMethod(name)
	}

	return (
		<$BuyMethod {...props}>
			<h5 className="h4 title">Способ оплаты {methodName || "Не выбран"}</h5>
			<LayoutGroup>
				<ul className="method__list">
					{BUY_METHOD.map((method, i) => (
						<motion.li
							className={cn("method", methodName === method.name ? "active" : "")}
							key={method.id}
							custom={i}
							variants={yToDownAnimation}
							initial="hidden"
							animate="show"
							onClick={() => clickHandler(method.name)}
						>
							<Image draggable={false} src={method.image} alt={method.name} width={150} height={100} priority />
							{methodName === method.name && (
								<motion.span layoutId="method-underline" className="underline"></motion.span>
							)}
						</motion.li>
					))}
				</ul>
			</LayoutGroup>
		</$BuyMethod>
	)
}
