import styled from "styled-components"

import { BaseButton } from "./base.styles"

export const OutlinedButton = styled(BaseButton)`
	border: 2px solid;

	&.primary {
		border-color: ${({ theme }) => theme.ui.color.primary_50};
		background: transparent;
		transition: all 0.3s ease-in-out;

		&:hover {
			background: ${({ theme }) => theme.ui.color.primary_50}13;
			border-color: ${({ theme }) => theme.ui.color.primary_60};
		}

		&:active {
			background: ${({ theme }) => theme.ui.color.primary_50}1e;
			border-color: ${({ theme }) => theme.ui.color.primary_70};
		}
	}

	&.secondary {
		border-color: ${({ theme }) => theme.ui.color.secondary_50};
		background: transparent;
		transition: all 0.3s ease-in-out;

		&:hover {
			background: ${({ theme }) => theme.ui.color.secondary_50}13;
			border-color: ${({ theme }) => theme.ui.color.secondary_60};
		}

		&:active {
			background: ${({ theme }) => theme.ui.color.secondary_50}1e;
			border-color: ${({ theme }) => theme.ui.color.secondary_70};
		}
	}

	&.tertiary {
		border-color: ${({ theme }) => theme.ui.color.tertiary_50};
		background: transparent;
		transition: all 0.3s ease-in-out;

		&:hover {
			background: ${({ theme }) => theme.ui.color.tertiary_50}13;
			border-color: ${({ theme }) => theme.ui.color.tertiary_60};
		}

		&:active {
			background: ${({ theme }) => theme.ui.color.tertiary_50}1e;
			border-color: ${({ theme }) => theme.ui.color.tertiary_70};
		}
	}

	&.quaternary {
		border-color: ${({ theme }) => theme.ui.color.quaternary_50};
		background: transparent;
		transition: all 0.3s ease-in-out;

		&:hover {
			background: ${({ theme }) => theme.ui.color.quaternary_50}13;
			border-color: ${({ theme }) => theme.ui.color.quaternary_60};
		}

		&:active {
			background: ${({ theme }) => theme.ui.color.quaternary_50}1e;
			border-color: ${({ theme }) => theme.ui.color.quaternary_70};
		}
	}

	&.danger {
		border-color: ${({ theme }) => theme.ui.color.danger_50};
		background: transparent;
		transition: all 0.3s ease-in-out;

		&:hover {
			background: ${({ theme }) => theme.ui.color.danger_50}13;
			border-color: ${({ theme }) => theme.ui.color.danger_60};
		}

		&:active {
			background: ${({ theme }) => theme.ui.color.danger_70}1e;
			border-color: ${({ theme }) => theme.ui.color.danger_70};
		}
	}

	&.success {
		border-color: ${({ theme }) => theme.ui.color.success_50};
		background: transparent;
		transition: all 0.3s ease-in-out;

		&:hover {
			background: ${({ theme }) => theme.ui.color.success_50}13;
			border-color: ${({ theme }) => theme.ui.color.success_60};
		}

		&:active {
			background: ${({ theme }) => theme.ui.color.success_50}1e;
			border-color: ${({ theme }) => theme.ui.color.success_70};
		}
	}

	&.warning {
		border-color: ${({ theme }) => theme.ui.color.warning_50};
		background: transparent;
		transition: all 0.3s ease-in-out;

		&:hover {
			background: ${({ theme }) => theme.ui.color.warning_50}13;
			border-color: ${({ theme }) => theme.ui.color.warning_60};
		}

		&:active {
			background: ${({ theme }) => theme.ui.color.warning_50}1e;
			border-color: ${({ theme }) => theme.ui.color.warning_70};
		}
	}

	&.default {
		border-color: ${({ theme }) => theme.ui.color.default_50};
		background: transparent;
		transition: all 0.3s ease-in-out;

		&:hover {
			background: ${({ theme }) => theme.ui.color.default_50}13;
			border-color: ${({ theme }) => theme.ui.color.default_60};
		}

		&:active {
			background: ${({ theme }) => theme.ui.color.default_50}1e;
			border-color: ${({ theme }) => theme.ui.color.default_70};
		}
	}
`
