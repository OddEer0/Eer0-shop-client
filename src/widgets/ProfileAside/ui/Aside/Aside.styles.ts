import styled from "styled-components"

import { Container } from "@/shared/ui"

export const $ProfileAside = styled(Container)`
	display: flex;
	width: 100%;

	& > aside {
		background: ${({ theme }) => theme.base.bg.primary_40};
		box-shadow: ${({ theme }) => theme.base.boxShadow.primary};
		padding: 16px;
		border-radius: 15px;
		width: 320px;
		height: calc(100vh - 125px);
		position: sticky;
		top: 125px;
		max-height: 780px;
	}

	& > .body {
		flex: 1;
	}
`
