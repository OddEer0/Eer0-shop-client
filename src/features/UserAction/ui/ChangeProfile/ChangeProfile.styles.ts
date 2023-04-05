import styled from "styled-components"

export const $ChangeProfile = styled.form`
	display: flex;
	flex-direction: column;

	& > .wrapper {
		display: inline-grid;
		grid-template-columns: 1fr 1fr;
		gap: 30px;
	}

	& > .textarea-wrapper {
		& > .textarea {
			margin-top: 30px;
			width: 100%;

			textarea {
				height: 150px;
			}
		}
	}

	& > .form-button {
		margin-top: 40px;
		button {
			width: 100%;
		}
	}
`
