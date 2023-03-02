import Head from "next/head"
import { FC } from "react"
import styled from "styled-components"

import { Portal } from "@/shared/ui"

import { MainLayout } from "@/widgets/MainLayout"

const Wrapper = styled.div`
	height: 2000px;
`

export const HomeView: FC = () => {
	return (
		<MainLayout>
			<Head>
				<title>Create Next App</title>
			</Head>
			<Wrapper></Wrapper>
			<Portal>
				<div className="">sdsd</div>
			</Portal>
		</MainLayout>
	)
}
