export const createMockXHR = (responseJSON: any) => {
	const mockXHR = {
		open: jest.fn(),
		send: jest.fn(),
		readyState: 4,
		responseText: JSON.stringify(
			responseJSON || {}
		)
	};
	return mockXHR;
};
