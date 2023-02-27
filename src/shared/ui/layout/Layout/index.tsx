import { Aside, Content, Footer, Header, LayoutWrapper, Main } from "./Layout.styles"
import { ICustom, LayoutFC } from "./Layout.types"

export const Layout: LayoutFC = ({ children }) => {
	return (
		<LayoutWrapper>
			{children.filter(el => (el.type as unknown as ICustom).target === "header")}
			<Main>
				{children.filter(el => {
					if ((el.type as unknown as ICustom).attrs.length) {
						return (el.type as unknown as ICustom).attrs[0].data === "content"
					}
					return (el.type as unknown as ICustom).target === "aside"
				})}
			</Main>
			{children.filter(el => (el.type as unknown as ICustom).target === "footer")}
		</LayoutWrapper>
	)
}

Layout.Aside = Aside
Layout.Header = Header
Layout.Footer = Footer
Layout.Content = Content
