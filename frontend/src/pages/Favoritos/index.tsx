import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useFavoritos } from "../../hooks/useFavoritos";
import { InputSearch } from "../../components/Input/InputSearch";
import { ButtonNext } from "../../components/ButtonNext/ButtonNext";

interface Data {
  id?: number;
  nome_contato: string;
  tipo_chave_pix: string;
  chave_pix: string;
  cooperado_id?: number;
}

const Favoritos = () => {
  const { search, filteredFavoritos, setSearch, handleDelete } = useFavoritos();

  return (
    <>
      <InputSearch
        placeholder="Digite aqui..."
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className={styles.columnAddFavorito}>
        <ButtonNext>
          <Link to="/adicionar-favoritos">Adicionar Contato Favorito 👉</Link>
        </ButtonNext>
      </div>

      {filteredFavoritos.length > 0 && (
        <>
          <h1 className={styles.title}>Contatos favoritos</h1>
        </>
      )}

      {filteredFavoritos.map((favorito: Data, index) => (
        <div className={styles.container} key={String(index)}>
          <h3 className={styles.nome_contato}>Nome: {favorito.nome_contato}</h3>
          <p className={styles.chave_pix}>Chave: {favorito.chave_pix}</p>
          <p className={styles.tipo_chave_pix}>
            Tipo da Chave: {favorito.tipo_chave_pix}
          </p>
          <button
            className={styles.delete}
            onClick={() => handleDelete(favorito.id as number)}
          >
            Deletar dos Favoritos
          </button>
        </div>
      ))}

      {filteredFavoritos.length === 0 && (
        <>
          <h1 className={styles.title}>
            Até o momento não tem o contato favorito digitado na busca
          </h1>
          <p className={styles.container}>
            Atualmente você não tem nenhum contato favorito salvo.
          </p>
        </>
      )}
    </>
  );
};

export default Favoritos;
