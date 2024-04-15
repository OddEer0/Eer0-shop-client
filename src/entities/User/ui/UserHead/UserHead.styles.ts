import styled from "styled-components"

export const $UserHead = styled.div`
	display: flex;
	align-items: center;
	gap: 20px;

	.avatar {
		width: 175px;
		height: 175px;
		font-size: 78px;
	}

	p {
		padding: 2px 0;
		margin-top: 25px;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
`
