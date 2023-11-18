import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { instance } from "../helper/axios-instance";

type Data = {
  id?: number;
  codigos: string;
  descricao: string;
};

export default function useCooperativa() {
  const [data, setData] = useState<Data[]>([]);
  const [search, setSearch] = useState("");

  const filteredCooperativa = data.filter(
    (cooperativa: Data) =>
      data.length === 0 ||
      cooperativa.codigos.toLowerCase().includes(search) ||
      cooperativa.descricao.toLowerCase().includes(search)
  );

  async function fetchData() {
    try {
      const response = await instance.get("/cooperativas");
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
      await instance.delete("/cooperativas/" + id);
      window.location.reload();
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error("Erro ao deletar");
      }
    }
  }

  return {
    data,
    setData,
    search,
    setSearch,
    filteredCooperativa,
    fetchData,
    handleDelete,
  };
}
