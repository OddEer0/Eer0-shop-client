import { InputHTMLAttributes, ReactNode } from "react"

type SizeType = "xlarge" | "large" | "medium" | "small" | "xsmall" | "xxsmall"

type VariantType = "circle" | "rounded" | "square"

export type EnumType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export interface AvatarProps extends InputHTMLAttributes<HTMLInputElement> {
	alt?: string
	url?: Nullable<string>
	avatarSize?: SizeType
	isChangeable?: boolean
	changeableIcon?: ReactNode
	variant?: VariantType
	defaultAvatar?: Nullable<string>
	className?: string
}
