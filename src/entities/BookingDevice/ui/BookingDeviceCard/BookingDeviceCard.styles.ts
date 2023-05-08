import styled from "styled-components"

export const $BookingDeviceCard = styled.div`
	padding: 10px 16px;
	border-radius: 15px;
	display: flex;
	background: ${({ theme }) => theme.base.bg.primary_40};

	img {
		object-fit: cover;
	}

	.booking-device-card {
		&__content {
			margin-left: 15px;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			flex: 1;

			p {
				color: ${({ theme }) => theme.base.text.default_50};
			}
		}

		&__feature {
			display: flex;
			flex-direction: column;
			margin-left: 15px;
			align-items: center;
			justify-content: space-around;
		}
	}
`
