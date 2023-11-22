import { Link } from "react-router-dom";
import styles from "./styles.module.css";

import useCooperados from "../../hooks/useCooperados";
import { InputSearch } from "../../components/Input/InputSearch";
import { ButtonNext } from "../../components/ButtonNext/ButtonNext";

type Data = {
  id: number | string;
  conta_corrente: string;
  nome: string;
};

const Cooperados = () => {
  const { filteredCooperados, setSearch, handleDelete } = useCooperados();

  return (
    <>
      <div className={styles.container}>
        <InputSearch
          placeholder="Digite aqui..."
          type="text"
          name="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className={styles.columnAddCooperado}>
        <ButtonNext>
          <Link to="/adicionar-cooperado">Adicionar Cooperado 👉</Link>
        </ButtonNext>
      </div>
    <h1>Cooperados Cadastrados</h1>

      <section className={styles.mainContainer}>
        {filteredCooperados.map((coop: Data, index) => (
          <div className={styles.contentContainer} key={index}>
            <img className={styles.image} />
            <h4 className={styles.textNome}>Nome: {coop.nome}</h4>
            <h4>C/c: {coop.conta_corrente}</h4>
            <button
              className={styles.delete}
              onClick={() => handleDelete(coop.id as number)}
            >
              DELETE
            </button>
          </div>
        ))}
        {filteredCooperados.length === 0 && (
          <div>Atualmente não tem nenhum cooperado cadastrado</div>
        )}
      </section>
    </>
  );
};

export default Cooperados;
