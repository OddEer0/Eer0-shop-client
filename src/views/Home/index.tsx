import { FC } from "react"
import styled from "styled-components"

import { Container, Meta } from "@/shared/ui"

import { FirstSection } from "./sections/first"

const Wrapper = styled.div`
	height: 2000px;
`

const HomeView: FC = () => {
	return (
		<>
			<Meta title="Eer0 Shop | Главная" />
			<Container>
				<FirstSection />
				<Wrapper />
			</Container>
		</>
	)
}

export default HomeView
