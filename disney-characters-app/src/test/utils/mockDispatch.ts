import * as reduxCustomHooks from '../../store/hooks';

export const mockDispatch = () => {
  const mockDispatchFunction = jest.fn(() => Promise.resolve());
  const mockUseDispatch = jest.spyOn(reduxCustomHooks, 'useAppDispatch');
  mockUseDispatch.mockReturnValue(mockDispatchFunction);
  return mockDispatchFunction as jest.Mock;
};
