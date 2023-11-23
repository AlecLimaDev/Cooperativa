import { AxiosError } from "axios";
import { instance } from "../../helper/axios-instance";

export async function fetchData() {
    try {
      const response = await instance.get("/cooperativas");
      return response.data
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data);
      }
    }
  }