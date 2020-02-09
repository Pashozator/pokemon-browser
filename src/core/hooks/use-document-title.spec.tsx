import { useDocumentTitle } from './use-document-title';
import { renderHook } from '@testing-library/react-hooks';

describe('useDocumentTitle', () => {
	it('should change title', () => {
		renderHook(() => useDocumentTitle('Home'));

		expect(document.title).toBe('Home - Pokemon browser');
	});
});
