import styled from "styled-components"

type ColorType = "primary" | "secondary" | "tertiary" | "quaternary" | "success" | "danger" | "warning"

interface CircleProps {
	color?: ColorType
	diameter?: string
}

export const Circle = styled.div<CircleProps>`
	display: inline-block;
	border-radius: 50%;
	background: ${({ theme, color }) => (color ? theme.ui.color[`${color}_50`] : theme.ui.color.primary_50)};
	width: ${({ diameter }) => (diameter ? diameter : "5px")};
	height: ${({ diameter }) => (diameter ? diameter : "5px")};
`
