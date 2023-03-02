import { useEffect, useRef } from 'react';

export const useOutsideClick = <T extends HTMLElement>(callback: () => void) => {
	const ref = useRef<T>(null);

	const handleClickOutside = (e: MouseEvent) => {
		const target = e.target as T;
		if (ref.current && !ref.current.contains(target)) {
			callback();
		}
	};

	const handleTouchOutside = (e: TouchEvent) => {
		const target = e.target as T;
		if (ref.current && !ref.current.contains(target)) {
			callback();
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		document.addEventListener('touchstart', handleTouchOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
			document.removeEventListener('touchstart', handleTouchOutside, true);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return ref;
};
