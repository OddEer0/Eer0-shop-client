import styled from "styled-components"

export const $CommentCard = styled.div`
	padding: 16px;
	border-radius: 15px;
	width: 100%;

	.comment-card {
		&__header {
			display: flex;
			gap: 10px;
			align-items: center;
			margin-bottom: 20px;
		}

		&__title {
			font-size: 28px;
		}

		&__description {
			display: -webkit-box;
			-webkit-line-clamp: 3;
			-webkit-box-orient: vertical;
			overflow: hidden;
			font-size: 24px;
		}

		&__footer {
			margin-top: 20px;
			display: flex;
			font-size: 34px;
			gap: 15px;
		}

		&__icon {
			cursor: pointer;
		}
	}
`
