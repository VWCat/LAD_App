import axios, { AxiosRequestConfig } from "axios";

const makeRequest = async ({
  method = "GET",
  url,
  data = {},
  params = {},
}: AxiosRequestConfig) => {
  try {
    const response = await axios({
      method,
      url,
      baseURL: "https://api.imgflip.com/",
    });
    return response;
  } catch (e) {
    return undefined;
  }
};

export default makeRequest;
