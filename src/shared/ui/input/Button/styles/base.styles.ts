import styled from "styled-components"

export const BaseButton = styled.button`
	&.prefix {
		cursor: pointer;
	}

	&.small {
		border-radius: 35px;
		padding: 10px 24px;
		font-size: 16px;
	}

	&.medium {
		border-radius: 90px;
		padding: 14px 32px;
		font-size: 18px;
	}

	&.large {
		border-radius: 60px;
		padding: 16px 46px;
		font-size: 20px;
	}
`
