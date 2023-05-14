import { FC } from "react"

import { Container, Meta } from "@/shared/ui"

import { FirstSection } from "./sections/first"
import { SecondSection } from "./sections/second"
import { ThirdSection } from "./sections/third"

const HomeView: FC = () => {
	return (
		<>
			<Meta title="Eer0 Shop | Главная" />
			<Container>
				<FirstSection />
				<SecondSection />
				<ThirdSection />
			</Container>
		</>
	)
}

export default HomeView
