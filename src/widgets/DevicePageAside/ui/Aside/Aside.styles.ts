import styled from "styled-components"

export const $Aside = styled.aside`
	border-radius: 15px;
	padding: 16px;
	background: ${({ theme }) => theme.base.bg.primary_40};
	box-shadow: ${({ theme }) => theme.base.boxShadow.primary};
`
