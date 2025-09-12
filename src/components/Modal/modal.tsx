import { useState } from "react";

interface IModalProps {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  addTask: (task: string) => void; // new prop
}

export function Modal({ isOpen, setOpen, addTask }: IModalProps) {
  const [newTask, setNewTask] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    if (newTask.trim() !== "") {
      addTask(newTask); // adding the task
      setNewTask("");   // clean input
      setOpen(false);   // close modal
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <h2 className="p-4">Escreva sua Tarefa:</h2>
        <input
          className="p-4 border border-gray-300 rounded m-2"
          type="text"
          placeholder="Digite aqui..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="p-4 bg-gradient-to-bl from-violet-500 to-fuchsia-500 text-white rounded mt-2"
          onClick={handleSave}
        >
          Salvar
        </button>
      </div>
    </div>
  );
}
