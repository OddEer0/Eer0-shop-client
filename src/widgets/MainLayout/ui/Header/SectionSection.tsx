import { useRouter } from "next/router"
import { FC } from "react"
import { RiApps2Line } from "react-icons/ri"

import { Button, Container } from "@/shared/ui"

import { IconList } from "../IconList"

import { $SecondSection } from "./Header.styles"

export const SecondSection: FC = () => {
	const router = useRouter()

	return (
		<$SecondSection>
			<Container className="container">
				<div className=""></div>
				<div className="right-wrapper">
					<Button onClick={() => router.push("/category")} size="small" variant="contained">
						<RiApps2Line className="icon" />
						Категорий
					</Button>
					<IconList />
				</div>
			</Container>
		</$SecondSection>
	)
}
