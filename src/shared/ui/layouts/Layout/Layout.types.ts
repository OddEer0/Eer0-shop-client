import { FC, ReactElement } from "react"
import { DefaultTheme, StyledComponent } from "styled-components"

interface LayoutProps {
	children: ReactElement[]
}

interface IDataset {
	data: string
}

export interface ICustom {
	target: string
	attrs: IDataset[]
}

export interface LayoutFC extends FC<LayoutProps> {
	Aside: StyledComponent<"aside", DefaultTheme>
	Header: StyledComponent<"header", DefaultTheme>
	Content: StyledComponent<"div", DefaultTheme>
	Footer: StyledComponent<"footer", DefaultTheme>
}
