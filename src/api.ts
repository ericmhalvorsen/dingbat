import axios from "axios";

const defaultHeaders = {
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:53.0) Gecko/20100101 Firefox/53.0'
};

export const get = (url: string, options: Record<string, unknown> = { headers: {} }) =>
  axios.get(url, Object.assign(options, { headers: Object.assign(defaultHeaders, options.headers) }))
