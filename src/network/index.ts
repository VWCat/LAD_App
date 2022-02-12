import axios, { AxiosError, AxiosRequestConfig } from "axios";

const makeMemesRequest = async ({
  method = "GET",
  url,
  data = {},
  params = {},
}: // eslint-disable-next-line consistent-return
AxiosRequestConfig) => {
  try {
    const response = await axios({
      method,
      url,
      baseURL: "https://api.imgflip.com/",
    });

    return { data: response.data.data.memes, status: response.status };
  } catch (e) {
    return { data: [], status: e };
  }
  // } catch (error: Ty) {
  //   if (error.response) {
  //     console.log(error.response.data);
  //     console.log(error.response.status);
  //     console.log(error.response.headers);
  //   }
  //
  // }
};

export default makeMemesRequest;
