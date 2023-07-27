import 'whatwg-fetch';
import 'jest-canvas-mock';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import 'common/utils/extensions';

import { server } from './mocks/server';

export const scrollPaginationToViewMock = jest.fn();
Element.prototype.scrollIntoView = scrollPaginationToViewMock;

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());
