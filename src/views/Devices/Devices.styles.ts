import styled from "styled-components"

export const $DeviceView = styled.div`
	& > .container {
		display: flex;

		& > .content {
			display: flex;
			flex-direction: column;

			& > .content-head {
				margin-left: 35px;
			}
		}
	}
`
