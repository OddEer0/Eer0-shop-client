import styled from "styled-components"

export const $HomeSlider = styled.div`
	width: 100%;
	max-width: 1420px;
	height: 300px;

	img {
		width: 100%;
		max-width: 1420px;
		height: 300px;

		object-fit: cover;
	}

	.slick-arrow {
		font-size: 20px;
		color: ${({ theme }) => theme.ui.color.default_50};

		&.slick-next {
			right: 10px;

			&::before {
				display: none;
			}
		}

		&.slick-prev {
			left: 10px;
			z-index: 1;

			&::before {
				display: none;
			}
		}
	}
`
