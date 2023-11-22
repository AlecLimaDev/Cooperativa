import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { instance } from "../helper/axios-instance";

type Data = {
  id: number | string;
  conta_corrente: string;
  nome: string;
};

export default function useCooperados() {
  const [data, setData] = useState<Data[]>([]);
  const [search, setSearch] = useState("");

  const filteredCooperados = data.filter(
    (coop: Data) =>
      data.length === 0 ||
      coop.conta_corrente.includes(search) ||
      coop.nome.includes(search)
  );

  async function fetchData() {
    try {
      const response = await instance.get("/cooperados");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data);
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function handleDelete(id: number) {
    try {
      await instance.delete("/cooperados/" + id);
      window.location.reload();
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error("Erro ao Deletar");
      }
    }
  }
  return {
    handleDelete,
    filteredCooperados,
    data,
    setData,
    search,
    setSearch,
  };
}
