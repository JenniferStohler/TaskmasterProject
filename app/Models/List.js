import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
  constructor(moreLists, id = generateId()) {
    this.id = id,
    //this.color = listColor,
    this.name = moreLists
   }


  get Template() {
    return /*html*/` 
    <div class="col-md-4">
        <form class="bg-white rounded p-3" onsubmit="app.listsController.addList()">
            <div class="form-group d-flex">
                    <h3>${this.moreLists}</h3>
                    <input type="text" name="taskname" id="taskname" class="form-control" placeholder="Add List..."
                        aria-describedby="helpId" required min="3" max="15">
                </div>
    
              <div class="p-3">
              <ul>
                ${this.task}
              </ul>
              </div>
<form class="d-flex p-2" onsubmit="app.tasksController.addTask('${this.id}')">
    <input type="text" name="name" id="taskname" class="form-control" placeholder="Tasks"
        aria-describedby="helpId">
    <button type="submit" class="btn btn-success" title='add task'>Add Task!</button>
    <ul><input type ="checkbox" aria-label="Checkbox for following text input" class="mr-3" id="listCheckBox" name="listCheckBox" onchange="app.tasksController.toggleTask('${this.id}')"${this.complete ? "Checked" : !"Checked"} titel='Check when completed'>${this.taskname} <i class="fas fa-times ml-2 text-danger" onclick="app.tasksController.deleteTask('{this.id}')" title='Delete Task'></i></ul>
</form>
</div>
</div>`
    
  }

  get Tasks() {
    let task = ProxyState.tasks.filter(li => li.listId === this.id)
    let template = ''
    task.forEach(li => template += li.Template)
    return template
  }

}

