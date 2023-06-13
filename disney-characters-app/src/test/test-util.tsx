import React, { PropsWithChildren, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouterProps } from 'react-router';
import { MemoryRouter } from 'react-router-dom';
import type { PreloadedState } from '@reduxjs/toolkit';
import type {
  Queries,
  RenderHookOptions,
  RenderHookResult,
  RenderOptions,
} from '@testing-library/react';
import { queries, render, renderHook } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Toast from '../components/Toast/Toast';
import type { AppStore, RootState } from '../store/store';
import { setupStore } from '../store/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
  routerProps?: MemoryRouterProps;
}

const renderWithProviders = (
  ui: ReactElement,
  { store = setupStore(), routerProps = {}, ...renderOptions }: ExtendedRenderOptions = {}
) => {
  function Wrapper({ children }: PropsWithChildren): JSX.Element {
    return (
      <>
        <Toast />
        <MemoryRouter {...routerProps}>
          <Provider store={store}>{children}</Provider>
        </MemoryRouter>
      </>
    );
  }
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
    user: userEvent,
  };
};

const renderHookWithProviders = function <
  Result,
  Props,
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container
>(
  render: (initialProps: Props) => Result,
  {
    store = setupStore(),
    routerProps = {},
    ...renderOptions
  }: RenderHookOptions<Props, Q, Container, BaseElement> & {
    preloadedState?: PreloadedState<RootState>;
    store?: AppStore;
    routerProps?: MemoryRouterProps;
  } = {}
): RenderHookResult<Result, Props> & { store?: AppStore } {
  function Wrapper({ children }: PropsWithChildren): JSX.Element {
    return (
      <>
        <Toast />
        <MemoryRouter {...routerProps}>
          <Provider store={store}>{children}</Provider>
        </MemoryRouter>
      </>
    );
  }

  return {
    store,
    ...renderHook<Result, Props, Q, Container, BaseElement | DocumentFragment>(render, {
      wrapper: Wrapper,
      ...renderOptions,
    }),
  };
};

export * from '@testing-library/react';
export * from '@testing-library/user-event';
export { renderWithProviders as render };
export { renderHookWithProviders as renderHook };
