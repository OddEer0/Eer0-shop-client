import styled from "styled-components"

export const $FilterDeviceAside = styled.aside`
	position: sticky;
	border-radius: 10px;
	top: 0;
	max-height: 1080px;
	width: 100%;
	max-width: 340px;
	height: calc(95vh - 110px);
	padding: 15px 20px;
	background: ${({ theme }) => theme.base.bg.primary_40};
	overflow-y: auto;

	.h2 {
		text-align: center;
		margin: 15px 0;
	}

	.filter-accordion {
		width: 100%;

		h4 {
			font-size: 20px;
			font-weight: 700;
		}
	}

	.filter-summary {
		padding: 15px 0;
		&:not(:first-child) {
			margin-top: 12px;
		}

		.accordion-summary-header {
			padding: 0;
		}

		.accordion-summary-body {
			padding: 0;
		}
	}
`
