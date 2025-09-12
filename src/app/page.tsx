'use client'
import { Button } from '@/components/Button'
import { Column } from '@/components/Column/column'
import { useState } from 'react'  

export default function Home() {
  return (
    <main className='bg-black p-4'>
      <div className='w-full h-screen bg-gradient-to-bl from-violet-500 to-fuchsia-500 flex gap-4 p-6'>
        {/* CATCH THE COLUMN FROM IMPORT */}
        <Column title="Hoje"></Column>
        <Column title="Esta semana"></Column>
        <Column title="Mais tarde"></Column>
      </div>
    </main>
  );
}

