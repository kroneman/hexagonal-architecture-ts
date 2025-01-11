import app from './app';

const start = (port: number) => {
  try {
    app.listen(port, () => {
      console.info(`Express server listening on port ${port}`);
    });
  } catch (error) {
    console.error('Failed to start application', error);
    process.exit(1);
  }
};

start(3000);
