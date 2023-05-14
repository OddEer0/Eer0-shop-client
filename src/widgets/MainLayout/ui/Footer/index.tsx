import Link from "next/link"
import { FC } from "react"

import { Container, List } from "@/shared/ui"

import { FOOTER_FIRST_LIST, FOOTER_SECOND_LIST } from "../../constants"

import { $Footer } from "./Footer.styles"

export const Footer: FC = () => {
	return (
		<$Footer>
			<Container className="container">
				<List
					items={FOOTER_FIRST_LIST}
					renderItem={item => (
						<li key={item.id}>
							<Link href={item.href}>{item.title}</Link>
						</li>
					)}
				/>
				<List
					items={FOOTER_SECOND_LIST}
					renderItem={item => (
						<li key={item.id}>
							<Link href={item.href}>{item.title}</Link>
						</li>
					)}
				/>
			</Container>
		</$Footer>
	)
}
