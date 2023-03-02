/* eslint-disable import/order */
import { fireEvent, render, screen } from "@test-utils"
import "@testing-library/jest-dom"

import { Avatar } from "./Avatar"

describe("Should render component", () => {
	it("Should render component", () => {
		render(<Avatar>CH</Avatar>)
		expect(screen.getByText(/ch/i)).toBeInTheDocument()
	})
})

describe("Avatar every props", () => {
	it("Render defaultAvatar", () => {
		const { asFragment, getByText } = render(<Avatar defaultAvatar="Marlen Karimov" />)
		expect(getByText(/mk/i)).toBeInTheDocument()
		expect(asFragment()).toMatchSnapshot()
	})

	it("Default circle variant", () => {
		const { asFragment, getByText } = render(<Avatar defaultAvatar="Marlen Karimov" />)
		expect(getByText(/mk/i)).toHaveClass("circle")
		expect(getByText(/mk/i)).not.toHaveClass("rounded")
		expect(getByText(/mk/i)).not.toHaveClass("square")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Rounded variant", () => {
		const { asFragment, getByText } = render(<Avatar variant="rounded" defaultAvatar="Marlen Karimov" />)
		expect(getByText(/mk/i)).not.toHaveClass("circle")
		expect(getByText(/mk/i)).toHaveClass("rounded")
		expect(getByText(/mk/i)).not.toHaveClass("square")
		expect(asFragment()).toMatchSnapshot()
	})

	it("Square variant", () => {
		const { asFragment, getByText } = render(<Avatar variant="square" defaultAvatar="Marlen Karimov" />)
		expect(getByText(/mk/i)).not.toHaveClass("circle")
		expect(getByText(/mk/i)).not.toHaveClass("rounded")
		expect(getByText(/mk/i)).toHaveClass("square")
		expect(asFragment()).toMatchSnapshot()
	})

	it("xlarge avatarSize", () => {
		const { asFragment, getByText } = render(<Avatar avatarSize="xlarge" defaultAvatar="Marlen Karimov" />)
		expect(getByText(/mk/i)).toHaveClass("xlarge")
		expect(getByText(/mk/i)).not.toHaveClass("large")
		expect(getByText(/mk/i)).not.toHaveClass("medium")
		expect(getByText(/mk/i)).not.toHaveClass("small")
		expect(getByText(/mk/i)).not.toHaveClass("xsmall")
		expect(getByText(/mk/i)).not.toHaveClass("xxsmall")
		expect(asFragment()).toMatchSnapshot()
	})

	it("large avatarSize", () => {
		const { asFragment, getByText } = render(<Avatar avatarSize="large" defaultAvatar="Marlen Karimov" />)
		expect(getByText(/mk/i)).not.toHaveClass("xlarge")
		expect(getByText(/mk/i)).toHaveClass("large")
		expect(getByText(/mk/i)).not.toHaveClass("medium")
		expect(getByText(/mk/i)).not.toHaveClass("small")
		expect(getByText(/mk/i)).not.toHaveClass("xsmall")
		expect(getByText(/mk/i)).not.toHaveClass("xxsmall")
		expect(asFragment()).toMatchSnapshot()
	})

	it("default medium avatarSize", () => {
		const { asFragment, getByText } = render(<Avatar defaultAvatar="Marlen Karimov" />)
		expect(getByText(/mk/i)).not.toHaveClass("xlarge")
		expect(getByText(/mk/i)).not.toHaveClass("large")
		expect(getByText(/mk/i)).toHaveClass("medium")
		expect(getByText(/mk/i)).not.toHaveClass("small")
		expect(getByText(/mk/i)).not.toHaveClass("xsmall")
		expect(getByText(/mk/i)).not.toHaveClass("xxsmall")
		expect(asFragment()).toMatchSnapshot()
	})

	it("small avatarSize", () => {
		const { asFragment, getByText } = render(<Avatar avatarSize="small" defaultAvatar="Marlen Karimov" />)
		expect(getByText(/mk/i)).not.toHaveClass("xlarge")
		expect(getByText(/mk/i)).not.toHaveClass("large")
		expect(getByText(/mk/i)).not.toHaveClass("medium")
		expect(getByText(/mk/i)).toHaveClass("small")
		expect(getByText(/mk/i)).not.toHaveClass("xsmall")
		expect(getByText(/mk/i)).not.toHaveClass("xxsmall")
		expect(asFragment()).toMatchSnapshot()
	})

	it("xsmall avatarSize", () => {
		const { asFragment, getByText } = render(<Avatar avatarSize="xsmall" defaultAvatar="Marlen Karimov" />)
		expect(getByText(/mk/i)).not.toHaveClass("xlarge")
		expect(getByText(/mk/i)).not.toHaveClass("large")
		expect(getByText(/mk/i)).not.toHaveClass("medium")
		expect(getByText(/mk/i)).not.toHaveClass("small")
		expect(getByText(/mk/i)).toHaveClass("xsmall")
		expect(getByText(/mk/i)).not.toHaveClass("xxsmall")
		expect(asFragment()).toMatchSnapshot()
	})

	it("xxsmall avatarSize", () => {
		const { asFragment, getByText } = render(<Avatar avatarSize="xxsmall" defaultAvatar="Marlen Karimov" />)
		expect(getByText(/mk/i)).not.toHaveClass("xlarge")
		expect(getByText(/mk/i)).not.toHaveClass("large")
		expect(getByText(/mk/i)).not.toHaveClass("medium")
		expect(getByText(/mk/i)).not.toHaveClass("small")
		expect(getByText(/mk/i)).not.toHaveClass("xsmall")
		expect(getByText(/mk/i)).toHaveClass("xxsmall")
		expect(asFragment()).toMatchSnapshot()
	})

	it("changeable avatar", () => {
		const { asFragment } = render(<Avatar data-testid="file" defaultAvatar="Marlen Karimov" isChangeable={true} />)
		expect(screen.getByTestId("file")).toBeInTheDocument()
		expect(screen.getByTestId("label")).toBeInTheDocument()
		expect(asFragment()).toMatchSnapshot()
	})
})

describe("Avatar event", () => {
	it("Change event", async () => {
		const uploadHandler = jest.fn()
		render(<Avatar data-testid="file" onChange={uploadHandler} defaultAvatar="Marlen Karimov" isChangeable={true} />)
		const file = new File(["dummy content"], "example.png", { type: "image/png" })
		await fireEvent.change(screen.getByTestId("file"), { target: { files: [file] } })
		expect(uploadHandler).toHaveBeenCalled()
	})
})
