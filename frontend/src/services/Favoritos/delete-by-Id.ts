import { instance } from "../../helper/axios-instance";

export async function handleDelete(id: number) {
    try {
      await instance.delete(`/contatos-favoritos/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }