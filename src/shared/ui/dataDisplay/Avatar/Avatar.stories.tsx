/* eslint-disable @next/next/no-img-element */
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ChangeEvent, useState } from "react"
import { MdOutlineAddAPhoto } from "react-icons/md"

import { AVATAR_URL, AVATAR_URL2, AVATAR_URL3, AVATAR_URL4, AVATAR_URL5, AVATAR_URL6 } from "@/shared/constants"

import { Avatar } from "./Avatar"

export default {
	title: "UI/Data Display/Avatar",
	component: Avatar
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
	url: AVATAR_URL,
	defaultAvatar: "Marlen Karimov"
}

export const Variant = () => (
	<>
		<h4>default circle</h4>
		<Avatar url={AVATAR_URL} />
		<h4>rounded</h4>
		<Avatar variant="rounded" url={AVATAR_URL2} />
		<h4>square</h4>
		<Avatar variant="square" url={AVATAR_URL3} />
	</>
)

export const Size = () => (
	<>
		<h4>xlarge</h4>
		<Avatar avatarSize="xlarge" url={AVATAR_URL} />
		<h4>large</h4>
		<Avatar avatarSize="large" url={AVATAR_URL2} />
		<h4>default medium</h4>
		<Avatar url={AVATAR_URL3} />
		<h4>small</h4>
		<Avatar avatarSize="small" url={AVATAR_URL4} />
		<h4>xsmall</h4>
		<Avatar avatarSize="xsmall" url={AVATAR_URL5} />
		<h4>xxsmall</h4>
		<Avatar avatarSize="xxsmall" url={AVATAR_URL6} />
	</>
)

export const DefaultAvatar = () => (
	<>
		<Avatar avatarSize="xlarge" defaultAvatar="Marlen Karimov" />
		<Avatar avatarSize="large" defaultAvatar="Dima Zhookov" />
		<Avatar defaultAvatar="Abobo Kavoonov" />
		<Avatar avatarSize="small" defaultAvatar="Yana Yanovna" />
		<Avatar avatarSize="xsmall" defaultAvatar="Borey" />
		<Avatar avatarSize="xxsmall" defaultAvatar="Venti Windy" />
	</>
)

export const Children = () => <Avatar>CH</Avatar>

export const Changeable = () => {
	const [img, setImg] = useState(AVATAR_URL)
	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files
		if (files?.length) {
			const file = files[0]
			const reader = new FileReader()
			reader.readAsDataURL(file)
			reader.onload = ev => {
				setImg(ev.target?.result as string)
			}
		}
	}

	return (
		<>
			<p>Default changeable</p>
			<Avatar onChange={changeHandler} isChangeable={true} avatarSize="xlarge" url={img} />
			<p>Custom changeable Icon</p>
			<Avatar isChangeable={true} changeableIcon={<MdOutlineAddAPhoto />} avatarSize="xlarge" url={AVATAR_URL2} />
		</>
	)
}
