import { FC, PropsWithChildren } from "react"

interface ComposeChildren {
	providers: Array<React.JSXElementConstructor<React.PropsWithChildren<unknown>>>
}

export const Compose: FC<PropsWithChildren<ComposeChildren>> = ({ children, providers }) => {
	return (
		<>
			{providers.reduceRight((acc, Comp) => {
				return <Comp>{acc}</Comp>
			}, children)}
		</>
	)
}
