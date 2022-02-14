import axios, { Method } from "axios";

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
      data: response.data,
    };
  } catch (e) {
    return { data: [] };
  }
};

export default makeMemesRequest;
