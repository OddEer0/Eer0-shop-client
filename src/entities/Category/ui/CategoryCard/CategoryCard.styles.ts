import styled from "styled-components"

const DIFFERENCE = 76

export const $CategoryCard = styled.div`
	flex-direction: column;
	align-items: center;
	cursor: pointer;
	display: inline-flex;

	.img-wrapper {
		margin-bottom: -${DIFFERENCE}px;
		position: relative;
		z-index: 2;

		img {
			width: 236px;
			height: 188px;
			border-radius: 20px;
			transition: all 0.3s ease-in-out;
		}
	}

	.card-body {
		padding-top: ${DIFFERENCE}px;
		width: 260px;
		height: 166px;
		background: ${({ theme }) => theme.base.bg.primary_40};
		box-shadow: ${({ theme }) => theme.base.boxShadow.primary};
		border-radius: 20px;
		display: flex;
		align-items: center;
		justify-content: center;

		.title {
			transition: all 0.35s ease-in-out;
			transition-delay: 0.1s;
			position: relative;
			display: inline-block;
		}
	}

	&:hover {
		.img-wrapper img {
			transform: translateY(-10px);
		}

		.title {
			transform: translateY(-10px);
		}
	}
`
