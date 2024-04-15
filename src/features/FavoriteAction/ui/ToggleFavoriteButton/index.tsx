import { FC } from "react"
import { BsHeart, BsTrash } from "react-icons/bs"

import { useDeviceQuery } from "@/entities/Device"

import { Button, ButtonProps } from "@/shared/ui"

import { useToggleFavorite } from "../../lib"

interface ToggleFavoriteButtonProps extends ButtonProps {
	id: string
}

export const ToggleFavoriteButton: FC<ToggleFavoriteButtonProps> = ({ id, ...props }) => {
	const { data } = useDeviceQuery(id)
	const { addFavoriteHandler, isHaveCart, removeFavoriteHandler } = useToggleFavorite(data || null)

	return isHaveCart ? (
		<Button {...props} onClick={removeFavoriteHandler}>
			Удалить из избранных <BsTrash className="toggle-btn-icon remove" />
		</Button>
	) : (
		<Button {...props} onClick={addFavoriteHandler}>
			Добавить в избранные <BsHeart className="toggle-btn-icon add" />
		</Button>
	)
}
