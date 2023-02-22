/* eslint-disable @typescript-eslint/no-var-requires */
import { configure, mount, render, shallow } from "enzyme"
import toJson from "enzyme-to-json"

const Adapter = require("enzyme-adapter-react-16")

configure({ adapter: new Adapter() })

global.shallow = shallow
global.render = render
global.mount = mount
global.toJson = toJson

// eslint-disable-next-line no-console
console.error = message => {
	throw new Error(message)
}
