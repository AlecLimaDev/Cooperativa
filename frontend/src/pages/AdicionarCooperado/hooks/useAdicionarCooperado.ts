import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../../../helper/axios-instance";

interface Cooperado {
  conta_corrente: string;
  nome: string;
}

export function useAdicionarCooperado() {
  const navigate = useNavigate();
  const [addCooperado, setAddCooperado] = useState<Cooperado>({
    conta_corrente: "",
    nome: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddCooperado({ ...addCooperado, [name]: value });
  };

  const fetchData = async () => {
    try {
      const response = await instance.get("/cooperados");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await instance.post("/cooperados", addCooperado);
      if (response.status === 200) {
        navigate("/cooperados");
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
    error,
    addCooperado,
    setError,
    handleSubmit,
    handleInputChange,
    setAddCooperado,
    navigate,    
  };
}
