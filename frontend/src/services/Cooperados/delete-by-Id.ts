import { AxiosError } from "axios";
import { instance } from "../../helper/axios-instance";

export async function handleDelete(id: number) {
    try {
      await instance.delete("/cooperados/" + id);
      window.location.reload();
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        throw new Error("Erro ao deletar Cooperado " + error.response?.data);
      }
    }
  }