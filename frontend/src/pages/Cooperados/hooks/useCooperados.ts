import { useState, useEffect } from "react";
import { fetchData } from "../../../services/Cooperados/fetch-data";

export type tDataCooperados = {
  id: number | string;
  conta_corrente: string;
  nome: string;
};

export default function useCooperados() {
  const [data, setData] = useState<tDataCooperados[]>([]);
  const [search, setSearch] = useState("");

  const filteredCooperados = data.filter(
    (coop: tDataCooperados) =>
      data.length === 0 ||
      coop.conta_corrente.includes(search) ||
      coop.nome.includes(search)
  );

  useEffect(() => {
    const controller = new AbortController()

    async function handleFetchData() {
      const data = await fetchData();
      setData(data);
    }

    handleFetchData();

    return () => {
      controller.abort()
    }
  }, []);

  return {
    filteredCooperados,
    setSearch,
  };
}
