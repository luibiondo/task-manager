interface CardProps {
  text: string
}

function Card({ text }: CardProps) {
  return (
    <div className="bg-neutral-800 text-white p-3 rounded-lg shadow flex justify-center hover:bg-gradient-to-bl from-violet-500 to-fuchsia-500">
      {text}
    </div>
  )
}

export { Card }
