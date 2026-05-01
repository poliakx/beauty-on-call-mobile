const PREFIX = '[APP]';
const PREFIX_WARN = '[APP WARN]';
const PREFIX_ERROR = '[APP ERROR]';

export const logger = {
  log(...args: unknown[]): void {
    if (__DEV__) {
      console.log(PREFIX, ...args);
    }
  },

  warn(...args: unknown[]): void {
    if (__DEV__) {
      console.warn(PREFIX_WARN, ...args);
    }
  },

  error(...args: unknown[]): void {
    console.error(PREFIX_ERROR, ...args);
  },
};
