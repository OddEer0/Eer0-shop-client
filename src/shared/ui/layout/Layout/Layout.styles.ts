import styled from "styled-components"

export const LayoutWrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
`

export const Main = styled.main`
	flex: 1;
	display: flex;
	position: relative;
`

export const Content = styled.div.attrs({ data: "content" })`
	flex: 1;
`

export const Aside = styled.aside`
	flex-basis: 1fr;
`

export const Header = styled.header``

export const Footer = styled.footer``
