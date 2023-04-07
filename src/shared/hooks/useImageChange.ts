import { ChangeEvent, useState } from "react"

export const useImageChange = (initial: Nullable<string> = null, callback?: () => void) => {
	const [image, setImage] = useState<Nullable<string>>(initial)

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (callback) {
			callback()
		}
		const files = e.target.files
		if (files?.length) {
			const file = files[0]
			const reader = new FileReader()
			reader.readAsDataURL(file)
			reader.onload = ev => {
				setImage(ev.target?.result as string)
			}
			e.target.value = ""
		}
	}

	return { image, changeHandler, setImage }
}
