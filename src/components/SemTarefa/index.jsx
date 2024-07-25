import semTarefa from "../../assets/noTarefa.png";

import style from "./style.module.css";

export const SemTarefa = () => {
  return (
    <div className={style.noTarefa}>
      <div>
        <img src={semTarefa} alt="sem tarefas cadastradas" />
      </div>
      <b>Você ainda não tem tarefas cadastradas</b>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
};
