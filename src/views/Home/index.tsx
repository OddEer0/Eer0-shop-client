import { FC } from "react"
import styled from "styled-components"

import { Meta } from "@/shared/ui"

import { MainLayout } from "@/widgets/MainLayout"

const Wrapper = styled.div`
	height: 200px;
`

const HomeView: FC = () => {
	return (
		<MainLayout>
			<Meta title="Eer0 Shop | Home" />
			<Wrapper />
		</MainLayout>
	)
}

export default HomeView
