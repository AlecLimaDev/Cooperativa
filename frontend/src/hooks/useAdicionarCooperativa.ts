import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../helper/axios-instance";

interface Adicionar {
  id?: number | null;
  codigos: string;
  descricao: string;
}

export default function useAdicionarCooperativa() {
  const navigate = useNavigate();

  const [addCooperativa, setAddCooperativa] = useState<Adicionar>({
    id: null,
    codigos: "",
    descricao: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddCooperativa({ ...addCooperativa, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await instance.post("/cooperativas", addCooperativa);
      if (response.status === 200) {
        navigate("/");
      } else {
        setError("Falha na solicitação.");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          setError(error.response.data.message);
        } else {
          setError("Erro desconhecido ocorreu");
        }
      } else {
        setError("Erro desconhecido ocorreu");
      }
    }
    setLoading(false);
  };

  return {
    loading,
    setLoading,
    addCooperativa,
    setAddCooperativa,
    error,
    setError,
    handleInputChange,
    handleSubmit,
  };
}
