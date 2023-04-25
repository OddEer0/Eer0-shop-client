import { useRouter } from "next/router"
import { FC } from "react"

import { Container } from "@/shared/ui"

import { FirstSection } from "./ui"
import { SecondSection } from "./ui/SecondSection"

const DeviceView: FC = () => {
	const { query } = useRouter()

	if (typeof query.deviceId !== "string") {
		return null
	}

	return (
		<Container>
			<FirstSection id={query.deviceId} />
			<SecondSection id={query.deviceId} />
		</Container>
	)
}

export default DeviceView
