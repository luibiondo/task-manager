import { useState, useEffect } from "react";
import { Task } from "@/components/Modal/modal-add";


interface IModalEditProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  task: Task | null;
  saveEdit: (task: Task) => void;
  removeTask: () => void
}

// componente ModalEdit
export function ModalEdit({ isOpen, setOpen, task, saveEdit, removeTask }: IModalEditProps) {
  // estados para cada campo da tarefa
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priority, setPriority] = useState("");

  useEffect(() => {
    // se a task muda, atualiza os campos da tarefa
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setStartDate(task.startDate);
      setEndDate(task.endDate);
      setPriority(task.priority);
    }
  }, [task]);

  // se o modal está fechado, ele não é renderizado
  if (!isOpen) return null;

  // função para salvar a edição
  const handleSave = () => {

    // se o título da tarefa não estiver vazio
    if (title.trim() !== "") {

      // chama a função saveEdit e passa os novos valores
      saveEdit({ title, description, startDate, endDate, priority });
      
      // fecha o modal
      setOpen(false);
    }

  };

  return (
    // estilo do modal
    <div className="fixed inset-0 flex items-center justify-center bg-black/100">
      <div className="bg-white w-180 p-4 rounded shadow-lg flex flex-col justify-center">
        <div className="relative border-b border-gray-300 mb-4">
          <h1 className="p-6 text-xl text-center">Editar Tarefa</h1>

          {/* botão para fechar o modal */}
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 p-2 bg-gray-200 rounded hover:bg-gradient-to-bl from-violet-500 to-fuchsia-500 hover:text-white"
            onClick={() => setOpen(false)}
          >
            X
          </button>
        </div>

        {/* inputs dos campos da tarefa */}
        <label>Nome da Tarefa:</label>
        <input
          className="p-4 border border-gray-300 rounded m-2 mb-7"
          type="text"
          value={title} // guarda o estado
          onChange={(e) => setTitle(e.target.value)} // muda o estado
        />

        <label>Descrição:</label>
        <input
          className="p-4 border border-gray-300 rounded m-2 mb-7"
          type="text"
          value={description} // guarda o estado
          onChange={(e) => setDescription(e.target.value)} // muda o estado
        />

        <label>Data de Início:</label>
        <input
          className="p-4 border border-gray-300 rounded m-2 mb-7"
          type="date"
          value={startDate} // guarda o estado
          onChange={(e) => setStartDate(e.target.value)} // muda o estado
        />

        <label>Data de Fim:</label>
        <input
          className="p-4 border border-gray-300 rounded m-2 mb-7"
          type="date"
          value={endDate} // guarda o estado
          onChange={(e) => setEndDate(e.target.value)} // muda o estado
        />

        <label>Nível de Prioridade:</label>
        <select
          className="p-4 border border-gray-300 rounded m-2 mb-7"
          value={priority} // guarda o estado
          onChange={(e) => setPriority(e.target.value)} // muda o estado
        >
          <option value="">Selecione</option>
          <option value="high">Alta</option>
          <option value="medium">Média</option>
          <option value="low">Baixa</option>
        </select>

          {/* botão para salvar as alterações */}
        <button
          className="p-4 bg-black hover:bg-gradient-to-bl from-violet-500 to-fuchsia-500 text-white rounded mt-2 cursor-pointer"
          onClick={handleSave}
        >
          Salvar
        </button>

        {/* botão que apaga a task */}
        <button
          className="p-4 bg-red-600 hover:bg-red-700 text-white rounded mt-2 cursor-pointer"
          onClick={() => { // ao clicar chama a função removeTask() e fecha o modal
            removeTask()
            setOpen(false);
          }}
        >
          Apagar Task
        </button>

      </div>
    </div>
  );
}
