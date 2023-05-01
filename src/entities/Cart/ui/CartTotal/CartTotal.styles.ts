import styled from "styled-components"

export const $CartTotal = styled.div`
	.text-content {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.text-color {
		background: ${({ theme }) => theme.ui.color.quaternary_50};
		padding: 5px 10px;
		border-radius: 15px;

		&.summary {
			background: ${({ theme }) => theme.ui.color.secondary_50};
		}
	}
`
