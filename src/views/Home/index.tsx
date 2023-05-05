import { FC } from "react"
import styled from "styled-components"

import { Meta } from "@/shared/ui"

const Wrapper = styled.div`
	height: 2000px;
`

const HomeView: FC = () => {
	return (
		<>
			<Meta title="Eer0 Shop | Главная" />
			<Wrapper />
		</>
	)
}

export default HomeView
