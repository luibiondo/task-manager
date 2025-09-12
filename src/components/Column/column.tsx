import { Card } from '@/components/Cards/card'

interface IColumnProps {
  title: string
}

function Column({ title }: IColumnProps) {
  return (
    <div className="bg-neutral-900 rounded-xl p-4 w-64 ml-49 shadow-lg">
      {/* COLUMN HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white font-semibold">{title}</h2>
        <button className="text-white text-xl">+</button>
      </div>

      {/* EXAMPLES OF CARDS */}
      <div className="space-y-2">
        <Card text="Exemplo de card 1" />
        <Card text="Exemplo de card 2" />
      </div>
    </div>
  )
}

export { Column }
