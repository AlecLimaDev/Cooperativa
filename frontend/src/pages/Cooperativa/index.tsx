import { Link } from "react-router-dom";
import S from "./styles.module.css";
import useCooperativa from "../../hooks/useCooperativa";

type Data = {
  id?: number;
  codigos: string;
  descricao: string;
};

const Cooperativa = () => {
  const { search, setSearch, filteredCooperativa, handleDelete } =
    useCooperativa();

  return (
    <>
      <h1 className={S.title}>Cooperativas de Crédito</h1>
      <div className={S.container}>
        <input
          placeholder="Digite aqui..."
          className={S.input}
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className={S.columnAddCooperado}>
        <button className={S.addCooperativa}>
          <Link to="/adicionar-cooperativa">Adicionar Cooperativa 👉</Link>
        </button>
      </div>

      <main className={S.MainContainer}>
        {filteredCooperativa.map((coop: Data, index) => (
          <div className={S.ContentContainer} key={index}>
            <div className={S.cooperativa}>
              <img className={S.imagem} alt="" />
              <p className={S.codigos}>{coop.codigos}</p>
            </div>
            <h3 className={S.descricao}>{coop.descricao}</h3>
            <button
              className={S.delete}
              onClick={() => handleDelete(coop.id as number)}
            >
              DELETAR
            </button>
          </div>
        ))}
        {filteredCooperativa.length === 0 && (
          <p className={S.ContentContainer}>
            Atualmente não tem nenhuma cooperativa cadastrada.
          </p>
        )}
      </main>
    </>
  );
};

export default Cooperativa;
