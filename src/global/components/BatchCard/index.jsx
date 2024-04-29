import styles from "./styles.module.css";
import Teste from "../BatchCard/teste.jpg";

function batchCard() {
  return (
    <div className={styles.container}>
      <img src={Teste} className={styles.img} alt="Imagem de um teste" />
      <div className={styles.body}>
        <h1 className={styles.title}>Nome</h1>
        <h1 className={styles.description}>Isso é apenas um teste</h1>
      </div>
    </div>
  );
}

export default batchCard;
