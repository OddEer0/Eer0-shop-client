import styled from "styled-components"

export const $DeviceCardImageCarousel = styled.div`
	position: relative;
	user-select: none;

	.img {
		width: 100%;
		height: 310px;
		object-fit: cover;
	}

	.carousel-image-count {
		color: ${({ theme }) => theme.ui.color.default_50};
		position: absolute;
		right: 32px;
		transform: translateY(-50%);
		bottom: -2px;
		cursor: default;
	}

	.slick-arrow {
		font-size: 20px;
		color: ${({ theme }) => theme.ui.color.default_50};

		&.slick-next {
			right: 10px;
			bottom: 0px;
			top: auto;

			&::before {
				display: none;
			}
		}

		&.slick-prev {
			right: 64px;
			left: auto;
			bottom: 0px;
			top: auto;
			z-index: 1;

			&::before {
				display: none;
			}
		}
	}
`
