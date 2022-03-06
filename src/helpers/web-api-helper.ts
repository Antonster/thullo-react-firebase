import axios, { AxiosRequestConfig, AxiosPromise, Method } from 'axios';
import queryString from 'query-string';

interface queryArgs {
  type: Method;
  endpoint: string;
  domain?: string;
  query?: any;
  request?: {
    [key: string]: string
  }
}

const getFetchUrl = (args: queryArgs): string =>
  (args.domain ? args.domain : '') +
  args.endpoint +
  (args.query ? `?${queryString.stringify(args.query)}` : '');

const getFetchOpt = (args: queryArgs): AxiosRequestConfig => {
  const options: AxiosRequestConfig = {
    method: args.type,
    headers: {}
  };

  if (args.request) {
    options.data = {
      ...args.request,
    };
  }

  return options;
};

const callWebApi = async (args: queryArgs): Promise<AxiosPromise | undefined> => {
  try {
    const res = await axios({
      url: getFetchUrl(args),
      ...getFetchOpt(args),
    });
    return res.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default callWebApi;
