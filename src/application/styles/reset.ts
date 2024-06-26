import { css } from "styled-components"

export const resetStyle = css`
	*,
	*::after,
	*::before {
		margin: 0;
		padding: 0;
		border: none;
		box-sizing: border-box;
	}

	a,
	a:visited {
		color: inherit;
		text-decoration: none;
		display: inline-block;
	}

	a:focus,
	a:active,
	a:hover {
		outline: none;
	}

	aside,
	nav,
	footer,
	header,
	main,
	section {
		display: block;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		font-size: inherit;
		font-weight: inherit;
		line-height: inherit;
	}

	p + p {
		margin-top: 1em;
	}

	ul {
		list-style: none;
	}

	img,
	svg {
		vertical-align: top;
		max-width: 100%;
		height: auto;
	}

	input,
	textarea,
	button,
	select _ {
		font-family: inherit;
		font-size: inherit;
		color: inherit;
	}

	input::-ms-clear {
		display: none;
	}

	button,
	input[type="submit"] {
		display: inline-block;
		box-shadow: none;
		background-color: transparent;
		background: none;
		cursor: pointer;
	}

	input:active,
	input:focus,
	button:active,
	button:focus {
		outline: none;
	}

	button::-moz-focus-inner {
		padding: 0;
		border: 0;
	}

	label {
		cursor: pointer;
	}

	legend {
		display: block;
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	input[type="number"] {
		-moz-appearance: textfield;
	}
`
