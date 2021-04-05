import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import { saveState } from "../Utils/LocalStorage.js";

class TasksService {
  deleteTask(id) {
    ProxyState.tasks = ProxyState.tasks.filter(li => li.id != id)
    saveState()

  }
  addTask(rawTask) {
    ProxyState.tasks.push(new Task(rawTask.name, rawTask.listId))
    saveState()
    ProxyState.tasks = ProxyState.tasks
  }
}

export const tasksService = new TasksService();