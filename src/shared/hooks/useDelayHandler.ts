import { useRef } from 'react';

export const useDelayHandler = (callback: () => void, CD: number) => {
	const delay = useRef(true);

	const handler = (): void => {
		if (delay.current) {
			callback();
			delay.current = false;
			setTimeout(() => (delay.current = true), CD);
		}
	};

	return handler;
};
