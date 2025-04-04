import { LuPlusCircle } from "react-icons/lu";

import { useState } from "react";
import { Header } from "../../components/Header";

import { SemTarefa } from "../../components/SemTarefa";
import { Tarefa } from "../../components/Tarefa";
import style from "./style.module.css";

export const App = () => {
    const [tarefa, setTarefa] = useState("");
    const [listaTarefa, setListaTarefa] = useState([]);
    const [checkMarcadas, setCheckMarcadas] = useState([]);

    function capturaTarefa() {
        setTarefa(event.target.value);
    }

    function adicionaTarefa() {
        event.preventDefault();
        setListaTarefa([...listaTarefa, tarefa]);
        setTarefa("");
    }

    function deletaTarefa(ToDeleteComent) {
        const deletaTarefa = listaTarefa.filter((coment) => {
            return coment !== ToDeleteComent;
        });
        setListaTarefa(deletaTarefa);
    }

    const getCheckedTarefas = (tarefaMarcada, isChecked) => {
        if (isChecked) {
            setCheckMarcadas([...checkMarcadas, tarefaMarcada]);
        } else {
            setCheckMarcadas(
                checkMarcadas.filter((tarefa) => tarefa !== tarefaMarcada)
            );
        }
    };

    return (
        <>
            <Header />
            <main>
                <section className={style.adicionarTarefa}>
                    <form onSubmit={adicionaTarefa}>
                        <label
                            className={style.sr_only}
                            htmlFor="AdicionaTarefa"
                        >
                            Adiciona Tarefa
                        </label>
                        <input
                            value={tarefa}
                            required
                            onChange={capturaTarefa}
                            id="AdicionaTarefa"
                            type="text"
                            placeholder="Adicione uma nova tarefa"
                        />
                        <button type="submit">
                            Criar
                            <LuPlusCircle />
                        </button>
                    </form>
                </section>
                <section className={style.listTodo}>
                    <div className={style.containerList}>
                        <b>
                            Tarefas criadas <span>{listaTarefa.length}</span>
                        </b>
                        <b>
                            Concluídas
                            <span>
                                {listaTarefa.length <= 0
                                    ? listaTarefa.length
                                    : `${checkMarcadas.length} de ${listaTarefa.length}`}
                            </span>
                        </b>
                    </div>
                    {listaTarefa.length > 0 ? (
                        <ul>
                            {listaTarefa.map((tarefa, index) => (
                                <Tarefa
                                    getCheckedTarefas={getCheckedTarefas}
                                    indice={index}
                                    key={index}
                                    deletaTarefa={deletaTarefa}
                                    descricao={tarefa}
                                />
                            ))}
                        </ul>
                    ) : (
                        <SemTarefa />
                    )}
                </section>
            </main>
        </>
    );
};
