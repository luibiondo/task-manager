import { useState, useEffect } from "react";
import { Task } from "@/components/Modal/modal-add"

interface IModalEditProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  task: Task | null;
  saveEdit: (task: Task) => void;
}

export function ModalEdit({ isOpen, setOpen, task, saveEdit }: IModalEditProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priority, setPriority] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setStartDate(task.startDate);
      setEndDate(task.endDate);
      setPriority(task.priority);
    }
  }, [task]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (title.trim() !== "") {
      saveEdit({ title, description, startDate, endDate, priority });
      setOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white w-150 p-4 rounded shadow-lg flex flex-col justify-center">
        <h1 className="p-6 text-xl text-center">Editar Tarefa</h1>

        <label>Nome da Tarefa:</label>
        <input
          className="p-4 border border-gray-300 rounded m-2 mb-7"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Descrição:</label>
        <input
          className="p-4 border border-gray-300 rounded m-2 mb-7"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Data de Início:</label>
        <input
          className="p-4 border border-gray-300 rounded m-2 mb-7"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <label>Data de Fim:</label>
        <input
          className="p-4 border border-gray-300 rounded m-2 mb-7"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <label>Nível de Prioridade:</label>
        <select
          className="p-4 border border-gray-300 rounded m-2 mb-7"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">Selecione</option>
          <option value="high">Alta</option>
          <option value="medium">Média</option>
          <option value="low">Baixa</option>
        </select>

        <button
          className="p-4 bg-black hover:bg-gradient-to-bl from-violet-500 to-fuchsia-500 text-white rounded mt-2"
          onClick={handleSave}
        >
          Atualizar
        </button>
      </div>
    </div>
  );
}
