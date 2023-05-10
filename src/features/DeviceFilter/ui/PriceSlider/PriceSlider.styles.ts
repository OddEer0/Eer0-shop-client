import styled from "styled-components"

export const $PriceSlider = styled.div`
	padding: 15px;
	& > .input-section {
		margin-bottom: 70px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		& > .input {
			padding: 10px 0;
			width: 90px;

			.wrapper input {
				width: 90px;
				min-width: 0;
			}
		}
	}

	button {
		margin-top: 20px;
		margin-left: 40px;
	}

	.slider {
		padding: 0 19px;
	}
`
