'use client'
import { Column } from '@/components/Column/column'


export default function Home() {
  return (
    <main className='bg-black p-4'>
      <div className='w-full h-screen bg-gradient-to-bl from-violet-500 to-fuchsia-500 flex gap-4 p-6'>
        
        <Column title="Hoje"></Column>
        <Column title="Esta semana"></Column>
        <Column title="Mais tarde"></Column>
      </div>
    </main>
  )
}