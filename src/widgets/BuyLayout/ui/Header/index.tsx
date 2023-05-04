import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

import { Container } from "@/shared/ui"

import { $Header } from "./Header.styles"

export const Header: FC = () => {
	return (
		<$Header>
			<Container className="container">
				<Link href="/">
					<Image draggable={false} src="/images/logo.png" width={40} height={40} alt="" priority />
				</Link>
			</Container>
		</$Header>
	)
}
