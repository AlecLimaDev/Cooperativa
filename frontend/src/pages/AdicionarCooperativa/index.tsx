import styles from "./styles.module.css";
import useAdicionarCooperativa from "../../hooks/useAdicionarCooperativa";

const AdicionarCooperativa = () => {
  const { handleSubmit, addCooperativa, handleInputChange, loading, error } =
    useAdicionarCooperativa();

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <h1 className={styles.title}>
            Adicionar nova Cooperativa de crédito
          </h1>
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
