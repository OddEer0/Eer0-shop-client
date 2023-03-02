import styled from "styled-components"

import { BaseTextFieldWrapper } from "./base.styles"

export const FilledTextField = styled(BaseTextFieldWrapper)`
	&.primary {
		& > .label {
			color: ${({ theme }) => theme.ui.text.default_50};
		}
		& > .sub-text {
			color: ${({ theme }) => theme.ui.text.default_50};
		}
		& > .wrapper {
			position: relative;
			display: inline-block;
		}
		& > .wrapper > .input {
			background: transparent;
			color: inherit;
			border-radius: 10px 10px 0 0;
			border-bottom: 2px solid ${({ theme }) => theme.ui.color.default_50};
			background: ${({ theme }) => theme.ui.color.primary_50}20;

			&:hover {
				border-color: ${({ theme }) => theme.ui.color.primary_60};
				background: ${({ theme }) => theme.ui.color.primary_60}26;
			}

			&:focus {
				border-color: ${({ theme }) => theme.ui.color.primary_70};
				background: ${({ theme }) => theme.ui.color.primary_60}26;
			}
		}
	}

	&.secondary {
		& > .label {
			color: ${({ theme }) => theme.ui.text.default_50};
		}
		& > .sub-text {
			color: ${({ theme }) => theme.ui.text.default_50};
		}
		& > .wrapper {
			position: relative;
			display: inline-block;
		}
		& > .wrapper > .input {
			background: transparent;
			color: inherit;
			border-radius: 10px 10px 0 0;
			border-bottom: 2px solid ${({ theme }) => theme.ui.color.default_50};
			background: ${({ theme }) => theme.ui.color.secondary_50}20;

			&:hover {
				border-color: ${({ theme }) => theme.ui.color.secondary_60};
				background: ${({ theme }) => theme.ui.color.secondary_60}26;
			}

			&:focus {
				border-color: ${({ theme }) => theme.ui.color.secondary_70};
				background: ${({ theme }) => theme.ui.color.secondary_60}26;
			}
		}
	}

	&.tertiary {
		& > .label {
			color: ${({ theme }) => theme.ui.text.default_50};
		}
		& > .sub-text {
			color: ${({ theme }) => theme.ui.text.default_50};
		}
		& > .wrapper {
			position: relative;
			display: inline-block;
		}
		& > .wrapper > .input {
			background: transparent;
			color: inherit;
			border-radius: 10px 10px 0 0;
			border-bottom: 2px solid ${({ theme }) => theme.ui.color.default_50};
			background: ${({ theme }) => theme.ui.color.tertiary_50}20;

			&:hover {
				border-color: ${({ theme }) => theme.ui.color.tertiary_60};
				background: ${({ theme }) => theme.ui.color.tertiary_60}26;
			}

			&:focus {
				border-color: ${({ theme }) => theme.ui.color.tertiary_70};
				background: ${({ theme }) => theme.ui.color.tertiary_60}26;
			}
		}
	}

	&.quaternary {
		& > .label {
			color: ${({ theme }) => theme.ui.text.default_50};
		}
		& > .sub-text {
			color: ${({ theme }) => theme.ui.text.default_50};
		}
		& > .wrapper {
			position: relative;
			display: inline-block;
		}
		& > .wrapper > .input {
			background: transparent;
			color: inherit;
			border-radius: 10px 10px 0 0;
			border-bottom: 2px solid ${({ theme }) => theme.ui.color.default_50};
			background: ${({ theme }) => theme.ui.color.quaternary_50}20;

			&:hover {
				border-color: ${({ theme }) => theme.ui.color.quaternary_60};
				background: ${({ theme }) => theme.ui.color.quaternary_60}26;
			}

			&:focus {
				border-color: ${({ theme }) => theme.ui.color.quaternary_70};
				background: ${({ theme }) => theme.ui.color.quaternary_60}26;
			}
		}
	}

	&.success {
		& > .label {
			color: ${({ theme }) => theme.ui.color.success_50};
		}
		& > .sub-text {
			color: ${({ theme }) => theme.ui.color.success_50};
		}
		& > .wrapper {
			position: relative;
			display: inline-block;
		}
		& > .wrapper > .input {
			background: transparent;
			color: inherit;
			border-radius: 10px 10px 0 0;
			border-bottom: 2px solid ${({ theme }) => theme.ui.color.default_50};
			background: ${({ theme }) => theme.ui.color.success_50}20;

			&:hover {
				border-color: ${({ theme }) => theme.ui.color.success_60};
				background: ${({ theme }) => theme.ui.color.success_60}26;
			}

			&:focus {
				border-color: ${({ theme }) => theme.ui.color.success_70};
				background: ${({ theme }) => theme.ui.color.success_60}26;
			}
		}
	}

	&.danger {
		& > .label {
			color: ${({ theme }) => theme.ui.color.danger_50};
		}
		& > .sub-text {
			color: ${({ theme }) => theme.ui.color.danger_50};
		}
		& > .wrapper {
			position: relative;
			display: inline-block;
		}
		& > .wrapper > .input {
			background: transparent;
			color: inherit;
			border-radius: 10px 10px 0 0;
			border-bottom: 2px solid ${({ theme }) => theme.ui.color.default_50};
			background: ${({ theme }) => theme.ui.color.danger_50}20;

			&:hover {
				border-color: ${({ theme }) => theme.ui.color.danger_60};
				background: ${({ theme }) => theme.ui.color.danger_60}26;
			}

			&:focus {
				border-color: ${({ theme }) => theme.ui.color.danger_70};
				background: ${({ theme }) => theme.ui.color.danger_60}26;
			}
		}
	}

	&.warning {
		& > .label {
			color: ${({ theme }) => theme.ui.color.warning_50};
		}
		& > .sub-text {
			color: ${({ theme }) => theme.ui.color.warning_50};
		}
		& > .wrapper {
			position: relative;
			display: inline-block;
		}
		& > .wrapper > .input {
			background: transparent;
			color: inherit;
			border-radius: 10px 10px 0 0;
			border-bottom: 2px solid ${({ theme }) => theme.ui.color.default_50};
			background: ${({ theme }) => theme.ui.color.warning_50}20;

			&:hover {
				border-color: ${({ theme }) => theme.ui.color.warning_60};
				background: ${({ theme }) => theme.ui.color.warning_60}26;
			}

			&:focus {
				border-color: ${({ theme }) => theme.ui.color.warning_70};
				background: ${({ theme }) => theme.ui.color.warning_60}26;
			}
		}
	}
`
