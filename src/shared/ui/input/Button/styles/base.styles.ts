import styled from "styled-components"

export const BaseButton = styled.button`
	&.prefix {
		cursor: pointer;
	}

	&.small {
		border-radius: 35px;
		padding: 14px 42px;
		font-size: 16px;
	}

	&.medium {
		border-radius: 90px;
		padding: 16px 62px;
		font-size: 18px;
	}

	&.large {
		border-radius: 60px;
		padding: 16px 97px;
		font-size: 20px;
	}
`
