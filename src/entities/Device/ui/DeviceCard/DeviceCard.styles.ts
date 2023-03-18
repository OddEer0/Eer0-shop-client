import styled from "styled-components"

export const $DeviceCard = styled.div`
	background: ${({ theme }) => theme.base.bg.primary_40};
	border-radius: 15px;
	width: 320px;
	height: 520px;
	overflow: hidden;
	display: inline-flex;
	flex-direction: column;
	box-shadow: ${({ theme }) => theme.base.boxShadow.primary};
	position: relative;

	.card-body {
		flex: 1;
		padding: 16px;

		h5 {
			margin-top: 20px;
		}

		.circle-list {
			margin-top: 30px;
			display: flex;

			.circle:not(:last-child) {
				margin-right: 5px;
			}
		}
	}
	.card-footer {
		padding: 0 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 8px;
	}

	.card-favorite {
		position: absolute;
		right: 10px;
		top: 10px;
	}
`