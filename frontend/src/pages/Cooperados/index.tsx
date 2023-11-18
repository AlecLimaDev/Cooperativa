import { Link } from "react-router-dom";
import styles from "./styles.module.css";

import useCooperados from "../../hooks/useCooperados";

type Data = {
  id: number | string;
  conta_corrente: string;
  nome: string;
};

const Cooperados = () => {
  const { filteredCooperados, setSearch, handleDelete } = useCooperados();

  return (
    <>
      <h1 className={styles.title}>Cooperadostyles</h1>
      <div className={styles.container}>
        <input
          placeholder="Digite aqui..."
          className={styles.input}
          type="text"
          name="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className={styles.columnAddCooperado}>
        <button className={styles.addCooperativa}>
          <Link to="/adicionar-cooperado">Adicionar Cooperado 👉</Link>
        </button>
      </div>

      <main className={styles.MainContainer}>
        {filteredCooperados.map((coop: Data, index) => (
          <div className={styles.ContentContainer} key={index}>
            <div className={styles.columnImage}>
              <img className={styles.image} />
            </div>
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
      </main>
    </>
  );
};

export default Cooperados;
