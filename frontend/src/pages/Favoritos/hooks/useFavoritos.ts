import { useState, useEffect } from "react";
import { handleDelete } from "../../../services/Favoritos/delete-by-Id";
import { fetchData } from "../../../services/Favoritos/fetch-data";

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

  useEffect(() => {
    async function handleFetchData() {
      const data = await fetchData();
      setData(data);
    }
    handleFetchData();
  }, []);

  return {
    data,
    filteredFavoritos,
    search,
    fetchData,
    handleDelete,
    setSearch,
  };
}
