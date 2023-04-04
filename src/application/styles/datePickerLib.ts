import { css } from "styled-components"

export const datePickerLibStyles = css`
	.react-datepicker {
		&-popper {
			color: ${({ theme }) => theme.base.text.primary_40};

			.react-datepicker {
				border: none;
				box-shadow: ${({ theme }) => theme.ui.boxShadow.primary};
				background: ${({ theme }) => theme.ui.bg.primary_40};
			}
		}

		&__day {
			color: ${({ theme }) => theme.base.text.primary_50};
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${({ theme }) => theme.ui.color.primary_60};
				color: ${({ theme }) => theme.ui.text.primary_50};
			}

			&--selected {
				background: ${({ theme }) => theme.ui.color.primary_50};
				color: ${({ theme }) => theme.ui.text.primary_50};

				&:hover {
					background: ${({ theme }) => theme.ui.color.primary_60};
					color: ${({ theme }) => theme.ui.text.primary_50};
				}
			}

			&--outside-month {
				color: ${({ theme }) => theme.base.text.primary_50}92;

				&:hover {
					color: ${({ theme }) => theme.ui.text.primary_50};
				}
			}
		}

		&__header {
			background: ${({ theme }) => theme.ui.bg.primary_40};
			color: ${({ theme }) => theme.base.text.primary_50};
		}

		&__current-month {
			color: inherit;
		}

		&__day-name {
			color: inherit;
		}

		&__triangle {
			display: none;
		}

		&__navigation-icon {
			&::before {
				border-color: ${({ theme }) => theme.base.text.primary_50};
				transition: all 0.3s ease-in-out;

				&:hover {
					border-color: ${({ theme }) => theme.base.text.primary_50}86;
				}
			}
		}
	}
`
