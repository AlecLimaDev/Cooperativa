import { useAdicionarFavorito } from "./hooks/useAdicionarFavorito";
import styles from "./styles.module.css";

interface AddFavoritos {
  nome_contato: string;
  tipo_chave_pix: string;
  chave_pix: string;
  lista_de_chaves: string;
}

const AdicionarFavorito = () => {
  const { handleSubmit, data, favoritos, handleInputChange, loading, error } =
    useAdicionarFavorito();

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 className={styles.title}>Adicionar a contatos favoritos</h1>
        <select name="lista_de_chaves" value={favoritos.lista_de_chaves}>
          <option value="">Selecione um tipo de chave PIX</option>
          {data.map((item: AddFavoritos, index) => (
            <option key={index} value={item.lista_de_chaves}>
              {item.tipo_chave_pix}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Nome do Contato"
          name="nome_contato"
          value={favoritos.nome_contato}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Tipo de Chave Pix"
          name="tipo_chave_pix"
          value={favoritos.tipo_chave_pix}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Coloque a chave pix selecionada"
          name="chave_pix"
          value={favoritos.chave_pix}
          onChange={handleInputChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Enviando..." : "Adicionar"}
        </button>
      </form>
      {error && <p>{error}</p>}
    </>
  );
};

export default AdicionarFavorito;
