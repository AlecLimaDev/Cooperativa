import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import useCooperativa from "../../hooks/useCooperativa";
import { InputSearch } from "../../components/Input/InputSearch";
import { ButtonNext } from "../../components/ButtonNext/ButtonNext";

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
      <section className={styles.container}>
        <InputSearch
          placeholder="Digite aqui..."
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </section>



      <section className={styles.columnAddCooperado}>
        <ButtonNext>
          <Link to="/adicionar-cooperativa">Adicionar Cooperativa 👉</Link>
        </ButtonNext>
      </section>

    <h1 className={styles.title}>Cooperativas Cadastradas</h1>

      <main className={styles.mainContainer}>
        {filteredCooperativa.map((coop: Data, index) => (
          <div className={styles.ContentContainer} key={index}>
            <div className={styles.cooperativa}>
              <img className={styles.imagem} alt="" />
              <p className={styles.codigos}>{coop.codigos}</p>
            </div>
            <h3 className={styles.descricao}>{coop.descricao}</h3>
            <button
              className={styles.delete}
              onClick={() => handleDelete(coop.id as number)}
            >
              DELETAR
            </button>
          </div>
        ))}
        {filteredCooperativa.length === 0 && (
          <p className={styles.ContentContainer}>
            Atualmente não tem nenhuma cooperativa cadastrada.
          </p>
        )}
      </main>
    </>
  );
};

export default Cooperativa;
