interface CardProps {
  text: string; // título da task
  onEdit: () => void; // função que abre o modalEdit
}

// componente card
function Card({ text, onEdit }: CardProps) {
  return (
    <div
      onClick={onEdit} // chama a função onEdit
      className="bg-neutral-800 text-white p-3 rounded-lg shadow flex justify-center hover:bg-gradient-to-bl from-violet-500 to-fuchsia-500 cursor-pointer"
    >
      {text} 
    </div>
  );
}

export { Card }; // exporta o componente 