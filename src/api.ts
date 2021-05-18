import axios from "axios";

const defaultHeaders = {
};

export const get = (url: string, options: Record<string, unknown> = { headers: {} }) =>
  axios.get(url, Object.assign(options, { headers: Object.assign(defaultHeaders, options.headers) }))
