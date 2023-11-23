import { AxiosError } from "axios";
import { instance } from "../../helper/axios-instance";

export async function handleDelete(id: number) {
  try {
    await instance.delete(`/contatos-favoritos/${id}`);
    window.location.reload();
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(
        "Erro ao deletar o Contato Favorito " + error.response?.data
      );
    }
  }
}
