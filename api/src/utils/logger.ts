const PREFIX = '[APP]';
const PREFIX_ERROR = '[APP ERROR]';

export const logger = {
  log(message: string, data?: unknown): void {
    if (data !== undefined) {
      console.log(PREFIX, message, data);
    } else {
      console.log(PREFIX, message);
    }
  },

  error(message: string, error?: unknown): void {
    if (error !== undefined) {
      console.error(PREFIX_ERROR, message, error);
    } else {
      console.error(PREFIX_ERROR, message);
    }
  },
};
