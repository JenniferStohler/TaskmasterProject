import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";

class ListsService {
  deleteList(id) {
    ProxyState.lists = ProxyState.lists.filter(li => li.id != id)
    saveState()
  }
  addList(newList) {
    ProxyState.lists = [...ProxyState.lists, new List(newList.name)]
    saveState()
  }
}


export const listsService = new ListsService();

