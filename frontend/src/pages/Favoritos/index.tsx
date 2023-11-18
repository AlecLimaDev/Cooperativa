import { Link } from "react-router-dom";
import S from "./styles.module.css";
import { useFavoritos } from "../../hooks/useFavoritos";

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
      <h1 className={S.title}>Contatos Favoritos</h1>
      <input
        placeholder="Digite aqui..."
        className={S.input}
        type="text"
        name="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className={S.columnAddFavorito}>
        <button className={S.addFavorito}>
          <Link to="/adicionar-favoritos">Adicionar Contato Favorito 👉</Link>
        </button>
      </div>
      
      {filteredFavoritos.map((favorito: Data, index) => (
        <div className={S.container} key={String(index)}>
          <h3 className={S.nome_contato}>Nome: {favorito.nome_contato}</h3>
          <p className={S.chave_pix}>Chave: {favorito.chave_pix}</p>
          <p className={S.tipo_chave_pix}>
            Tipo da Chave: {favorito.tipo_chave_pix}
          </p>
          <button
            className={S.delete}
            onClick={() => handleDelete(favorito.id as number)}
          >
            Deletar dos Favoritos
          </button>
        </div>
      ))}
      {filteredFavoritos.length === 0 && (
        <p className={S.container}>
          Atualmente você não tem nenhum contato favorito salvo.
        </p>
      )}
    </>
  );
};

export default Favoritos;
