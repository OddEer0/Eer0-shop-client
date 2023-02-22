/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallow } from "enzyme"

import { Button } from "./Button"

describe("Рендер кнопки", () => {
	let component: any
	beforeEach(() => {
		component = shallow(<Button />)
	})

	it("Проверка на рендер кнопки", () => {
		const button = component.find("button")
		expect(button.length).toBe(1)
	})

	it("Рендер contained кнопки", () => {
		const component = shallow(<Button variant="contained" />)
		const wrapper = component.find(".contained")
		expect(wrapper.length).toBe(1)
	})

	it("Snapshot кнопки", () => {
		const component = shallow(<Button variant="contained">BUTTON</Button>)
		expect(component).toMatchSnapshot()
	})
})
