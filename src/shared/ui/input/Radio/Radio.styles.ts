import styled from "styled-components"

export const RadioWrapper = styled.div`
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

	& > .radio-wrapper {
		display: inline-flex;
		transition: background 0.3s ease-in-out;
		padding: 8px;
		border-radius: 50%;
		cursor: pointer;

		&:hover {
			& > .wrapper .unchecked {
				border-color: ${({ theme }) => theme.ui.color.default_60};
			}
		}

		& > .wrapper {
			position: relative;
			display: inline-flex;

			& > .checked {
				position: absolute;
				left: 0;
				top: 0;
				opacity: 0;
				width: 100%;
				height: 100%;
				display: inline-block;
				visibility: hidden;
				border-style: solid;
				border-width: 2px;
				border-radius: 50%;

				&::after {
					display: inline-block;
					content: "";
					position: absolute;
					transform: translate(-50%, -50%);
					top: 50%;
					left: 50%;
					width: 80%;
					height: 80%;
					border-radius: 50%;
				}
			}

			& > .unchecked {
				display: inline-block;
				opacity: 1;
				width: 100%;
				height: 100%;
				visibility: visible;
				border-radius: 50%;
				border: 2px solid ${({ theme }) => theme.ui.color.default_50};
			}

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
				visibility: hidden;
			}

			& > .unchecked-icon {
				opacity: 1;
				width: 100%;
				height: 100%;
				position: absolute;
				left: 0;
				top: 0;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				visibility: visible;
			}

			& > .radio-input {
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

	&.medium {
		& > .radio-wrapper > .wrapper {
			width: 22px;
			height: 22px;

			& > .checked-icon,
			& > .unchecked-icon {
				font-size: 22px;
			}
		}
	}

	&.small {
		& > .radio-wrapper > .wrapper {
			width: 16px;
			height: 16px;

			& > .checked-icon,
			& > .unchecked-icon {
				font-size: 16px;
			}
		}
	}

	&.large {
		& > .radio-wrapper > .wrapper {
			width: 28px;
			height: 28px;

			& > .checked-icon,
			& > .unchecked-icon {
				font-size: 28px;
			}
		}
	}

	&.primary {
		& > .radio-wrapper {
			&:hover {
				background: ${({ theme }) => theme.ui.color.primary_60}26;

				& > .wrapper > .checked {
					border-color: ${({ theme }) => theme.ui.color.primary_60};

					&::after {
						background: ${({ theme }) => theme.ui.color.primary_60};
					}
				}
			}

			& > .wrapper > .checked {
				border-color: ${({ theme }) => theme.ui.color.primary_50};

				&::after {
					background: ${({ theme }) => theme.ui.color.primary_50};
				}
			}
		}
	}

	&.secondary {
		& > .radio-wrapper {
			&:hover {
				background: ${({ theme }) => theme.ui.color.secondary_60}26;

				& > .wrapper > .checked {
					border-color: ${({ theme }) => theme.ui.color.secondary_60};

					&::after {
						background: ${({ theme }) => theme.ui.color.secondary_60};
					}
				}
			}

			& > .wrapper > .checked {
				border-color: ${({ theme }) => theme.ui.color.secondary_50};

				&::after {
					background: ${({ theme }) => theme.ui.color.secondary_50};
				}
			}
		}
	}

	&.tertiary {
		& > .radio-wrapper {
			&:hover {
				background: ${({ theme }) => theme.ui.color.tertiary_60}26;

				& > .wrapper > .checked {
					border-color: ${({ theme }) => theme.ui.color.tertiary_60};

					&::after {
						background: ${({ theme }) => theme.ui.color.tertiary_60};
					}
				}
			}

			& > .wrapper > .checked {
				border-color: ${({ theme }) => theme.ui.color.tertiary_50};

				&::after {
					background: ${({ theme }) => theme.ui.color.tertiary_50};
				}
			}
		}
	}

	&.quaternary {
		& > .radio-wrapper {
			&:hover {
				background: ${({ theme }) => theme.ui.color.quaternary_60}26;

				& > .wrapper > .checked {
					border-color: ${({ theme }) => theme.ui.color.quaternary_60};

					&::after {
						background: ${({ theme }) => theme.ui.color.quaternary_60};
					}
				}
			}

			& > .wrapper > .checked {
				border-color: ${({ theme }) => theme.ui.color.quaternary_50};

				&::after {
					background: ${({ theme }) => theme.ui.color.quaternary_50};
				}
			}
		}
	}

	&.success {
		& > .radio-wrapper {
			&:hover {
				background: ${({ theme }) => theme.ui.color.success_60}26;

				& > .wrapper > .checked {
					border-color: ${({ theme }) => theme.ui.color.success_60};

					&::after {
						background: ${({ theme }) => theme.ui.color.success_60};
					}
				}
			}

			& > .wrapper > .checked {
				border-color: ${({ theme }) => theme.ui.color.success_50};

				&::after {
					background: ${({ theme }) => theme.ui.color.success_50};
				}
			}
		}

		& > .label {
			color: ${({ theme }) => theme.ui.color.success_50};
		}
	}

	&.danger {
		& > .radio-wrapper {
			&:hover {
				background: ${({ theme }) => theme.ui.color.danger_60}26;

				& > .wrapper > .checked {
					border-color: ${({ theme }) => theme.ui.color.danger_60};

					&::after {
						background: ${({ theme }) => theme.ui.color.danger_60};
					}
				}
			}

			& > .wrapper > .checked {
				border-color: ${({ theme }) => theme.ui.color.danger_50};

				&::after {
					background: ${({ theme }) => theme.ui.color.danger_50};
				}
			}
		}

		& > .label {
			color: ${({ theme }) => theme.ui.color.danger_50};
		}
	}

	&.warning {
		& > .radio-wrapper {
			&:hover {
				background: ${({ theme }) => theme.ui.color.warning_60}26;

				& > .wrapper > .checked {
					border-color: ${({ theme }) => theme.ui.color.warning_60};

					&::after {
						background: ${({ theme }) => theme.ui.color.warning_60};
					}
				}
			}

			& > .wrapper > .checked {
				border-color: ${({ theme }) => theme.ui.color.warning_50};

				&::after {
					background: ${({ theme }) => theme.ui.color.warning_50};
				}
			}
		}

		& > .label {
			color: ${({ theme }) => theme.ui.color.warning_50};
		}
	}
`
