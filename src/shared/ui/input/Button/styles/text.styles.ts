import styled from "styled-components"

import { BaseButton } from "./base.styles"

export const TextButton = styled(BaseButton)`
	&.primary {
		background: ${({ theme }) => theme.ui.color.primary_50}1e;
		transition: all 0.3s ease-in-out;

		&:hover {
			background: ${({ theme }) => theme.ui.color.primary_60}26;
		}

		&:active {
			background: ${({ theme }) => theme.ui.color.primary_70}2d;
		}
	}

	&.secondary {
		background: ${({ theme }) => theme.ui.color.secondary_50}1e;
		transition: all 0.3s ease-in-out;

		&:hover {
			background: ${({ theme }) => theme.ui.color.secondary_60}26;
		}

		&:active {
			background: ${({ theme }) => theme.ui.color.secondary_60}2d;
		}
	}

	&.tertiary {
		background: ${({ theme }) => theme.ui.color.tertiary_50}1e;
		transition: all 0.3s ease-in-out;

		&:hover {
			background: ${({ theme }) => theme.ui.color.tertiary_60}26;
		}

		&:active {
			background: ${({ theme }) => theme.ui.color.tertiary_60}2d;
		}
	}

	&.quaternary {
		background: ${({ theme }) => theme.ui.color.quaternary_50}1e;
		transition: all 0.3s ease-in-out;

		&:hover {
			background: ${({ theme }) => theme.ui.color.quaternary_60}26;
		}

		&:active {
			background: ${({ theme }) => theme.ui.color.quaternary_60}2d;
		}
	}

	&.danger {
		background: ${({ theme }) => theme.ui.color.danger_50}1e;
		transition: all 0.3s ease-in-out;

		&:hover {
			background: ${({ theme }) => theme.ui.color.danger_60}26;
		}

		&:active {
			background: ${({ theme }) => theme.ui.color.danger_70}2d;
		}
	}

	&.success {
		background: ${({ theme }) => theme.ui.color.success_50}1e;
		transition: all 0.3s ease-in-out;

		&:hover {
			background: ${({ theme }) => theme.ui.color.success_60}26;
		}

		&:active {
			background: ${({ theme }) => theme.ui.color.success_70}2d;
		}
	}

	&.warning {
		background: ${({ theme }) => theme.ui.color.warning_50}1e;
		transition: all 0.3s ease-in-out;

		&:hover {
			background: ${({ theme }) => theme.ui.color.warning_60}26;
		}

		&:active {
			background: ${({ theme }) => theme.ui.color.warning_70}2d;
		}
	}

	&.default {
		background: ${({ theme }) => theme.ui.color.default_50}1e;
		transition: all 0.3s ease-in-out;

		&:hover {
			background: ${({ theme }) => theme.ui.color.default_60}26;
		}

		&:active {
			background: ${({ theme }) => theme.ui.color.default_70}2d;
		}
	}
`
