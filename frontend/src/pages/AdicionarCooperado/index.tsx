import styles from "./styles.module.css";
import useAdicionarCooperado from "../../hooks/useAdicionarCooperado";

const AdicionarCooperado = () => {
  const { addCooperado, handleSubmit, handleInputChange, loading, error } =
    useAdicionarCooperado();

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <h1 className={styles.title}>Adicionar novo Cooperado</h1>
          <label>Coloque sua Conta Corrente</label>
          <input
            type="number"
            placeholder="Ex: 32339-2"
            name="conta_corrente"
            value={addCooperado.conta_corrente}
            onChange={handleInputChange}
          />
          <label>Coloque seu nome</label>
          <input
            type="text"
            placeholder="Ex: Alec Lima"
            name="nome"
            value={addCooperado.nome}
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

export default AdicionarCooperado;
