import styled from "styled-components"

export const CheckboxWrapper = styled.div`
	display: inline-flex;
	align-items: center;

	&.right {
		& > .label {
			margin-left: 5px;
		}
	}

	&.left {
		flex-direction: row-reverse;
		& > .label {
			margin-right: 5px;
		}
	}

	&.top {
		flex-direction: column-reverse;
	}

	&.bottom {
		flex-direction: column;
	}

	&.medium {
		& > .checkbox-wrapper > .wrapper {
			width: 22px;
			height: 22px;

			& > .checked-icon,
			& > .unchecked-icon {
				font-size: 22px;
			}
		}
	}

	&.small {
		& > .checkbox-wrapper > .wrapper {
			width: 16px;
			height: 16px;

			& > .checked-icon,
			& > .unchecked-icon {
				font-size: 16px;
			}
		}
	}

	&.large {
		& > .checkbox-wrapper > .wrapper {
			width: 28px;
			height: 28px;

			& > .checked-icon,
			& > .unchecked-icon {
				font-size: 28px;
			}
		}
	}

	& > .checkbox-wrapper {
		display: inline-flex;
		padding: 10px;
		border-radius: 50%;
		cursor: pointer;
		transition: background 0.3s ease-in-out;

		&:hover {
			& > .wrapper .unchecked {
				border-color: ${({ theme }) => theme.ui.color.default_60};
			}
		}

		& > .wrapper {
			position: relative;
			display: inline-flex;

			& > .checked-icon {
				opacity: 0;
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}

			& > .unchecked-icon {
				opacity: 1;
				width: 100%;
				height: 100%;
				display: inline-flex;
				align-items: center;
				justify-content: center;
			}

			& > .checked {
				display: flex;
				align-items: center;
				justify-content: center;
				padding: 2px;
				opacity: 0;
				visibility: hidden;
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				border-radius: 5px;
				top: 0;
			}

			& > .unchecked {
				padding: 1px;
				opacity: 1;
				visibility: visible;
				border-radius: 5px;
				width: 100%;
				height: 100%;
				border: 2px solid ${({ theme }) => theme.ui.color.default_50};
			}

			& > .checkbox-input {
				opacity: 0;
				visibility: hidden;
				position: absolute;

				&:checked {
					& ~ .checked {
						opacity: 1;
						visibility: visible;
					}

					& ~ .unchecked {
						opacity: 0;
						visibility: hidden;
					}

					& ~ .checked-icon {
						opacity: 1;
						visibility: visible;
					}

					& ~ .unchecked-icon {
						opacity: 0;
						visibility: hidden;
					}
				}
			}
		}
	}

	&.primary {
		& > .checkbox-wrapper {
			&:hover {
				background: ${({ theme }) => theme.ui.color.primary_60}26;

				& > .wrapper > .checked {
					background: ${({ theme }) => theme.ui.color.primary_60};
				}
			}

			&:active {
				background: ${({ theme }) => theme.ui.color.primary_70}3d;
			}

			& > .wrapper > .checked {
				background: ${({ theme }) => theme.ui.color.primary_50};
				color: ${({ theme }) => theme.ui.text.primary_50};
			}
		}
	}

	&.secondary {
		& > .checkbox-wrapper {
			&:hover {
				background: ${({ theme }) => theme.ui.color.secondary_60}26;

				& > .wrapper > .checked {
					background: ${({ theme }) => theme.ui.color.secondary_60};
				}
			}

			&:active {
				background: ${({ theme }) => theme.ui.color.secondary_70}3d;
			}

			& > .wrapper > .checked {
				background: ${({ theme }) => theme.ui.color.secondary_50};
				color: ${({ theme }) => theme.ui.text.secondary_50};
			}
		}
	}

	&.tertiary {
		& > .checkbox-wrapper {
			&:hover {
				background: ${({ theme }) => theme.ui.color.tertiary_60}26;

				& > .wrapper > .checked {
					background: ${({ theme }) => theme.ui.color.tertiary_60};
				}
			}

			&:active {
				background: ${({ theme }) => theme.ui.color.tertiary_70}3d;
			}

			& > .wrapper > .checked {
				background: ${({ theme }) => theme.ui.color.tertiary_50};
				color: ${({ theme }) => theme.ui.text.tertiary_50};
			}
		}
	}

	&.quaternary {
		& > .checkbox-wrapper {
			&:hover {
				background: ${({ theme }) => theme.ui.color.quaternary_60}26;

				& > .wrapper > .checked {
					background: ${({ theme }) => theme.ui.color.quaternary_60};
				}
			}

			&:active {
				background: ${({ theme }) => theme.ui.color.quaternary_70}3d;
			}

			& > .wrapper > .checked {
				background: ${({ theme }) => theme.ui.color.quaternary_50};
				color: ${({ theme }) => theme.ui.text.quaternary_50};
			}
		}
	}

	&.success {
		& > .checkbox-wrapper {
			&:hover {
				background: ${({ theme }) => theme.ui.color.success_60}26;

				& > .wrapper > .checked {
					background: ${({ theme }) => theme.ui.color.success_60};
				}
			}

			&:active {
				background: ${({ theme }) => theme.ui.color.success_70}3d;
			}

			& > .wrapper > .checked {
				background: ${({ theme }) => theme.ui.color.success_50};
				color: ${({ theme }) => theme.ui.text.success_50};
			}
		}

		& > .label {
			color: ${({ theme }) => theme.ui.color.success_50};
		}
	}

	&.danger {
		& > .checkbox-wrapper {
			&:hover {
				background: ${({ theme }) => theme.ui.color.danger_60}26;

				& > .wrapper > .checked {
					background: ${({ theme }) => theme.ui.color.danger_60};
				}
			}

			&:active {
				background: ${({ theme }) => theme.ui.color.danger_70}3d;
			}

			& > .wrapper > .checked {
				background: ${({ theme }) => theme.ui.color.danger_50};
				color: ${({ theme }) => theme.ui.text.danger_50};
			}
		}

		& > .label {
			color: ${({ theme }) => theme.ui.color.danger_50};
		}
	}

	&.warning {
		& > .checkbox-wrapper {
			&:hover {
				background: ${({ theme }) => theme.ui.color.warning_60}26;

				& > .wrapper > .checked {
					background: ${({ theme }) => theme.ui.color.warning_60};
				}
			}

			&:active {
				background: ${({ theme }) => theme.ui.color.warning_70}3d;
			}

			& > .wrapper > .checked {
				background: ${({ theme }) => theme.ui.color.warning_50};
				color: ${({ theme }) => theme.ui.text.warning_50};
			}
		}

		& > .label {
			color: ${({ theme }) => theme.ui.color.warning_50};
		}
	}
`
