interface Props {
	providers: Array<React.JSXElementConstructor<React.PropsWithChildren<unknown>>>
	children: React.ReactNode
}

export const Compose = ({ children, providers }: Props) => {
	return (
		<>
			{providers.reduceRight((acc, Comp) => {
				return <Comp>{acc}</Comp>
			}, children)}
		</>
	)
}
