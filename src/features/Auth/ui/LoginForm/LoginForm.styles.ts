import Link from "next/link"
import styled from "styled-components"

import { Button } from "@/shared/ui"

export const $Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const $Input = styled.input`
	margin: 20px 0;
`

export const $Button = styled(Button)`
	margin-top: 35px;
`

export const $FormWrapper = styled.div`
	padding: 40px;
	border-radius: 15px;
	box-shadow: ${({ theme }) => theme.base.boxShadow.primary};
	background: ${({ theme }) => theme.base.bg.primary_40};
`

export const $Title = styled.h2`
	text-align: center;
	margin-bottom: 25px;
`

export const $LinkTitle = styled.h6`
	margin-top: 50px;
	margin-bottom: 5px;
`

export const $Link = styled(Link)`
	&:hover {
		text-decoration: underline;
	}
`
