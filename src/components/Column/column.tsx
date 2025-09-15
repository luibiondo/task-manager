import { useState } from "react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Cards/card";
import { ModalAdd, Task } from "@/components/Modal/modal-add";
import { ModalEdit } from "@/components/ModalEdit/modal-edit";

interface IColumnProps {
  title: string;
}

export function Column({ title }: IColumnProps) {
  const [openAdd, setOpenAdd] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const saveEdit = (task: Task) => {
    if (editingIndex !== null) {
      const updated = [...tasks];
      updated[editingIndex] = task;
      setTasks(updated);
      setEditingIndex(null);
    }
  };

  return (
    <div className="bg-neutral-900 rounded-xl p-4 w-64 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white font-semibold">{title}</h2>
        <Button onClick={() => setOpenAdd(true)}>+</Button>
      </div>

      <ModalAdd isOpen={openAdd} setOpen={setOpenAdd} addTask={addTask} />

      <ModalEdit
        isOpen={openEdit}
        setOpen={setOpenEdit}
        task={editingIndex !== null ? tasks[editingIndex] : null}
        saveEdit={saveEdit}
      />

      <div className="space-y-2">
        {tasks.map((task, index) => (
          <Card 
            key={index} 
            text={task.title} 
            onEdit={() => { setEditingIndex(index); setOpenEdit(true); }} 
          />
        ))}
      </div>
    </div>
  );
}
