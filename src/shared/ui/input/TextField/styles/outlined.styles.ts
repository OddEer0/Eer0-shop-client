import styled from "styled-components"

import { BaseTextFieldWrapper } from "./base.styles"

export const OutlinedTextField = styled(BaseTextFieldWrapper)`
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
			border: 2px solid ${({ theme }) => theme.ui.color.default_50};

			&:hover {
				border-color: ${({ theme }) => theme.ui.color.primary_60};
			}

			&:focus {
				border-color: ${({ theme }) => theme.ui.color.primary_70};
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
			border: 2px solid ${({ theme }) => theme.ui.color.default_50};

			&:hover {
				border-color: ${({ theme }) => theme.ui.color.secondary_60};
			}

			&:focus {
				border-color: ${({ theme }) => theme.ui.color.secondary_70};
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
			border: 2px solid ${({ theme }) => theme.ui.color.default_50};

			&:hover {
				border-color: ${({ theme }) => theme.ui.color.tertiary_60};
			}

			&:focus {
				border-color: ${({ theme }) => theme.ui.color.tertiary_70};
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
			border: 2px solid ${({ theme }) => theme.ui.color.default_50};

			&:hover {
				border-color: ${({ theme }) => theme.ui.color.quaternary_60};
			}

			&:focus {
				border-color: ${({ theme }) => theme.ui.color.quaternary_70};
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
			border: 2px solid ${({ theme }) => theme.ui.color.success_50};

			&:hover {
				border-color: ${({ theme }) => theme.ui.color.success_60};
			}

			&:focus {
				border-color: ${({ theme }) => theme.ui.color.success_70};
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
			border: 2px solid ${({ theme }) => theme.ui.color.danger_50};

			&:hover {
				border-color: ${({ theme }) => theme.ui.color.danger_60};
			}

			&:focus {
				border-color: ${({ theme }) => theme.ui.color.danger_70};
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
			border: 2px solid ${({ theme }) => theme.ui.color.warning_50};

			&:hover {
				border-color: ${({ theme }) => theme.ui.color.warning_60};
			}

			&:focus {
				border-color: ${({ theme }) => theme.ui.color.warning_70};
			}
		}
	}
`
