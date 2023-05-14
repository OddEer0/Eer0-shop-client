import styled from "styled-components"

export const $TitledSwitch = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	padding: 15px 0;
	justify-content: space-between;
	border-bottom: 1px solid ${({ theme }) => theme.ui.color.default_40};

	h5 {
		margin-right: 5px;
	}
`
