interface CardProps {
  text: string;
  onEdit: () => void;
}

function Card({ text, onEdit }: CardProps) {
  return (
    <div 
      onClick={onEdit} 
      className="bg-neutral-800 text-white p-3 rounded-lg shadow flex justify-center hover:bg-gradient-to-bl from-violet-500 to-fuchsia-500 cursor-pointer"
    >
      {text}
    </div>
  );
}

export { Card };
