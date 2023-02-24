import styled from "styled-components"

export const TextFieldContainer = styled.div`
	display: inline-block;

	input {
		transition: all 0.3s ease-in-out;

		&:disabled {
			border-color: ${({ theme }) => theme.ui.color.default_50};
			opacity: 0.6;
		}
	}

	&.small {
		input {
			padding: 6px 10px;
			border-radius: 36px;
			font-size: 18px;
		}
	}

	&.medium {
		input {
			padding: 8px 12px;
			border-radius: 40px;
			font-size: 20px;
		}
	}

	&.large {
		input {
			padding: 10px 14px;
			border-radius: 48px;
			font-size: 22px;
		}
	}

	.eer0-ui-textfield {
		&__start-icon {
			user-select: none;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: 10px;
			font-size: 20px;
		}
		&__end-icon {
			user-select: none;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			right: 10px;
			font-size: 20px;
		}
		&__end-icon-default {
			user-select: none;
			cursor: pointer;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			right: 10px;
			font-size: 20px;
		}
		&__start-icon ~ .eer0-ui-textfield__input {
			padding-left: 32px;
		}
		&__end-icon ~ .eer0-ui-textfield__input {
			padding-right: 32px;
		}
		&__end-icon-default ~ .eer0-ui-textfield__input {
			padding-right: 32px;
		}
		&__label {
			font-size: 16px;
			margin-left: 10px;
			margin-bottom: 6px;
			cursor: pointer;
			user-select: none;
		}

		&__sub-text {
			font-size: 16px;
			margin-left: 10px;
			margin-top: 6px;
		}
	}

	&.outlined {
		&.primary {
			.eer0-ui-textfield {
				&__label {
					color: ${({ theme }) => theme.ui.text.default_50};
				}
				&__sub-text {
					color: ${({ theme }) => theme.ui.text.default_50};
				}
				&__wrapper {
					position: relative;
					display: inline-block;
				}
				&__input {
					background: transparent;
					color: inherit;
					border: 2px solid ${({ theme }) => theme.ui.color.default_50};

					&:hover {
						border-color: ${({ theme }) => theme.ui.color.primary_60};
					}

					&:focus {
						border-color: ${({ theme }) => theme.ui.color.primary_70};
					}
				}
			}
		}

		&.secondary {
			.eer0-ui-textfield {
				&__label {
					color: ${({ theme }) => theme.ui.text.default_50};
				}
				&__sub-text {
					color: ${({ theme }) => theme.ui.text.default_50};
				}
				&__wrapper {
					position: relative;
					display: inline-block;
				}
				&__input {
					background: transparent;
					color: ${({ theme }) => theme.ui.text.secondary_50};
					border: 2px solid ${({ theme }) => theme.ui.color.default_50};

					&:hover {
						border-color: ${({ theme }) => theme.ui.color.secondary_60};
					}

					&:focus {
						border-color: ${({ theme }) => theme.ui.color.secondary_70};
					}
				}
			}
		}
	}

	&.standard {
	}

	&.filled {
	}
`
