import { render, screen } from "@test-utils"
import "@testing-library/jest-dom"

import { Button } from "./Button"

describe("Should render Button", () => {
	it("Should render Button", () => {
		render(<Button></Button>)
		expect(screen.getByRole("button")).toHaveClass("prefix")
		expect(screen.getByRole("button")).toBeInTheDocument()
	})

	it("Should render Button with children", () => {
		render(<Button>TEXT</Button>)
		expect(screen.getByText(/text/i))
	})

	it("Should render Button with className", () => {
		render(<Button className="test-class"></Button>)
		expect(screen.getByRole("button")).toHaveClass("test-class")
	})
})

describe("Should render Button every variant, color, size Button component, snapshot", () => {
	it("Should default text button and default medium size render", () => {
		const { asFragment } = render(<Button></Button>)
		expect(screen.getByRole("button")).toHaveClass("text")
		expect(screen.getByRole("button")).not.toHaveClass("contained")
		expect(screen.getByRole("button")).not.toHaveClass("outlined")
		expect(screen.getByRole("button")).toHaveClass("medium")
		expect(screen.getByRole("button")).not.toHaveClass("large")
		expect(screen.getByRole("button")).not.toHaveClass("small")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Should contained button and small size render", () => {
		const { asFragment } = render(<Button variant="contained" size="small"></Button>)
		expect(screen.getByRole("button")).toHaveClass("contained")
		expect(screen.getByRole("button")).not.toHaveClass("text")
		expect(screen.getByRole("button")).not.toHaveClass("outlined")
		expect(screen.getByRole("button")).toHaveClass("small")
		expect(screen.getByRole("button")).not.toHaveClass("large")
		expect(screen.getByRole("button")).not.toHaveClass("medium")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Should outlined button and large size render", () => {
		const { asFragment } = render(<Button variant="outlined" size="large"></Button>)
		expect(screen.getByRole("button")).toHaveClass("outlined")
		expect(screen.getByRole("button")).not.toHaveClass("text")
		expect(screen.getByRole("button")).not.toHaveClass("contained")
		expect(screen.getByRole("button")).not.toHaveClass("small")
		expect(screen.getByRole("button")).toHaveClass("large")
		expect(screen.getByRole("button")).not.toHaveClass("medium")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Should primary color render", () => {
		const { asFragment } = render(<Button></Button>)
		expect(screen.getByRole("button")).toHaveClass("primary")
		expect(screen.getByRole("button")).not.toHaveClass("secondary")
		expect(screen.getByRole("button")).not.toHaveClass("danger")
		expect(screen.getByRole("button")).not.toHaveClass("success")
		expect(screen.getByRole("button")).not.toHaveClass("warning")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Should secondary color render", () => {
		const { asFragment } = render(<Button color="secondary"></Button>)
		expect(screen.getByRole("button")).not.toHaveClass("primary")
		expect(screen.getByRole("button")).toHaveClass("secondary")
		expect(screen.getByRole("button")).not.toHaveClass("danger")
		expect(screen.getByRole("button")).not.toHaveClass("success")
		expect(screen.getByRole("button")).not.toHaveClass("warning")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Should danger color render", () => {
		const { asFragment } = render(<Button color="danger"></Button>)
		expect(screen.getByRole("button")).not.toHaveClass("primary")
		expect(screen.getByRole("button")).not.toHaveClass("secondary")
		expect(screen.getByRole("button")).toHaveClass("danger")
		expect(screen.getByRole("button")).not.toHaveClass("success")
		expect(screen.getByRole("button")).not.toHaveClass("warning")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Should success color render", () => {
		const { asFragment } = render(<Button color="success"></Button>)
		expect(screen.getByRole("button")).not.toHaveClass("primary")
		expect(screen.getByRole("button")).not.toHaveClass("secondary")
		expect(screen.getByRole("button")).not.toHaveClass("danger")
		expect(screen.getByRole("button")).toHaveClass("success")
		expect(screen.getByRole("button")).not.toHaveClass("warning")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Should warning color render", () => {
		const { asFragment } = render(<Button color="warning"></Button>)
		expect(screen.getByRole("button")).not.toHaveClass("primary")
		expect(screen.getByRole("button")).not.toHaveClass("secondary")
		expect(screen.getByRole("button")).not.toHaveClass("danger")
		expect(screen.getByRole("button")).not.toHaveClass("success")
		expect(screen.getByRole("button")).toHaveClass("warning")
		expect(asFragment()).toMatchSnapshot()
	})
})
