import { LazyMotion } from "framer-motion"
import { FC, PropsWithChildren } from "react"

const loadFeatures = () => import("./features").then(res => res.default)

export const WithLazyMotionProvider: FC<PropsWithChildren> = ({ children }) => {
	return <LazyMotion features={loadFeatures}>{children}</LazyMotion>
}
