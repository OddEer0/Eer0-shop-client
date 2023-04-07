import styled from "styled-components"

import { Modal } from "@/shared/ui"

export const $CropImageFileForChange = styled(Modal)`
	.modal-main {
		position: relative;
		width: 90vw;
		height: 90vh;
		border-radius: 15px;

		.reactEasyCrop_Container {
			width: 100%;
			height: 85%;
			position: relative;
		}

		& > .crop-section {
			height: 100%;

			& > .button-section {
				margin-top: 20px;
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				gap: 15px;

				.crop-btn {
					width: 190px;
				}
			}
		}

		.cropped-section {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 15px;

			& > .crop-avatar {
				width: 280px;
				height: 280px;
			}

			& > .cropped-button {
				width: 250px;
			}
		}
	}
`
