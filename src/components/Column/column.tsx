
import { useState } from "react";
import { Button } from "@/components/Button";
import { Card } from "@/components/Cards/card";
import { Modal } from "../Modal/modal";


interface IColumnProps {
  title: string;
}

export function Column({ title }: IColumnProps) {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState<string[]>([]); // array of tasks

  const addTask = (task: string) => {
    setTasks([...tasks, task]); // adding new task to the array
  };

  return (
    <div className="bg-neutral-900 rounded-xl p-4 w-64 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white font-semibold">{title}</h2>

        <Button onClick={() => setOpen(true)}>+</Button>

        {/* pass the addTask to the Modal */}
        <Modal isOpen={open} setOpen={setOpen} addTask={addTask} />
      </div>

      <div className="space-y-2">
        {tasks.map((task, index) => (
          <Card key={index} text={task} />
        ))}
      </div>
    </div>
  );
}
