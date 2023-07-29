import { PropsWithChildren, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouterProps } from 'react-router';
import { MemoryRouter } from 'react-router-dom';

import type { PreloadedState } from '@reduxjs/toolkit';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { AppStore, RootState } from 'common/api/store/store';
import { setupStore } from 'common/api/store/store';
import Toast from 'common/components/Toast/Toast';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
  routerProps?: MemoryRouterProps;
}

const renderWithProviders = (
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    routerProps = {},
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  const wrapper = ({ children }: PropsWithChildren): JSX.Element => {
    return (
      <>
        <Toast />
        <MemoryRouter {...routerProps}>
          <Provider store={store}>{children}</Provider>
        </MemoryRouter>
      </>
    );
  };
  return {
    store,
    ...render(ui, { wrapper, ...renderOptions }),
  };
};

export * from '@testing-library/react';
export * from '@testing-library/user-event';
export { renderWithProviders as render };
export { userEvent };
