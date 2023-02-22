import styled from "styled-components"

import { Container } from "@/shared/ui"

export const $Layout = styled(Container)`
	height: 100vh;
	display: flex;
	justify-content: space-between;
`

export const $Section = styled.section`
	flex: 1;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const $Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
