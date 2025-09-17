import { useState } from "react";

interface IModalAddProps {
  isOpen: boolean; // vê se o modal está aberto/fechado
  setOpen: (open: boolean) => void; // função que abre/fecha o modal
  addTask: (task: Task) => void; // função que adiciona a task
}

export interface Task {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  priority: string;
}

// componente modalAdd
export function ModalAdd({ isOpen, setOpen, addTask }: IModalAddProps) {
  // estados para cada campo da task
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [priority, setPriority] = useState("");

  // se tiver fechado, ele não é renderizado
  if (!isOpen) return null;

  // função para salvar a task criada
  const handleSave = () => {
    if (title.trim() !== "") { // vê se a task tem um título

      // adiciona a task
      addTask({ title, description, startDate, endDate, priority });

      // limpa os campos
      setTitle("");
      setDescription("");
      setStartDate("");
      setEndDate("");
      setPriority("");
      setOpen(false);
    }
  };

  return (
    // estilo do modal
    <div className="fixed inset-0 flex items-center justify-center bg-black/90">
      <div className="bg-white w-150 p-4 rounded shadow-lg flex flex-col justify-center">
        <div className="relative border-b border-gray-300 mb-4">
          <h1 className="p-6 text-xl text-center">Nova Tarefa</h1>

          {/* botão para fechar o modal */}
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 p-2 bg-gray-200 rounded hover:bg-gradient-to-bl from-violet-500 to-fuchsia-500 hover:text-white"
            // quando clica no X fecha o modal
            onClick={() => setOpen(false)}
          >
            X
          </button>
        </div>

        {/* inputs de cada campo */}
        <label>Nome da Tarefa:</label>
        <input
          className="p-4 border border-gray-300 rounded m-2 mb-7"
          type="text"
          placeholder="Digite aqui..."
          value={title} // guarda o estado
          onChange={(e) => setTitle(e.target.value)} // muda o estado
        />

        <label>Descrição:</label>
        <input
          className="p-4 border border-gray-300 rounded m-2 mb-7"
          type="text"
          placeholder="Digite aqui..."
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
