import { useState, useEffect } from "react";
import { fetchData } from "../../../services/Cooperativa/fetch-data";
import { handleDelete } from "../../../services/Cooperativa/delete-by-Id";

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

  useEffect(() => {
    async function handleFetchData() {
      const data = await fetchData();
      setData(data);
    }
    handleFetchData();
  }, []);

  return {
    search,
    filteredCooperativa,
    setSearch,
    handleDelete,
  };
}
