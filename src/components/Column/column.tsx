import { Card } from '@/components/Cards/card'
import { Button } from '@/components/Button'

interface IColumnProps {
  title: string
}

function Column({ title }: IColumnProps) {
  return (
    <div className="bg-neutral-900 rounded-xl p-4 w-64 shadow-lg">
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white font-semibold">{title}</h2>

        {/* calling the compnenet button */}
        <Button onClick={() => alert('Estamos trabalhando nisso!')}>
          +
        </Button>
      </div>

      <div className="space-y-2">
        <Card text="Exemplo de card 1" />
        <Card text="Exemplo de card 2" />
      </div>
    </div>
  )
}

export { Column }
