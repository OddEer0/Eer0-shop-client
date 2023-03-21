import styled from "styled-components"

export const $Accordion = styled.div`
	display: inline-block;
`

export const $AccordionSummary = styled.div`
	.accordion-summary-header {
		position: relative;
		padding: 8px 16px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: space-between;
		user-select: none;

		h4,
		p {
			margin-right: 15px;
		}
	}

	.accordion-summary-body {
		overflow: hidden;
		padding-left: 16px;
	}
`
