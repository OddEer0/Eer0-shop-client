import styled from "styled-components"

export const ButtonGroupWrapper = styled.div`
	border-radius: 12px;
	display: inline-flex;
	align-items: center;
	overflow: hidden;

	&.row {
		.prefix {
			&.small,
			&.medium,
			&.large {
				border-radius: 0;
			}

			&.text:not(:last-child) {
				border-right: 2px solid ${({ theme }) => theme.ui.color.default_50}26;
			}

			&.contained:not(:last-child) {
				border: none;
				border-right: 2px solid ${({ theme }) => theme.ui.color.default_50}26;
			}

			&.outlined {
				border-right-width: 1px;
				border-left-width: 1px;

				&:last-child {
					border-top-right-radius: 12px;
					border-bottom-right-radius: 12px;
					border-right-width: 2px;
				}

				&:first-child {
					border-top-left-radius: 12px;
					border-bottom-left-radius: 12px;
					border-left-width: 2px;
				}
			}
		}
	}

	&.column {
		flex-direction: column;

		.prefix {
			&.small,
			&.medium,
			&.large {
				border-radius: 0;
			}

			&.text:not(:last-child) {
				border-bottom: 2px solid ${({ theme }) => theme.ui.color.default_50};
			}

			&.contained:not(:last-child) {
				border: none;
				border-bottom: 2px solid ${({ theme }) => theme.ui.color.default_50};
			}

			&.outlined {
				border-bottom-width: 1px;
				border-top-width: 1px;

				&:last-child {
					border-bottom-right-radius: 12px;
					border-bottom-left-radius: 12px;
					border-bottom-width: 2px;
				}

				&:first-child {
					border-top-left-radius: 12px;
					border-top-right-radius: 12px;
					border-top-width: 2px;
				}
			}
		}
	}
`
