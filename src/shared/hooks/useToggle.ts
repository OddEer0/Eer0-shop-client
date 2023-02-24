import { useRef, useState } from 'react';

export const useToggle = (init = false, coolDown = 0, firstCallback?: () => void, secondCallback?: () => void) => {
	const [state, setState] = useState(init);
	const cd = useRef(true);

	const toggleHandler = () => {
		if (cd.current) {
			if (state) {
				setState(false);
				if (secondCallback) {
					secondCallback();
				}
			} else {
				setState(true);
				if (firstCallback) {
					firstCallback();
				}
			}
			cd.current = false;
			setTimeout(() => (cd.current = true), coolDown);
		}
	};

	return { state, toggleHandler };
};
