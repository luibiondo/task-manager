'use client'
import { useState } from "react";
import { Column } from '@/components/Column/column'
import { ModalAdd, Task } from "@/components/Modal/modal-add";
import { ModalEdit } from "@/components/ModalEdit/modal-edit";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { useEffect } from "react";
import { getTasks } from "@/services/taskService";

export default function Home() {

  // estado que guarda qual coluna está aberta
  const [openAdd, setOpenAdd] = useState<string | null>(null);
  // estado que guarda qual coluna está sendo editada (guarda a coluna e o índice)
  const [editing, setEditing] = useState<{ column: string; index: number } | null>(null);

  // obj que guarda as tarefas separadas pelas colunas
  const [tasks, setTasks] = useState<{ [key: string]: Task[] }>({
    atrasado: [],
    pendente: [],
    feito: []
  });

  async function runGetTasks() {
    try {
      const response = await getTasks()
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  // função que adiciona uma tarefa na coluna certa
  const addTask = (column: string, task: Task) => {
    setTasks({
      ...tasks, // copia o estado que tá
      [column]: [...tasks[column], task], // adc a task no fim da coluna
    });
  };

  // função que salva a edição de uma tarefa que já existe
  const saveEdit = (task: Task) => {
    if (editing) {
      const updated = [...tasks[editing.column]]; // copia as tasks da coluna
      updated[editing.index] = task; // pega pelo index e substitui
      setTasks({ ...tasks, [editing.column]: updated }); // atualiza o estado
      setEditing(null); // fecha o modal
    }
  };

  // função que remove uma task
  const removeTask = (column: string, index: number) => {
    const updated = [...tasks[column]];
    updated.splice(index, 1); // remove pelo índice (splice)
    setTasks({ ...tasks, [column]: updated }); // atualiza o estado
    setEditing(null); // fecha o modal de edit
  };

  // função pra quando o usuário solta uma task depois de arrastar 
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return; // se solta em um lugar q não é valido não acontece nada

    const sourceCol = tasks[source.droppableId]; // coluna de origem
    const destCol = tasks[destination.droppableId]; // coluna de destino
    const [movedTask] = sourceCol.splice(source.index, 1); // remove a task da coluna de origem

    if (source.droppableId === destination.droppableId) { // se arrastar na mesma coluna
      sourceCol.splice(destination.index, 0, movedTask)
      setTasks({ ...tasks, [source.droppableId]: sourceCol });
    }
    else { // se a coluna de destino for diferente que a de origem
      destCol.splice(destination.index, 0, movedTask);
      setTasks({ // altera o estado
        ...tasks,
        [source.droppableId]: sourceCol,
        [destination.droppableId]: destCol
      });
    }
  };

  useEffect(() => {
    runGetTasks()
  }, [])

  return (
    <main className='bg-gradient-to-bl from-violet-500 to-fuchsia-500 h-screen flex flex-col'>
      <div className='fixed top-0 left-0 w-full z-10 p-4 bg-black shadow-md'>
        <h1 className='text-white p-4 bg-neutral-800 rounded-sm'>
          Task Manager - First Project with React
        </h1>
      </div>

      {/* área das colunas */}
      <div className='flex-1 w-full flex p-6 gap-4 justify-center mt-20 overflow-x-auto'>
        <DragDropContext onDragEnd={onDragEnd}>
          {Object.keys(tasks).map(colId => (
            // renderiza uma coluna pra cada chave daquele obj
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

      {/* modal de adicionar task */}
      <ModalAdd
        isOpen={!!openAdd}
        setOpen={() => setOpenAdd(null)}
        addTask={(task) => { if (openAdd) addTask(openAdd, task); }}
      />

      {/* modal de edit */}
      <ModalEdit
        isOpen={!!editing}
        setOpen={() => setEditing(null)}
        task={editing ? tasks[editing.column][editing.index] : null}
        saveEdit={saveEdit}
        removeTask={() => { if (editing) removeTask(editing.column, editing.index); }}
      />
    </main>
  )
}
