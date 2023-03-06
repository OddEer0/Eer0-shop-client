import styled from "styled-components"

export const $IconList = styled.ul`
	display: inline-block;

	.icon-list__icon {
		display: inline-block;
		font-size: 32px;
		width: 32px;
		height: 32px;
		cursor: pointer;

		&:not(:last-child) {
			margin-right: 2vw;
		}
	}
`
