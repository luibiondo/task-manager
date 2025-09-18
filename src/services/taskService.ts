import api from "@/services/APIService" // importa a api definida mo APIService
export interface Task {
    id: number;
    title: string;
    description: string
}

// funcções CRUD
// busca todsa as tarefas
export async function getTasks(): Promise<Task[]> { // indica que retorna uma lista
    const response = await api.get("/task") // faz um get no endpoint /task
    return response.data(); // retorna apenas os dados
}

// cria uma nova tarefa
export async function createTask(NewTask: Omit<Task, "id">): Promise<Task> { // indica uma nova task que omite o id da interface
    const response = await api.post("/task", NewTask) // faz um post (manda algo novo) no endpoint /task, enviando a nova tarefa
    return response.data(); // retorna a tarefa que foi criada
}

// edita uma tarefa
export async function updateTask(id: number, updatedTask: Partial<Task>): Promise<Task>{ // pode mandar só alguma parte da tarefa, tipo o título
    const response = await api.put(`/task${id}`, updatedTask) // dá um put (atualiza algo que já existe) e atualiza a task pelo id
    return response.data(); // retorna a tarefa que foi atualizada
}

// apagar uma tarefa
export async function deleteTask(id: number): Promise<void>{ // espera uma promise vazia (task vai ser deletada)
    const response = await api.delete(`/task${id}`) // deleta a tarefa pelo id
}