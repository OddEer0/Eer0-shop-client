import { FC, HTMLAttributes, PropsWithChildren } from "react"
import styled from "styled-components"

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
	width?: number
}

interface StyledContainerProps {
	width?: number
}

const $Container = styled.div<StyledContainerProps>`
	width: 100%;
	max-width: ${({ width }) => width || 1420}px;
	margin: 0 auto;
	height: 100%;
	padding: 0 10px;
`

export const Container: FC<PropsWithChildren<ContainerProps>> = ({ width, children, ...props }) => {
	return (
		<$Container width={width} {...props}>
			{children}
		</$Container>
	)
}
