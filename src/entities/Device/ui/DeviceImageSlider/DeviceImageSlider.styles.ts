import styled from "styled-components"

export const $DeviceImageSlider = styled.div`
	width: 70vw;
	max-width: 750px;
	height: 650px;

	.img {
		max-width: 750px;
		width: 100%;
		height: 100%;
		height: 600px;
	}

	.slick-arrow {
		font-size: 20px;
		color: ${({ theme }) => theme.ui.color.default_50};

		&.slick-next {
			right: 10px;
			bottom: 50%;
			top: auto;

			&::before {
				display: none;
			}
		}

		&.slick-prev {
			left: 10px;
			bottom: 50%;
			top: auto;
			z-index: 1;

			&::before {
				display: none;
			}
		}
	}

	.slick-dots {
		bottom: -115px;
		height: 100px;

		li {
			height: 100%;
			width: 130px;
			transition: transform 0.3s ease-in-out;
			position: relative;

			&.slick-active {
				.device-image-underline {
					position: absolute;
					height: 4px;
					display: inline-block;
					width: 100%;
					left: 0;
					bottom: -8px;
					background: ${({ theme }) => theme.ui.color.primary_50};
					border-radius: 5px;
				}
			}

			img {
				height: 100%;
				width: 130px;
			}
		}
	}
`
