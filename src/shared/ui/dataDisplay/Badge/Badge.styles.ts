import styled from "styled-components"

export const BadgeWrapper = styled.div`
	position: relative;
	display: inline-flex;
	height: min-content;

	& > .badge {
		border-radius: 50%;
		position: absolute;
		transform: translate(-50%, -50%);
		color: white;

		&.dot {
			&.medium {
				padding: 7px;
			}

			&.large {
				padding: 10px;
			}

			&.small {
				padding: 5px;
			}
		}

		&.content {
			display: flex;
			align-items: center;
			justify-content: center;

			&.medium {
				min-width: 29px;
				min-height: 29px;
				font-size: 18px;
				padding: 4px;
			}
			&.small {
				min-width: 24px;
				min-height: 24px;
				font-size: 14px;
				padding: 4px;
			}
			&.large {
				padding: 4px;
				min-width: 32px;
				min-height: 32px;
				font-size: 20px;
				padding: 4px;
			}
		}

		&.square {
			&.left {
				left: 0;
			}
			&.right {
				left: 100%;
			}
			&.top {
				top: 0;
			}
			&.bottom {
				top: 100%;
			}
		}

		&.success {
			background: ${({ theme }) => theme.ui.color.success_50};
		}

		&.danger {
			background: ${({ theme }) => theme.ui.color.danger_50};
		}

		&.warning {
			background: ${({ theme }) => theme.ui.color.warning_50};
		}

		&.default {
			background: ${({ theme }) => theme.ui.color.default_70};
		}

		&.primary {
			background: ${({ theme }) => theme.ui.color.primary_50};
		}

		&.secondary {
			background: ${({ theme }) => theme.ui.color.secondary_50};
		}
	}
`
