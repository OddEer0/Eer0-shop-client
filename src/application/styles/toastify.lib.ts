import { css } from "styled-components"

export const StyledToastifyLib = css`
	:root {
		--toastify-color-info: ${({ theme }) => theme.base.bg.primary_40};
		--toastify-color-success: ${({ theme }) => theme.base.bg.primary_40};
		--toastify-color-warning: ${({ theme }) => theme.base.bg.primary_40};
		--toastify-color-error: ${({ theme }) => theme.base.bg.primary_40};
		--toastify-color-transparent: none;

		--toastify-icon-color-info: ${({ theme }) => theme.ui.color.secondary_50};
		--toastify-icon-color-success: ${({ theme }) => theme.ui.color.success_50};
		--toastify-icon-color-warning: ${({ theme }) => theme.ui.color.warning_50};
		--toastify-icon-color-error: ${({ theme }) => theme.ui.color.danger_50};

		--toastify-text-color-info: ${({ theme }) => theme.base.text.primary_50};
		--toastify-text-color-success: ${({ theme }) => theme.base.text.primary_50};
		--toastify-text-color-warning: ${({ theme }) => theme.base.text.primary_50};
		--toastify-text-color-error: ${({ theme }) => theme.base.text.primary_50};

		--toastify-z-index: 100000;

		--toastify-spinner-color: ${({ theme }) => theme.base.text.primary_50};
		--toastify-spinner-color-empty-area: ${({ theme }) => theme.base.bg.primary_40};

		--toastify-color-progress-info: ${({ theme }) => theme.ui.color.secondary_50};
		--toastify-color-progress-success: ${({ theme }) => theme.ui.color.success_50};
		--toastify-color-progress-warning: ${({ theme }) => theme.ui.color.warning_50};
		--toastify-color-progress-error: ${({ theme }) => theme.ui.color.danger_50};
	}

	.Toastify__toast-body > div:last-child {
		color: ${({ theme }) => theme.base.text.primary_50};
	}

	.Toastify__toast-theme--colored.Toastify__toast {
		&--error {
			.Toastify__toast-icon {
				color: var(--toastify-icon-color-error);
			}
		}

		&--success {
			.Toastify__toast-icon {
				color: var(--toastify-icon-color-success);
			}
		}

		&--warning {
			.Toastify__toast-icon {
				color: var(--toastify-icon-color-warning);
			}
		}

		&--info {
			.Toastify__toast-icon {
				color: var(--toastify-icon-color-info);
			}
		}

		&--default {
			.Toastify__toast-icon {
				color: ${({ theme }) => theme.ui.color.secondary_50};
			}
		}
	}

	.Toastify__progress-bar {
		&--success {
			background: var(--toastify-color-progress-success) !important;
		}

		&--warning {
			background: var(--toastify-color-progress-warning) !important;
		}

		&--info {
			background: var(--toastify-color-progress-info) !important;
		}

		&--error {
			background: var(--toastify-color-progress-error) !important;
		}
	}
`
