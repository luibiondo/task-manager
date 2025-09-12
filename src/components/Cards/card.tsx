interface CardProps {
  text: string
}

function Card({ text }: CardProps) {
  return (
    <div className="bg-neutral-800 text-white p-3 rounded-lg shadow flex justify-center">
      {text}
    </div>
  )
}

export { Card }
