import styled from "styled-components"

export const $Profile = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	.user-head {
		max-width: 850px;
	}

	.user-profile-info-list {
		margin-top: 30px;
		width: 100%;
		max-width: 1080px;

		li {
			padding: 10px;
			border-bottom: 1px solid ${({ theme }) => theme.ui.color.default_50};
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;

			.list-value {
				margin-left: 15px;
			}

			&.multi-value {
				.list-value {
					display: flex;
					align-items: center;
					flex-wrap: wrap;
				}
			}
		}
	}
`
