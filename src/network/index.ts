import axios, { Method } from "axios";
import { OneMemeType } from "../store/Memes/types";

const makeMemesRequest = async (
  method: Method = "GET",
  params: {} = {}
): Promise<{
  data: {
    success: boolean;
    error_message?: string;
    data?: { url: string; page_url: string } | { memes: OneMemeType[] };
  };
}> => {
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
    return { data: { success: false, error_message: (e as Error).toString() } };
  }
};

export default makeMemesRequest;
