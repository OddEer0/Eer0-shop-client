import styled from "styled-components"

export const SwitchWrapper = styled.div`
	position: relative;
	display: inline-block;

	& > input {
		visibility: hidden;
		opacity: 0;
		position: absolute;
	}

	& > .switch {
		position: relative;
		background: ${({ theme }) => theme.ui.color.default_50}32;
		cursor: pointer;
		transition: background 0.3s ease-in-out;

		& > .circle {
			content: "";
			background: white;
			display: inline-block;
			border-radius: 50%;
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: 3px;
			transition: left 0.2s ease-in-out;

			&.icon {
				background: none;
				color: white;
				font-size: 29px;
			}
		}
	}

	&.medium {
		& > input {
			&:checked ~ .switch .circle {
				left: calc(100% - 28px);
			}
		}

		& > .switch {
			width: 62px;
			height: 31px;
			border-radius: 25px;

			& > .circle {
				width: 25px;
				height: 25px;
			}
		}
	}

	&.small {
		& > input {
			&:checked ~ .switch .circle {
				left: calc(100% - 23px);
			}
		}

		& > .switch {
			width: 52px;
			height: 26px;
			border-radius: 25px;

			& > .circle {
				width: 20px;
				height: 20px;
			}
		}
	}

	&.large {
		& > input:checked {
			& ~ .switch .circle {
				left: calc(100% - 32px);
			}
		}

		& > .switch {
			width: 75px;
			height: 35px;
			border-radius: 30px;

			& > .circle {
				width: 29px;
				height: 29px;
			}
		}
	}

	&.primary {
		& > input:checked {
			& ~ .switch {
				background: ${({ theme }) => theme.ui.color.primary_50};
			}
		}
	}

	&.secondary {
		& > input:checked {
			& ~ .switch {
				background: ${({ theme }) => theme.ui.color.secondary_50};
			}
		}
	}

	&.tertiary {
		& > input:checked {
			& ~ .switch {
				background: ${({ theme }) => theme.ui.color.tertiary_50};
			}
		}
	}

	&.quaternary {
		& > input:checked {
			& ~ .switch {
				background: ${({ theme }) => theme.ui.color.quaternary_50};
			}
		}
	}

	&.success {
		& > input:checked {
			& ~ .switch {
				background: ${({ theme }) => theme.ui.color.success_50};
			}
		}
	}

	&.danger {
		& > input:checked {
			& ~ .switch {
				background: ${({ theme }) => theme.ui.color.danger_50};
			}
		}
	}

	&.warning {
		& > input:checked {
			& ~ .switch {
				background: ${({ theme }) => theme.ui.color.warning_50};
			}
		}
	}
`
