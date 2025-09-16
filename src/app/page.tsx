'use client'
import { useState } from "react";
import { Column } from '@/components/Column/column'
import { ModalAdd, Task } from "@/components/Modal/modal-add";
import { ModalEdit } from "@/components/ModalEdit/modal-edit";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";

export default function Home() {
  const [openAdd, setOpenAdd] = useState<string | null>(null);
  const [editing, setEditing] = useState<{ column: string; index: number } | null>(null);

  const [tasks, setTasks] = useState<{ [key: string]: Task[] }>({
    atrasado: [],
    pendente: [],
    feito: []
  });

  const addTask = (column: string, task: Task) => {
    setTasks({
      ...tasks,
      [column]: [...tasks[column], task],
    });
  };

  const saveEdit = (task: Task) => {
    if (editing) {
      const updated = [...tasks[editing.column]];
      updated[editing.index] = task;
      setTasks({ ...tasks, [editing.column]: updated });
      setEditing(null);
    }
  };

  const removeTask = (column: string, index: number) => {
    const updated = [...tasks[column]];
    updated.splice(index, 1);
    setTasks({ ...tasks, [column]: updated });
    setEditing(null);
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = tasks[source.droppableId];
    const destCol = tasks[destination.droppableId];
    const [movedTask] = sourceCol.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceCol.splice(destination.index, 0, movedTask);
      setTasks({ ...tasks, [source.droppableId]: sourceCol });
    } else {
      destCol.splice(destination.index, 0, movedTask);
      setTasks({ 
        ...tasks, 
        [source.droppableId]: sourceCol,
        [destination.droppableId]: destCol
      });
    }
  };

  return (
    <main className='bg-gradient-to-bl from-violet-500 to-fuchsia-500 p-4 h-screen'>
      <div className='fixed top-0 left-0 w-full z-10 p-4 bg-black shadow-md'>
        <h1 className='text-white p-4 bg-neutral-800 rounded-sm'>
          Task Manager - First Project with React
        </h1>
      </div>

      <div className='w-full flex p-6 gap-4 justify-center mt-20'>
        <DragDropContext onDragEnd={onDragEnd}>
          {Object.keys(tasks).map(colId => (
            <Column
              key={colId}
              columnId={colId}
              title={colId[0].toUpperCase() + colId.slice(1)}
              tasks={tasks[colId]}
              onAdd={() => setOpenAdd(colId)}
              onEdit={(index) => setEditing({ column: colId, index })}
            />
          ))}
        </DragDropContext>
      </div>

      <ModalAdd
        isOpen={!!openAdd}
        setOpen={() => setOpenAdd(null)}
        addTask={(task) => { if(openAdd) addTask(openAdd, task); }}
      />

      <ModalEdit
        isOpen={!!editing}
        setOpen={() => setEditing(null)}
        task={editing ? tasks[editing.column][editing.index] : null}
        saveEdit={saveEdit}
        removeTask={() => { if(editing) removeTask(editing.column, editing.index); }}
      />
    </main>
  )
}
