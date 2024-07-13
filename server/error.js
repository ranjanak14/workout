// eslint-disable-next-line import/prefer-default-export
export const createError = (status, message) => {
  console.log(message);
  const err = new Error();
  err.status = status;
  err.message = message;
  return err;
};
