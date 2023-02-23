import { API_URL } from "@env";
import { IAnts } from "@src/@types/ants";

import axios, { AxiosResponse } from "axios";

const baseURL: string = API_URL;

export const api = axios.create({
  baseURL: baseURL || "https://sg-ants-test.herokuapp.com/",
});

export const getAnts = async (): Promise<AxiosResponse<IAnts | any>> => {
  try {
    const res = await api.get("ants");
    return res;
  } catch (error) {
    if (error.response) {
      console.log("err", error);
      return error.response;
    }
    return error;
  }
};
