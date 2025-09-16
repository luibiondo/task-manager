import { Droppable, Draggable } from '@hello-pangea/dnd';
import { Button } from "@/components/Button";
import { Task } from "@/components/Modal/modal-add";

interface IColumnProps {
  columnId: string;
  title: string;
  tasks: Task[];
  onAdd: () => void;
  onEdit: (index: number) => void;
}

export function Column({ columnId, title, tasks, onAdd, onEdit }: IColumnProps) {
  return (
    <Droppable droppableId={columnId}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="bg-neutral-900 rounded-xl p-4 w-96 min-h-[200px] h-auto shadow-lg flex flex-col gap-2"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-white font-semibold">{title}</h2>
            <Button onClick={onAdd}>+</Button>
          </div>

          {tasks.map((task, index) => (
            <Draggable key={index} draggableId={`${columnId}-${index}`} index={index}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  onClick={() => onEdit(index)}
                  className="bg-neutral-800 text-white p-3 rounded-lg shadow hover:bg-gradient-to-bl from-violet-500 to-fuchsia-500 cursor-pointer"
                >
                  {task.title}
                </div>
              )}
            </Draggable>
          ))}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}
