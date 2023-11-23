import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../../../helper/axios-instance";
import { fetchData } from "../../../services/AdicionarFavorito/fetch-data";

interface AddFavoritos {
  nome_contato: string;
  tipo_chave_pix: string;
  chave_pix: string;
  lista_de_chaves: string;
}

export function useAdicionarFavorito() {
  const navigate = useNavigate();

  const [favoritos, setFavoritos] = useState<AddFavoritos>({
    nome_contato: "",
    tipo_chave_pix: "",
    chave_pix: "",
    lista_de_chaves: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<AddFavoritos[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFavoritos({ ...favoritos, [name]: value });
  };

  useEffect(() => {
    async function handleFetchData() {
      const data = await fetchData();
      console.log(data);
      setData(data);
    }
    handleFetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await instance.post("/contatos-favoritos", favoritos);
      if (response.status === 200) {
        navigate("/contatos-favoritos");
      } else {
        setError("Falha na solicitação.");
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        console.log("Erro de resposta do servidor:", axiosError.response.data);
      } else if (axiosError.request) {
        console.log("Sem resposta do servidor:", axiosError.request);
      }
    }
    setLoading(false);
  };

  return {
    loading,
    favoritos,
    error,
    data,
    setLoading,
    setError,
    setData,
    handleInputChange,
    handleSubmit,
    setFavoritos,
  };
}
