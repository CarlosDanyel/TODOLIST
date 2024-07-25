import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { RxCheck } from "react-icons/rx";
import style from "./style.module.css";

export const Tarefa = ({
  descricao,
  deletaTarefa,
  indice,
  getCheckedTarefas,
}) => {
  const [isActive, setIsActive] = useState(false);

  function deletaComent() {
    deletaTarefa(descricao);
  }

  function toggleClass() {
    setIsActive(!isActive);
    getCheckedTarefas(descricao, !isActive);
  }

  return (
    <li className={style.tarefa}>
      <input
        type="checkbox"
        id={`checkBox${indice}`}
        name={`checkBox${indice}`}
        checked={isActive}
        onChange={toggleClass}
      />
      <label htmlFor={`checkBox${indice}`}>
        <RxCheck />
      </label>
      <p>{descricao}</p>
      <button type="button" onClick={deletaComent}>
        <FaRegTrashAlt />
      </button>
    </li>
  );
};
