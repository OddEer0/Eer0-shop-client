type TextAlignType = "center" | "left" | "right"
type OrientationType = "vertical" | "horizontal"

export interface DividerProps {
	textAlign?: TextAlignType
	orientation?: OrientationType
	className?: string
}
