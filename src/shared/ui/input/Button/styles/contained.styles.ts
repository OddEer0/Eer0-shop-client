import styled from "styled-components"

import { BaseButton } from "./base.styles"

export const ContainedButton = styled(BaseButton)`
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

	&.tertiary {
		color: ${({ theme }) => theme.ui.text.tertiary_50};
		background: ${({ theme }) => theme.ui.color.tertiary_50};
		transition: all 0.3s ease-in-out;

		&:hover {
			background: ${({ theme }) => theme.ui.color.tertiary_60};
			color: ${({ theme }) => theme.ui.text.tertiary_60};
		}

		&:active {
			background: ${({ theme }) => theme.ui.color.tertiary_70};
			color: ${({ theme }) => theme.ui.text.tertiary_70};
		}
	}

	&.quaternary {
		color: ${({ theme }) => theme.ui.text.quaternary_50};
		background: ${({ theme }) => theme.ui.color.quaternary_50};
		transition: all 0.3s ease-in-out;

		&:hover {
			background: ${({ theme }) => theme.ui.color.quaternary_60};
			color: ${({ theme }) => theme.ui.text.quaternary_60};
		}

		&:active {
			background: ${({ theme }) => theme.ui.color.quaternary_70};
			color: ${({ theme }) => theme.ui.text.quaternary_70};
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
		color: ${({ theme }) => theme.ui.text.success_50};
		background: ${({ theme }) => theme.ui.color.success_50};
		transition: all 0.3s ease-in-out;

		&:hover {
			background: ${({ theme }) => theme.ui.color.success_60};
			color: ${({ theme }) => theme.ui.text.success_60};
		}

		&:active {
			background: ${({ theme }) => theme.ui.color.success_70};
			color: ${({ theme }) => theme.ui.text.success_70};
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

	&.default {
		color: ${({ theme }) => theme.ui.text.default_50};
		background: ${({ theme }) => theme.ui.color.default_50};
		transition: all 0.3s ease-in-out;

		&:hover {
			background: ${({ theme }) => theme.ui.color.default_60};
			color: ${({ theme }) => theme.ui.text.default_60};
		}

		&:active {
			background: ${({ theme }) => theme.ui.color.default_70};
			color: ${({ theme }) => theme.ui.text.default_70};
		}
	}
`
