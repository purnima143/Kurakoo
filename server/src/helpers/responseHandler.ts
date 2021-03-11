interface FormattedResponse<T> {
  success: boolean,
  code: number,
  message: string,
  data: T,
}

const responseHandler = <T extends any>(success: boolean, code: number, message: string, data: T): FormattedResponse<T> => {
  return {
    success,
    code,
    message,
    data,
  };
};

export default responseHandler;