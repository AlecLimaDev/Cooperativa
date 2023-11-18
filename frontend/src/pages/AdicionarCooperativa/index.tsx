import S from "./styles.module.css";
import useAdicionarCooperativa from "../../hooks/useAdicionarCooperativa";

const AdicionarCooperativa = () => {
  const { handleSubmit, addCooperativa, handleInputChange, loading, error } =
    useAdicionarCooperativa();

  return (
    <>
      <h1 className={S.title}>Adicionar nova Cooperativa de crédito</h1>
      <div className={S.container}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Resumo da sua Cooperativa..."
            name="descricao"
            value={addCooperativa.descricao}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Nome da Cooperativa..."
            name="codigos"
            value={addCooperativa.codigos}
            onChange={handleInputChange}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Enviando..." : "Adicionar"}
          </button>
        </form>
        {error && <p>{error}</p>}
      </div>
    </>
  );
};

export default AdicionarCooperativa;
