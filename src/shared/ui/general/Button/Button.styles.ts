/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from "styled-components"

const DEFAULT = "var(--ui-default-50)"
const DEFAULT_ACTIVE = "var(--ui-default-70)"
const PRIMARY = "var(--ui-primary-50)"
const PRIMARY_HOVER = "var(--ui-primary-60)"
const PRIMARY_ACTIVE = "var(--ui-primary-70)"
const PRIMARY_TEXT = "var(--ui-text-primary-50)"
const PRIMARY_TEXT_HOVER = "var(--ui-text-primary-60)"
const PRIMARY_TEXT_ACTIVE = "var(--ui-text-primary-70)"
const SECONDARY = "var(--ui-secondary-50)"
const SECONDARY_HOVER = "var(--ui-secondary-60)"
const SECONDARY_ACTIVE = "var(--ui-secondary-70)"
const SECONDARY_TEXT = "var(--ui-text-secondary-50)"
const SECONDARY_TEXT_HOVER = "var(--ui-text-secondary-60)"
const SECONDARY_TEXT_ACTIVE = "var(--ui-text-secondary-70)"
const DANGER = "var(--ui-danger-50)"
const DANGER_HOVER = "var(--ui-danger-60)"
const DANGER_ACTIVE = "var(--ui-danger-70)"
const DANGER_TEXT = "var(--ui-text-danger-50)"
const DANGER_TEXT_HOVER = "var(--ui-text-danger-60)"
const DANGER_TEXT_ACTIVE = "var(--ui-text-danger-70)"
const SUCCESS = "var(--ui-success-50)"
const SUCCESS_HOVER = "var(--ui-success-60)"
const SUCCESS_ACTIVE = "var(--ui-success-70)"
const SUCCESS_TEXT = "var(--ui-text-success-50)"
const SUCCESS_TEXT_HOVER = "var(--ui-text-success-60)"
const SUCCESS_TEXT_ACTIVE = "var(--ui-text-success-70)"
const WARNING = "var(--ui-warning-50)"
const WARNING_HOVER = "var(--ui-warning-60)"
const WARNING_ACTIVE = "var(--ui-warning-70)"
const WARNING_TEXT = "var(--ui-text-warning-50)"
const WARNING_TEXT_HOVER = "var(--ui-text-warning-60)"
const WARNING_TEXT_ACTIVE = "var(--ui-text-warning-70)"

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
			color: ${PRIMARY_TEXT};
			background: transparent;
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${DEFAULT};
				color: ${PRIMARY_TEXT_HOVER};
			}

			&:active {
				background: ${DEFAULT_ACTIVE};
				color: ${PRIMARY_TEXT_ACTIVE};
			}
		}

		&.secondary {
			color: ${SECONDARY_TEXT};
			background: transparent;
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${DEFAULT};
				color: ${SECONDARY_TEXT_HOVER};
			}

			&:active {
				background: ${DEFAULT_ACTIVE};
				color: ${SECONDARY_TEXT_ACTIVE};
			}
		}

		&.danger {
			color: ${DANGER_TEXT};
			background: transparent;
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${DEFAULT};
				color: ${DANGER_TEXT_HOVER};
			}

			&:active {
				background: ${DEFAULT_ACTIVE};
				color: ${DANGER_TEXT_ACTIVE};
			}
		}

		&.success {
			color: ${SUCCESS_TEXT};
			background: transparent;
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${DEFAULT};
				color: ${SUCCESS_TEXT_HOVER};
			}

			&:active {
				background: ${DEFAULT_ACTIVE};
				color: ${SUCCESS_TEXT_ACTIVE};
			}
		}

		&.warning {
			color: ${WARNING_TEXT};
			background: transparent;
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${DEFAULT};
				color: ${WARNING_TEXT_HOVER};
			}

			&:active {
				background: ${DEFAULT_ACTIVE};
				color: ${WARNING_TEXT_ACTIVE};
			}
		}
	}

	&.contained {
		&.primary {
			color: ${PRIMARY_TEXT};
			background: ${PRIMARY};
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${PRIMARY_HOVER};
				color: ${PRIMARY_TEXT_HOVER};
			}

			&:active {
				background: ${PRIMARY_ACTIVE};
				color: ${PRIMARY_TEXT_ACTIVE};
			}
		}

		&.secondary {
			color: ${SECONDARY_TEXT};
			background: ${SECONDARY};
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${SECONDARY_HOVER};
				color: ${SECONDARY_TEXT_HOVER};
			}

			&:active {
				background: ${SECONDARY_ACTIVE};
				color: ${SECONDARY_TEXT_ACTIVE};
			}
		}

		&.danger {
			color: ${DANGER_TEXT};
			background: ${DANGER};
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${DANGER_HOVER};
				color: ${DANGER_TEXT_HOVER};
			}

			&:active {
				background: ${DANGER_ACTIVE};
				color: ${DANGER_TEXT_ACTIVE};
			}
		}

		&.success {
			color: ${DANGER_TEXT};
			background: ${DANGER};
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${DANGER_HOVER};
				color: ${DANGER_TEXT_HOVER};
			}

			&:active {
				background: ${DANGER_ACTIVE};
				color: ${DANGER_TEXT_ACTIVE};
			}
		}

		&.warning {
			color: ${WARNING_TEXT};
			background: ${WARNING};
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${WARNING_HOVER};
				color: ${WARNING_TEXT_HOVER};
			}

			&:active {
				background: ${WARNING_ACTIVE};
				color: ${WARNING_TEXT_ACTIVE};
			}
		}
	}

	&.outlined {
		border: 2px solid;

		&.primary {
			color: ${PRIMARY_TEXT};
			border-color: ${PRIMARY};
			background: transparent;
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${DEFAULT};
				border-color: ${PRIMARY_HOVER};
				color: ${PRIMARY_TEXT_HOVER};
			}

			&:active {
				background: ${DEFAULT_ACTIVE};
				border-color: ${PRIMARY_ACTIVE};
				color: ${PRIMARY_TEXT_ACTIVE};
			}
		}

		&.secondary {
			color: ${SECONDARY_TEXT};
			border-color: ${SECONDARY};
			background: transparent;
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${DEFAULT};
				border-color: ${SECONDARY_HOVER};
				color: ${SECONDARY_TEXT_HOVER};
			}

			&:active {
				background: ${DEFAULT_ACTIVE};
				border-color: ${SECONDARY_ACTIVE};
				color: ${SECONDARY_TEXT_ACTIVE};
			}
		}

		&.danger {
			color: ${DANGER_TEXT};
			border-color: ${DANGER};
			background: transparent;
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${DEFAULT};
				border-color: ${DANGER_HOVER};
				color: ${DANGER_TEXT_HOVER};
			}

			&:active {
				background: ${DEFAULT_ACTIVE};
				border-color: ${DANGER_ACTIVE};
				color: ${DANGER_TEXT_ACTIVE};
			}
		}

		&.success {
			color: ${SUCCESS_TEXT};
			border-color: ${SUCCESS};
			background: transparent;
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${DEFAULT};
				border-color: ${SUCCESS_HOVER};
				color: ${SUCCESS_TEXT_HOVER};
			}

			&:active {
				background: ${DEFAULT_ACTIVE};
				border-color: ${SUCCESS_ACTIVE};
				color: ${SUCCESS_TEXT_ACTIVE};
			}
		}

		&.warning {
			color: ${WARNING_TEXT};
			border-color: ${WARNING};
			background: transparent;
			transition: all 0.3s ease-in-out;

			&:hover {
				background: ${DEFAULT};
				border-color: ${WARNING_HOVER};
				color: ${WARNING_TEXT_HOVER};
			}

			&:active {
				background: ${DEFAULT_ACTIVE};
				border-color: ${WARNING_ACTIVE};
				color: ${WARNING_TEXT_ACTIVE};
			}
		}
	}
`
