import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor(taskName, listId, id = generateId()) {
    this.id = id
    this.name = taskName
    //this.color
    this.listId = listId
    this.checked = checked
  }
  

  get Template() {
       
    return  `<li>${this.taskName} <i class="fas fa-times ml-2 text-danger" onclick="app.tasksController.deleteTask('${this.id}')"></i></li>
    <div class="col-md-4 py-3">
    //   <div class="task-card shadow bg-white rounded">
    //       <div class="text-center ${this.color} p-2 d-flex justify-content-between">
    //           <h3>${this.name}</h3>
    //           <div id="taskCount"><span class="taskCount"> ${ProxyState.tasks.length}/${this.taskCount}</span></div>
    //           <i class="fas fa-times ml-2" onclick="app.tasksController.deleteTask('${this.id}')" title='Erase Task'></i>
    //       </div>
    //       <div class="p-3">
              <ul>
                  ${this.name}
              </ul>
    //       </div>
    //       <form class="d-flex p-2" onsubmit="app.tasksController.addTasks('${this.id}')">
    //           <input type="text" name="taskname" id="${this.id}" class="form-control" placeholder="Task Name" aria-describedby="helpId" minlength="3" maxlength="50" required>
    //           <button type="submit" class="btn btn-success" title='Add Task Here'><i
    //                   class="fas fa-plus">Task</i></button>
    //       </form>
    //   </div>
    // </div>
    `
  }
}