import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { instance } from "../helper/axios-instance";

interface Data {
  id?: number;
  nome_contato: string;
  tipo_chave_pix: string;
  chave_pix: string;
  cooperado_id?: number;
}

export function useFavoritos() {
  const [data, setData] = useState<Data[]>([]);
  const [search, setSearch] = useState("");

  const filteredFavoritos = data.filter(
    (favoritos: Data) =>
      search.length === 0 ||
      favoritos.chave_pix.includes(search) ||
      favoritos.nome_contato.includes(search) ||
      favoritos.tipo_chave_pix.includes(search)
  );

  async function fetchData() {
    try {
      await instance.get("/contatos-favoritos").then((response) => {
        setData(response.data);
      });
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        throw new Error("Erro de resposta do servidor: " + axiosError.response.data);
      } else if (axiosError.request) {
        throw new Error("Sem resposta do servidor: " + axiosError.request);
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function handleDelete(id: number) {
    try {
      await instance.delete(`/contatos-favoritos/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return {
    data,
    filteredFavoritos,
    fetchData,
    handleDelete,
    search,
    setSearch,
  };
}
