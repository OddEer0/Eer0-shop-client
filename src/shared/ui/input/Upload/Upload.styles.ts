import styled from "styled-components"

import { SizeFontEnum, SizePaddingXEnum, SizePaddingYEnum, UploadStyledProps } from "./Upload.types"

export const $Upload = styled.div<UploadStyledProps>`
	position: relative;
	display: inline-block;

	input {
		position: absolute;
		visibility: hidden;
		opacity: 0;
	}

	.upload {
		padding: ${({ size }) => SizePaddingYEnum[size]}px ${({ size }) => SizePaddingXEnum[size]}px;
		border-radius: 20px;
		background: ${({ theme, color }) => theme.ui.color[`${color}_50`]};
		color: ${({ theme, color }) => theme.ui.text[`${color}_50`]};
		cursor: pointer;
		transition: all 0.3s ease-in-out;
		font-size: ${({ size }) => SizeFontEnum[size]}px;

		&:hover {
			background: ${({ theme, color }) => theme.ui.color[`${color}_60`]};
			color: ${({ theme, color }) => theme.ui.text[`${color}_60`]};
		}

		&:active {
			background: ${({ theme, color }) => theme.ui.color[`${color}_70`]};
			color: ${({ theme, color }) => theme.ui.text[`${color}_70`]};
		}

		.upload-icon {
			margin-right: 10px;
		}
	}
`
