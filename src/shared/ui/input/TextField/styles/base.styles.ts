import styled from "styled-components"

export const BaseTextFieldWrapper = styled.div`
	display: inline-block;

	input {
		transition: all 0.3s ease-in-out;

		&:disabled {
			border-color: ${({ theme }) => theme.ui.color.default_50};
			opacity: 0.6;
		}
	}

	&.small {
		input {
			padding: 6px 10px;
			border-radius: 36px;
			font-size: 18px;
		}
	}

	&.medium {
		input {
			padding: 8px 12px;
			border-radius: 40px;
			font-size: 20px;
		}
	}

	&.large {
		input {
			padding: 10px 14px;
			border-radius: 48px;
			font-size: 22px;
		}
	}

	& > .wrapper > .start-icon {
		user-select: none;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 10px;
		font-size: 20px;
	}
	& > .wrapper > .end-icon {
		user-select: none;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 10px;
		font-size: 20px;
	}
	& > .wrapper > .end-icon-default {
		user-select: none;
		cursor: pointer;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 10px;
		font-size: 20px;
	}
	& > .wrapper > .start-icon ~ .input {
		padding-left: 32px;
	}
	& > .wrapper > .end-icon ~ .input {
		padding-right: 32px;
	}
	& > .wrapper > .end-icon-default ~ .input {
		padding-right: 32px;
	}
	& > .label {
		font-size: 16px;
		margin-left: 10px;
		margin-bottom: 6px;
		cursor: pointer;
		user-select: none;
	}

	& > .sub-text {
		font-size: 16px;
		margin-left: 10px;
		margin-top: 6px;
	}
`
