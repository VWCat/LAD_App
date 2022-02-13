import axios, { Method } from "axios";

// const makeMemesRequest = async ({
//   method = "GET",
//   params = {},
// }: // eslint-disable-next-line consistent-return
// AxiosRequestConfig) => {

const makeMemesRequest = async (method: Method = "GET", params: {} = {}) => {
  try {
    const request: {
      method: Method;
      url: string;
      baseURL: string;
      params?: {};
    } = {
      method,
      url: "get_memes",
      baseURL: "https://api.imgflip.com/",
    };

    if (method === "POST") {
      request.url = "caption_image";
      request.params = params;
    }

    const response = await axios(request);

    return {
      data: response.data.data.memes,
      status: response.status,
      success: response.data.success,
    };
  } catch (e) {
    return { data: [], status: e, success: false };
  }
};

export default makeMemesRequest;
