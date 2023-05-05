import styled from "styled-components"

import { Container } from "@/shared/ui"

export const $GoCheckoutView = styled(Container)`
	display: flex;
	gap: 30px;
	justify-content: space-between;
	margin-top: 35px;

	& > .content {
		flex: 1;

		& > .h2 {
			margin-top: 50px;
		}

		& > .list {
			margin-top: 35px;
		}
	}

	& > .aside {
	}

	.go-checkout {
		&__method {
		}

		&__price {
			padding: 35px;
			min-width: 320px;
			border-radius: 20px;
			background: ${({ theme }) => theme.base.bg.primary_40};
		}
	}
`
