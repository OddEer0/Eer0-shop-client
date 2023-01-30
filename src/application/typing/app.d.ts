declare global {
	export type Nullable<T> = T | null;

	export type Keys<T extends Record<string, unknown>> = keyof T;
	export type Values<T extends Record<string, unknown>> = T[Keys<T>];
}

export {};

declare module 'react-select/dist/declarations/src/Select' {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	export interface Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>> {
		selectSize?: 'lg' | 'xs';
		className?: string;
		label?: string;
	}
}
