import styled from "styled-components"

export const $NavList = styled.nav`
	flex: 1;
	ul {
		display: flex;

		li:not(:last-child) {
			margin-right: 2vw;
		}
	}
`
