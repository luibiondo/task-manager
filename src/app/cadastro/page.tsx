'use client'
import { Button } from '@/components/Button'
import { useState } from 'react'

export default function Page() {
  const [value, setValue] = useState("")

  const [info, setInfo] = useState("")


  function save() {
    setInfo(value)
  }

  return (
    <div className='flex flex-col gap-4 p-3'>
      <p>Valor atual: {info} </p>

      <input className='shadow-lg p-2 rounded-sm' placeholder='Digite aqui...' value={value} onChange={(e) => {
        setValue(e.target.value)
      }}/>

     <Button onClick={save}>
        Salvar
     </Button>
    </div>
  );
}

