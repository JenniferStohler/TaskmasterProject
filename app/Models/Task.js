
import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor(name, listId, id = generateId(), checked = false) {
    this.name = name
    this.listId = listId
    this.id = id
    this.checked = checked
  }
  

  get Template() {
    return   `<li>${this.name} <i class="fas fa-times ml-2 text-danger" onclick="app.tasksController.deleteTask('${this.id}')"></i></li> <div class ="col-12 my-5 align-center"><input type="checkbox" aria-label="tasksCheckBox" class="mr-3" id="tasksCheckBox" 
    onclick="app.tasksController.tasksCheckBox('${this.checked}', '${this.id}')" ${this.checked ? 'checked' : ''}>
    ${this.name} <i class="fas fa-times ml-3 text-danger" title='delete'
    onclick="app.tasksController.deleteTask('${this.id}')"></i></div>`
  }
  }
