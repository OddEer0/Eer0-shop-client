import { render, screen } from "@test-utils"
import "@testing-library/jest-dom"

import { Button } from "../Button/Button"

import { ButtonGroup } from "./ButtonGroup"

describe("Should render ButtonGroup component", () => {
	it("Should render ButtonGroup", () => {
		render(<ButtonGroup data-testid="eer0"></ButtonGroup>)
		expect(screen.getByTestId("eer0")).toBeInTheDocument()
	})

	it("Should render ButtonGroup with children", () => {
		render(
			<ButtonGroup data-testid="eer0">
				<Button data-testid="eer0-button"></Button>
			</ButtonGroup>
		)
		expect(screen.getByTestId("eer0")).toBeInTheDocument()
		expect(screen.getByTestId("eer0-button")).toBeInTheDocument()
	})

	it("Should render ButtonGroup with className", () => {
		render(<ButtonGroup data-testid="eer0" className="test-class"></ButtonGroup>)
		expect(screen.getByTestId("eer0")).toHaveClass("test-class")
	})
})

describe("Should render ButtonGroup every direction, screenshot", () => {
	it("Should render row direction", () => {
		const { asFragment } = render(<ButtonGroup data-testid="eer0"></ButtonGroup>)
		expect(screen.getByTestId("eer0")).toHaveClass("row")
		expect(screen.getByTestId("eer0")).not.toHaveClass("column")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Should render column direction", () => {
		const { asFragment } = render(<ButtonGroup direction="column" data-testid="eer0"></ButtonGroup>)
		expect(screen.getByTestId("eer0")).toHaveClass("column")
		expect(screen.getByTestId("eer0")).not.toHaveClass("row")
		expect(asFragment()).toMatchSnapshot()
	})
})
