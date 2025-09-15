'use client'
import { Column } from '@/components/Column/column'


export default function Home() {
  return (
    <main className='bg-black p-4'>
      <div className='fixed top-0 left-0 w-full z-10 p-4 bg-black shadow-md '>
        <h1 className='text-white p-4 bg-neutral-800 rounded-sm'>Task Manager - First Project with React</h1>
      </div>
      <div className='w-full h-screen bg-gradient-to-bl from-violet-500 to-fuchsia-500 flex p-6 gap-1 justify-center mt-20'>
        

        <Column title="Atrasado"></Column>
        <Column title="Pendente"></Column>
        <Column title="Feito"></Column>        
      </div>
    </main>
  )
}