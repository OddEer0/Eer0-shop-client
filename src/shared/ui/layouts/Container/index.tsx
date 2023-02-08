import { FC, HTMLAttributes, PropsWithChildren } from "react"
import styled from "styled-components"

export type ContainerProps = HTMLAttributes<HTMLDivElement>

const $Container = styled.div`
	width: 100%;
	max-width: 1920px;
	margin: 0 auto;
	height: 100%;
`

export const Container: FC<PropsWithChildren<ContainerProps>> = ({ children, ...props }) => {
	return <$Container {...props}>{children}</$Container>
}
