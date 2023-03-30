import styled from "styled-components"

export const $FilterDeviceAside = styled.aside`
	max-width: 340px;
	min-width: 340px;
	max-height: calc(95vh - 110px);
	position: sticky;
	top: 110px;

	& .scroll {
		max-width: 340px;
		max-height: calc(95vh - 110px);

		.simplebar-content-wrapper {
			border-radius: 10px;
		}

		.simplebar-track.simplebar-vertical {
			.simplebar-scrollbar::before {
				background: ${({ theme }) => theme.ui.color.primary_50};
			}
		}
	}

	& .sidebar {
		width: 100%;
		max-width: 340px;
		height: 100%;
		max-height: 1220px;
		padding: 20px;
		background: ${({ theme }) => theme.base.bg.primary_40};

		.h2 {
			text-align: center;
			margin: 15px 0;
		}

		.filter-accordion {
			width: 100%;

			h4 {
				font-size: 20px;
				font-weight: 700;
			}
		}

		.filter-summary {
			padding: 15px 0;
			&:not(:first-child) {
				margin-top: 12px;
			}

			.accordion-summary-header {
				padding: 0;
			}

			.accordion-summary-body {
				padding: 0;
			}
		}
	}
`
