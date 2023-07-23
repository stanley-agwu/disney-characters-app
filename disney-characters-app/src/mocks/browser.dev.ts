const startBrowserMsw = () => {
  if (process.env.REACT_APP_API_MOCKING_ENABLED === 'enabled') {
    // eslint-disable-next-line global-require, @typescript-eslint/no-var-requires
    const { worker } = require('./browser');
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, no-console
    worker.start().catch((error: Error) => console.error(error));
  }
};

export default startBrowserMsw;
