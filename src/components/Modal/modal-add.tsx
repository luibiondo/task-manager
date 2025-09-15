import { useState } from "react";

interface IModalAddProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  addTask: (task: Task) => void;
}

export interface Task {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  priority: string;
}

export function ModalAdd({ isOpen, setOpen, addTask }: IModalAddProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priority, setPriority] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    if (title.trim() !== "") {
      addTask({ title, description, startDate, endDate, priority });
      setTitle("");
      setDescription("");
      setStartDate("");
      setEndDate("");
      setPriority("");
      setOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white w-150 p-4 rounded shadow-lg flex flex-col justify-center">
        <h1 className="p-6 text-xl text-center">Nova Tarefa</h1>

        <label>Nome da Tarefa:</label>
        <input
          className="p-4 border border-gray-300 rounded m-2 mb-7"
          type="text"
          placeholder="Digite aqui..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Descrição:</label>
        <input
          className="p-4 border border-gray-300 rounded m-2 mb-7"
          type="text"
          placeholder="Digite aqui..."
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
          Salvar
        </button>
      </div>
    </div>
  );
}
