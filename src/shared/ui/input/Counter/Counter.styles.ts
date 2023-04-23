import styled from "styled-components"

export const $Counter = styled.div`
	display: inline-flex;
	width: 100%;
	max-width: 150px;
	height: 30px;
	border-radius: 10px;
	overflow: hidden;

	.counter-btn {
		height: 100%;
		width: 25%;
		background: ${({ theme }) => theme.ui.color.primary_50};
		color: ${({ theme }) => theme.ui.text.primary_50};
	}

	.counter-input {
		width: 50%;
		height: 100%;
		background-color: transparent;
		text-align: center;
	}
`
