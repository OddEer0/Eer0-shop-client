import { IAcceptCropChange } from "../../types"

export interface CropImageFileForChangeProps {
	image: Nullable<string>
	setImage: (val: Nullable<string>) => void
	onAcceptCropImage?: (values: IAcceptCropChange) => void
	className?: string
}
