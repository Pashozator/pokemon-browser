import { useEffect } from 'react';

export const useDocumentTitle = (title: string) => {
	useEffect(() => {
		const focusTitle  = `${title} - Pokemon browser`;
		const blurTitle = 'Back to Pokemon browser';

		document.title = focusTitle;

		const blurListener = () => {
			document.title = blurTitle;
		};

		const focusListener = () => {
			document.title = focusTitle;
		};

		window.addEventListener('blur', blurListener);
		window.addEventListener('focus', focusListener);

		return () => {
			window.removeEventListener('blur', blurListener);
			window.removeEventListener('focus', focusListener);
		};
	}, [title]);
};
