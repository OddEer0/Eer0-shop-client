import styled from "styled-components"

import { Modal } from "@/shared/ui"

export const $DeviceFilterModal = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	& > div {
		width: 315px;
		margin: 10px 15px;
	}
`

export const $Modal = styled(Modal)`
	.modal-main {
		width: 85vw;
		height: 85vh;
		overflow: auto;
	}
`
