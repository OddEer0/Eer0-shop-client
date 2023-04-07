import { AnimatePresence, motion } from "framer-motion"
import { FC } from "react"
import Cropper from "react-easy-crop"

import { circleOpenAnimation, opacityAnimation } from "@/shared/animation"
import { Avatar, Button } from "@/shared/ui"

import { useCropImageFileForChange } from "../../hooks"

import { $CropImageFileForChange } from "./CropImageFileForChange.styles"
import { CropImageFileForChangeProps } from "./CropImageFileForChange.types"

export const CropImageFileForChange: FC<CropImageFileForChangeProps> = ({
	image,
	setImage,
	className = "",
	onAcceptCropImage
}) => {
	const { getCropperProps, croppedImage, clearImage, croppedFile, showCroppedImage, clearCropImage } =
		useCropImageFileForChange(image, setImage)

	const acceptHandler = () => {
		if (onAcceptCropImage) {
			onAcceptCropImage.call(null, { file: croppedFile })
		}
	}

	return (
		<$CropImageFileForChange
			variants={circleOpenAnimation}
			animate="open"
			exit="closed"
			initial="closed"
			isShow={!!image}
			closeHandler={clearImage}
			className={className}
		>
			<AnimatePresence mode="wait">
				{croppedImage ? (
					<motion.div
						className="cropped-section"
						variants={opacityAnimation}
						exit="hidden"
						initial="hidden"
						animate="show"
						key="cropped"
					>
						<Avatar className="crop-avatar" url={croppedImage} width={280} height={280} />
						<Button size="small" className="cropped-button" variant="contained" onClick={acceptHandler}>
							Подтвердить
						</Button>
						<Button size="small" className="cropped-button" variant="contained" onClick={clearCropImage}>
							Назад
						</Button>
					</motion.div>
				) : (
					image && (
						<motion.div
							className="crop-section"
							variants={opacityAnimation}
							exit="hidden"
							initial="hidden"
							animate="show"
							key="crop"
						>
							<Cropper {...getCropperProps} image={image} aspect={1} />
							<div className="button-section">
								<Button size="small" className="crop-btn" variant="contained" onClick={showCroppedImage}>
									Подтвердить
								</Button>
								<Button size="small" className="crop-btn" variant="contained" onClick={clearImage}>
									Отмена
								</Button>
							</div>
						</motion.div>
					)
				)}
			</AnimatePresence>
		</$CropImageFileForChange>
	)
}
