'use client'
import { useState } from "react";
import { Column } from '@/components/Column/column'
import { ModalAdd, Task } from "@/components/Modal/modal-add";
import { ModalEdit } from "@/components/ModalEdit/modal-edit";

export default function Home() {
  // controla modal de adicionar (guarda a coluna em que será aberto)
  const [openAdd, setOpenAdd] = useState<string | null>(null);

  // controla modal de edição (guarda coluna + index da task)
  const [editing, setEditing] = useState<{ column: string; index: number } | null>(null);

  // estado geral de todas as colunas
  const [tasks, setTasks] = useState<{ [key: string]: Task[] }>({
    atrasado: [],
    pendente: [],
    feito: []
  });

  // adicionar nova task
  const addTask = (column: string, task: Task) => {
    setTasks({
      ...tasks,
      [column]: [...tasks[column], task],
    });
  };

  // salvar edição de task
  const saveEdit = (task: Task) => {
    if (editing) {
      const updated = [...tasks[editing.column]];
      updated[editing.index] = task;

      setTasks({
        ...tasks,
        [editing.column]: updated,
      });

      setEditing(null);
    }
  };

  // delete task
  const removeTask = (column: string, index: number) => {
    const updated = [...tasks[column]];
    updated.splice(index, 1);
    setTasks({
      ...tasks,
      [column]: updated,
    });
    setEditing(null); // fecha modal
  };


  return (
    <main className='bg-gradient-to-bl from-violet-500 to-fuchsia-500 p-4 h-screen'>
      {/* header */}
      <div className='fixed top-0 left-0 w-full z-10 p-4 bg-black shadow-md'>
        <h1 className='text-white p-4 bg-neutral-800 rounded-sm'>
          Task Manager - First Project with React
        </h1>
      </div>

      {/* colunas */}
      <div className='w-full bg-gradient-to-bl from-violet-500 to-fuchsia-500 flex p-6 gap-1 justify-center mt-20'>
        <Column
          title="Atrasado"
          tasks={tasks.atrasado}
          onAdd={() => setOpenAdd("atrasado")}
          onEdit={(index) => setEditing({ column: "atrasado", index })}
        />
        <Column
          title="Pendente"
          tasks={tasks.pendente}
          onAdd={() => setOpenAdd("pendente")}
          onEdit={(index) => setEditing({ column: "pendente", index })}
        />
        <Column
          title="Feito"
          tasks={tasks.feito}
          onAdd={() => setOpenAdd("feito")}
          onEdit={(index) => setEditing({ column: "feito", index })}
        />
      </div>

      {/* modais globais */}
      <ModalAdd
        isOpen={!!openAdd}
        setOpen={() => setOpenAdd(null)}
        addTask={(task) => {
          if (openAdd) addTask(openAdd, task);
        }}
      />

      <ModalEdit
        isOpen={!!editing}
        setOpen={() => setEditing(null)}
        task={editing ? tasks[editing.column][editing.index] : null}
        saveEdit={saveEdit}
        removeTask={() => {
          if (editing) removeTask(editing.column, editing.index);
        }}
      />

    </main>
  )
}
