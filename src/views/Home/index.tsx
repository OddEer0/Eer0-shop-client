import { FC } from "react"
import styled from "styled-components"

import { useEncodeParams } from "@/shared/hooks"
import { Button, Meta } from "@/shared/ui"

const Wrapper = styled.div`
	height: 2000px;
`

const HomeView: FC = () => {
	const params = useEncodeParams()

	const clickHandler = () => {
		params.append("test", "test1")
	}

	const clickHandler2 = () => {
		params.append("test", "test2")
	}

	const clickHandler3 = () => {
		params.remove("test", "test1")
	}

	const clickHandler4 = () => {
		params.removeAll("test")
	}

	const clickHandler5 = () => {
		params.append("testsecond", "testsecond1")
	}

	const clickHandler6 = () => {
		params.removeAllParams()
	}

	const clickHandler7 = () => {
		console.log(params.getParams("test"))
	}

	return (
		<>
			<Button variant="contained" onClick={clickHandler}>
				add test = test1
			</Button>
			<Button variant="contained" onClick={clickHandler5}>
				add testsecond = testsecond1
			</Button>
			<Button variant="contained" onClick={clickHandler3}>
				remove test = test1
			</Button>
			<Button variant="contained" onClick={clickHandler2}>
				add test = test2
			</Button>
			<Button variant="contained" onClick={clickHandler4}>
				remove all test query
			</Button>
			<Button variant="contained" onClick={clickHandler6}>
				remove all query
			</Button>
			<Button variant="contained" onClick={clickHandler7}>
				log test params
			</Button>
			<Meta title="Eer0 Shop | Home" />
			<Wrapper />
		</>
	)
}

export default HomeView
