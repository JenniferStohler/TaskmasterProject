import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
  constructor(name, id = generateId()) {
    this.id = id
    this.name = name
    this.color = color
   }


  get Template() {
    return /*html*/` 
    <div class="${this.color} col-md-4">
        <form class="bg-white rounded p-3" onsubmit="app.listsController.addList()">
            <div class="form-group d-flex">
                    <h3>${this.name}</h3>
              <i class="fas fa-dumpster ml-2" onclick="app.listsController.deleteList('${this.id}')" title='delete'></i> 
            </div>
    
              <div class="p-3">
              <ul>
                ${this.Tasks}
              </ul>
              </div>
<form class="d-flex p-2" onsubmit="app.tasksController.addTask('${this.id}')">
    <input type="text" name="name" id="taskname" class="form-control" placeholder="addTasks"
        aria-describedby="helpId">
    <button type="submit" class="btn btn-success" onsubmit="app.tasksController.addTask(${this.name})" title='add task'>Add Task!</button>
    <ul><input type ="checkbox" aria-label="Checkbox for following text input" class="mr-3" id="listCheckBox" name="listCheckBox" onchange="app.tasksController.toggleTask('${this.id}')"${this.complete ? "Checked" : !"Checked"} titel='Check when completed'>${this.taskname} <i class="fas fa-times ml-2 text-danger" onclick="app.tasksController.deleteTask('${this.id}')" title='Delete Task'></i></ul>
</form>
</div>
</div>`
    
  }

  get Tasks() {
    let tasks = ProxyState.tasks.filter(ti => ti.listId === this.id)
    let template = ''
    tasks.forEach(ti => template += ti.Template)
    return template
  }

}

