import { AxiosError } from "axios";
import { instance } from "../../helper/axios-instance";

export async function fetchData() {
  try {
    const response = await instance.get("/contatos-favoritos");
    console.log(response.data);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      throw new Error(
        "Erro de resposta do servidor: " + axiosError.response.data
      );
    } else if (axiosError.request) {
      throw new Error("Sem resposta do servidor: " + axiosError.request);
    }
  }
}
