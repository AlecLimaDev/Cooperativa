import { AxiosError } from "axios";
import { instance } from "../../helper/axios-instance";

export async function handleDelete(id: number) {
    try {
      await instance.delete("/cooperativas/" + id);
      window.location.reload();
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error("Erro ao deletar a Cooperativa de Crédito " + error.response?.data);
      }
    }
  }
