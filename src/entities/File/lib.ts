import { useCallback, useState } from "react"

import { ICroppedArea, ICroppedAreaPixels, getCroppedImg } from "@/shared/helpers"

export const useCropImageFileForChange = (
	image: Nullable<string>,
	setImage: (val: Nullable<string>) => void,
	onClose?: () => void
) => {
	const [croppedImage, setCroppedImage] = useState<Nullable<string>>(null)
	const [croppedFile, setCroppedFile] = useState<Nullable<Blob>>(null)
	const [crop, setCrop] = useState({ x: 0, y: 0 })
	const [zoom, setZoom] = useState(1)
	const [croppedAreaPixels, setCroppedAreaPixels] = useState<Nullable<ICroppedAreaPixels>>(null)

	const onCropComplete = useCallback((croppedArea: ICroppedArea, croppedAreaPixels: ICroppedAreaPixels) => {
		setCroppedAreaPixels(croppedAreaPixels)
	}, [])

	const showCroppedImage = useCallback(async () => {
		try {
			if (!image) return
			const croppedImage = await getCroppedImg(image, croppedAreaPixels, 0)
			if (croppedImage) {
				setCroppedFile(croppedImage)
				const reader = new FileReader()
				reader.readAsDataURL(croppedImage)
				reader.onload = ev => {
					if (ev.target?.result) {
						setCroppedImage(ev.target.result as string)
					}
				}
			}
		} catch (e) {}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [croppedAreaPixels])

	const clearImage = useCallback(() => {
		if (onClose) {
			onClose()
		}
		setImage(null)
		setCroppedImage(null)
		setCroppedFile(null)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const clearCropImage = useCallback(() => {
		setCroppedImage(null)
		setCroppedFile(null)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return {
		croppedFile,
		showCroppedImage,
		croppedImage,
		clearImage,
		clearCropImage,
		getCropperProps: {
			zoom,
			crop,
			onCropComplete,
			onZoomChange: setZoom,
			onCropChange: setCrop
		}
	}
}
