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

// componente column
export function Column({ columnId, title, tasks, onAdd, onEdit }: IColumnProps) {
  return (
    // estilo das colunas
    <div className="bg-neutral-900 rounded-xl p-4 w-96 shadow-lg flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white font-semibold">{title}</h2>
        <Button onClick={onAdd}>+</Button>
      </div>

      {/* área que deixa soltar as tarefas que o usuário arrastou */}
      <Droppable droppableId={columnId}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="flex flex-col gap-2 flex-1"
          >
            {/* faz com que cada task seja arrastável */}
            {tasks.map((task, index) => (
              <Draggable
                key={index}
                draggableId={`${columnId}-${index}`}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    onClick={() => onEdit(index)} // quando clica, abre pra editar a tarefa certa pelo index
                    className="bg-neutral-800 text-white p-3 rounded-lg shadow hover:bg-gradient-to-bl from-violet-500 to-fuchsia-500 cursor-pointer"
                  >
                    {task.title}
                  </div>
                )}
              </Draggable>
            ))}
            
            {/* deixa um espaço quando arrasta */}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
