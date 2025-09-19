import api from "@/services/APIService";

export interface Task {
    id: number;
    title: string;
    description: string;
    startDate?: string;
    endDate?: string;
    priority?: string;
}

// funções CRUD
// GET - buscar todas as tarefas
export async function getTasks(): Promise<Task[]> {
    const response = await api.get("/task");
    return response.data;
}

// POST - criar tarefa
export async function createTask(newTask: Omit<Task, "id">): Promise<Task> {
    const response = await api.post("/task", newTask);
    return response.data;
}

// PUT - atualizar tarefa
export async function updateTask(id: number, updatedTask: Partial<Task>): Promise<Task> {
    const response = await api.put(`/task/${id}`, updatedTask);
    return response.data;
}

// DELETE - remover tarefa
export async function deleteTask(id: number): Promise<void> {
    await api.delete(`/task/${id}`);
}
