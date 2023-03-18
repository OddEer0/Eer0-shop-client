import { render, screen } from "@test-utils"
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event"

import { Modal } from "./Modal"

describe("Should render component", () => {
	let closeHandler: () => void
	beforeEach(() => {
		closeHandler = jest.fn()
	})

	it("Should render component", async () => {
		render(
			<>
				<button onClick={closeHandler}></button>
				<div id="myportal" />
				<Modal isShow={true} closeHandler={closeHandler}>
					I Text
				</Modal>
			</>
		)
		expect(screen.getByText("I Text")).toBeInTheDocument()
		await userEvent.click(screen.getByRole("button"))
		expect(closeHandler).toHaveBeenCalled()
		expect(closeHandler).toHaveBeenCalledTimes(1)
		await userEvent.click(screen.getByTestId("overlay"))
		expect(closeHandler).toHaveBeenCalledTimes(2)
	})
})
