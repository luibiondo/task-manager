import { Button } from "@/components/Button";
import { Card } from "@/components/Cards/card";
import { Task } from "@/components/Modal/modal-add";

interface IColumnProps {
  title: string;
  tasks: Task[];
  onAdd: () => void;
  onEdit: (index: number) => void;
}

export function Column({ title, tasks, onAdd, onEdit }: IColumnProps) {
  return (
    <div className="bg-neutral-900 rounded-xl p-4 w-64 shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white font-semibold">{title}</h2>
        <Button onClick={onAdd}>+</Button>
      </div>

      <div className="space-y-2">
        {tasks.map((task, index) => (
          <Card 
            key={index} 
            text={task.title} 
            onEdit={() => onEdit(index)} 
          />
        ))}
      </div>
    </div>
  );
}
