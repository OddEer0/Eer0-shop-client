import styled from "styled-components"

import { Button } from "@/shared/ui"

export const $FormWrapper = styled.div`
	padding: 40px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: ${({ theme }) => theme.base.bg.primary_60};
	border-radius: 15px;
	box-shadow: ${({ theme }) => theme.base.boxShadow.primary};
`

export const $Title = styled.h4`
	text-align: center;
	margin-top: 40px;
	margin-bottom: 30px;
`

export const $Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const $FormInputSection = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 10px;
	row-gap: 35px;
`

export const $Button = styled(Button)`
	margin-top: 40px;
	margin-bottom: 40px;
`
