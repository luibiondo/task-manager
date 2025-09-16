import { Draggable } from '@hello-pangea/dnd';

interface CardProps {
  text: string;
  onEdit: () => void;
  index: number;
};

function Card({ text, onEdit, index }: CardProps) {
  return (
  <Draggable draggableId='task.id' index={index}> //aq tá dando erro pq nao tem o 'task.id'
    {(provided) => (
      <div 
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      onClick={onEdit} 
      className="bg-neutral-800 text-white p-3 rounded-lg shadow flex justify-center hover:bg-gradient-to-bl from-violet-500 to-fuchsia-500 cursor-pointer"
    >
      {text}
    </div>
    )}
  </Draggable>
  );
}

export { Card };
