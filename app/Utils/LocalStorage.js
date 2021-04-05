  
import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import Task from "../Models/Task.js";
export function saveState() {
  localStorage.setItem('taskmasterweek3', JSON.stringify({
    tasks: ProxyState.tasks,
    lists: ProxyState.lists
  }))
}
export function loadState() {
  let data = JSON.parse(localStorage.getItem('taskmasterweek3'))
  if (data) {
    
    ProxyState.tasks = data.tasks.map(task => new Task(task.id, task.name , task.listId, task.checked))
    ;
    
    ProxyState.lists = data.lists.map(list => new List(list.name, list.id, list.color));
  }
}