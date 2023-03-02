import styled from "styled-components"

export const DividerWrapper = styled.div`
	display: flex;
	align-items: center;
	height: 100%;

	& > .left-divider {
		background: ${({ theme }) => theme.ui.color.default_50};
	}

	& > .right-divider {
		background: ${({ theme }) => theme.ui.color.default_50};
	}

	&.horizontal {
		& > .right-divider {
			height: 2px;
		}

		& > .left-divider {
			height: 2px;
		}

		&.center {
			& > .left-divider {
				width: 100%;
			}

			& > .right-divider {
				width: 100%;
			}
		}

		&.left {
			& > .left-divider {
				width: 10%;
			}

			& > .right-divider {
				width: 100%;
			}
		}

		&.right {
			& > .left-divider {
				width: 100%;
			}

			& > .right-divider {
				width: 10%;
			}
		}
	}

	&.vertical {
		flex-direction: column;

		& > .right-divider {
			width: 2px;
		}

		& > .left-divider {
			width: 2px;
		}

		&.center {
			& > .left-divider {
				height: 100%;
			}

			& > .right-divider {
				height: 100%;
			}
		}

		&.left {
			& > .left-divider {
				height: 10%;
			}

			& > .right-divider {
				height: 100%;
			}
		}

		&.right {
			& > .left-divider {
				height: 100%;
			}

			& > .right-divider {
				height: 10%;
			}
		}
	}
`
