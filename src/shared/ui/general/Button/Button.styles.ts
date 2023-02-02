/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components"

export const Btn = styled.button`
	&.prefix {
		cursor: pointer;
	}

	&.small {
		border-radius: 6px;
		padding: 6px 10px;
		font-size: 16px;
	}

	&.medium {
		border-radius: 10px;
		padding: 8px 12px;
		font-size: 18px;
	}

	&.large {
		border-radius: 12px;
		padding: 10px 14px;
		font-size: 20px;
	}

	&.text {
		&.primary {
			color: ${({ theme }) => theme.ui.text.primary_50};
			background: transparent;
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${({ theme }) => theme.ui.color.default_50};
				color: ${({ theme }) => theme.ui.text.primary_60};
			}

			&:active {
				background: ${({ theme }) => theme.ui.color.danger_70};
				color: ${({ theme }) => theme.ui.text.primary_70};
			}
		}

		&.secondary {
			color: ${({ theme }) => theme.ui.text.secondary_50};
			background: transparent;
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${({ theme }) => theme.ui.color.default_50};
				color: ${({ theme }) => theme.ui.text.secondary_60};
			}

			&:active {
				background: ${({ theme }) => theme.ui.color.danger_70};
				color: ${({ theme }) => theme.ui.text.secondary_70};
			}
		}

		&.danger {
			color: ${({ theme }) => theme.ui.text.danger_50};
			background: transparent;
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${({ theme }) => theme.ui.color.default_50};
				color: ${({ theme }) => theme.ui.text.danger_60};
			}

			&:active {
				background: ${({ theme }) => theme.ui.color.danger_70};
				color: ${({ theme }) => theme.ui.text.danger_70};
			}
		}

		&.success {
			color: ${({ theme }) => theme.ui.text.success_50};
			background: transparent;
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${({ theme }) => theme.ui.color.default_50};
				color: ${({ theme }) => theme.ui.text.success_60};
			}

			&:active {
				background: ${({ theme }) => theme.ui.color.danger_70};
				color: ${({ theme }) => theme.ui.text.success_70};
			}
		}

		&.warning {
			color: ${({ theme }) => theme.ui.text.warning_50};
			background: transparent;
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${({ theme }) => theme.ui.color.default_50};
				color: ${({ theme }) => theme.ui.text.warning_60};
			}

			&:active {
				background: ${({ theme }) => theme.ui.color.danger_70};
				color: ${({ theme }) => theme.ui.text.warning_70};
			}
		}
	}

	&.contained {
		&.primary {
			color: ${({ theme }) => theme.ui.text.primary_50};
			background: ${({ theme }) => theme.ui.color.primary_50};
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${({ theme }) => theme.ui.color.primary_60};
				color: ${({ theme }) => theme.ui.text.primary_60};
			}

			&:active {
				background: ${({ theme }) => theme.ui.color.primary_70};
				color: ${({ theme }) => theme.ui.text.primary_70};
			}
		}

		&.secondary {
			color: ${({ theme }) => theme.ui.text.secondary_50};
			background: ${({ theme }) => theme.ui.color.secondary_50};
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${({ theme }) => theme.ui.color.secondary_60};
				color: ${({ theme }) => theme.ui.text.secondary_60};
			}

			&:active {
				background: ${({ theme }) => theme.ui.color.secondary_70};
				color: ${({ theme }) => theme.ui.text.secondary_70};
			}
		}

		&.danger {
			color: ${({ theme }) => theme.ui.text.danger_50};
			background: ${({ theme }) => theme.ui.color.danger_50};
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${({ theme }) => theme.ui.color.danger_60};
				color: ${({ theme }) => theme.ui.text.danger_60};
			}

			&:active {
				background: ${({ theme }) => theme.ui.color.danger_70};
				color: ${({ theme }) => theme.ui.text.danger_70};
			}
		}

		&.success {
			color: ${({ theme }) => theme.ui.text.danger_50};
			background: ${({ theme }) => theme.ui.color.danger_50};
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${({ theme }) => theme.ui.color.danger_60};
				color: ${({ theme }) => theme.ui.text.danger_60};
			}

			&:active {
				background: ${({ theme }) => theme.ui.color.danger_70};
				color: ${({ theme }) => theme.ui.text.danger_70};
			}
		}

		&.warning {
			color: ${({ theme }) => theme.ui.text.warning_50};
			background: ${({ theme }) => theme.ui.color.warning_50};
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${({ theme }) => theme.ui.color.warning_60};
				color: ${({ theme }) => theme.ui.text.warning_60};
			}

			&:active {
				background: ${({ theme }) => theme.ui.color.warning_70};
				color: ${({ theme }) => theme.ui.text.warning_70};
			}
		}
	}

	&.outlined {
		border: 2px solid;

		&.primary {
			color: ${({ theme }) => theme.ui.text.primary_50};
			border-color: ${({ theme }) => theme.ui.color.primary_50};
			background: transparent;
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${({ theme }) => theme.ui.color.default_50};
				border-color: ${({ theme }) => theme.ui.color.primary_60};
				color: ${({ theme }) => theme.ui.text.primary_60};
			}

			&:active {
				background: ${({ theme }) => theme.ui.color.danger_70};
				border-color: ${({ theme }) => theme.ui.color.primary_70};
				color: ${({ theme }) => theme.ui.text.primary_70};
			}
		}

		&.secondary {
			color: ${({ theme }) => theme.ui.text.secondary_50};
			border-color: ${({ theme }) => theme.ui.color.secondary_50};
			background: transparent;
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${({ theme }) => theme.ui.color.default_50};
				border-color: ${({ theme }) => theme.ui.color.secondary_60};
				color: ${({ theme }) => theme.ui.text.secondary_60};
			}

			&:active {
				background: ${({ theme }) => theme.ui.color.danger_70};
				border-color: ${({ theme }) => theme.ui.color.secondary_70};
				color: ${({ theme }) => theme.ui.text.secondary_70};
			}
		}

		&.danger {
			color: ${({ theme }) => theme.ui.text.danger_50};
			border-color: ${({ theme }) => theme.ui.color.danger_50};
			background: transparent;
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${({ theme }) => theme.ui.color.default_50};
				border-color: ${({ theme }) => theme.ui.color.danger_60};
				color: ${({ theme }) => theme.ui.text.danger_60};
			}

			&:active {
				background: ${({ theme }) => theme.ui.color.danger_70};
				border-color: ${({ theme }) => theme.ui.color.danger_70};
				color: ${({ theme }) => theme.ui.text.danger_70};
			}
		}

		&.success {
			color: ${({ theme }) => theme.ui.text.success_50};
			border-color: ${({ theme }) => theme.ui.color.success_50};
			background: transparent;
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${({ theme }) => theme.ui.color.default_50};
				border-color: ${({ theme }) => theme.ui.color.success_60};
				color: ${({ theme }) => theme.ui.text.success_60};
			}

			&:active {
				background: ${({ theme }) => theme.ui.color.danger_70};
				border-color: ${({ theme }) => theme.ui.color.success_70};
				color: ${({ theme }) => theme.ui.text.success_70};
			}
		}

		&.warning {
			color: ${({ theme }) => theme.ui.text.warning_50};
			border-color: ${({ theme }) => theme.ui.color.warning_50};
			background: transparent;
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${({ theme }) => theme.ui.color.default_50};
				border-color: ${({ theme }) => theme.ui.color.warning_60};
				color: ${({ theme }) => theme.ui.text.warning_60};
			}

			&:active {
				background: ${({ theme }) => theme.ui.color.danger_70};
				border-color: ${({ theme }) => theme.ui.color.warning_70};
				color: ${({ theme }) => theme.ui.text.warning_70};
			}
		}
	}
`
