class TodoList {
  constructor() {
    this.toDoList = [];
  }

  create(id, text, status) {
    const toDo = {
      id: id,
      text: text,
      status: status,
    };
    this.toDoList.push(toDo);
    return toDo;
  }

  getAll() {
    return this.toDoList;
  }

  searchForTodo(id) {
    let foundTodo = [];
    for (let i = 0; i < this.toDoList.length; i++) {
      if (this.toDoList[i].id === id) {
        foundTodo = this.toDoList[i];
        return foundTodo;
      }
    }
    return "ITEM NOT FOUND";
  }

  getIncompleteTodos() {
    const incompleteToDos = [];
    for (let i = 0; i < this.toDoList.length; i++) {
      if (this.toDoList[i].status === "incomplete") {
        incompleteToDos.push(this.toDoList[i]);
      }
    }
    return incompleteToDos;
  }

  getCompleteTodos() {
    const completeToDos = [];
    for (let i = 0; i < this.toDoList.length; i++) {
      if (this.toDoList[i].status === "complete") {
        completeToDos.push(this.toDoList[i]);
      }
    }
    return completeToDos;
  }

  setComplete(id) {
    for (let i = 0; i < this.toDoList.length; i++) {
      const toDo = this.toDoList[i];
      if (toDo.id === id) {
        toDo.status = "complete";
        this.toDoList.push(toDo);
      }
      return toDo;
    }
  }

  removeTodo(id) {
    for (let i = 0; i < this.toDoList.length; i++) {
      if (id === this.toDoList[i].id) {
        const removedTodo = this.toDoList[i]
        this.toDoList.splice(i, 1)
        return removedTodo;
      }
    }
  }
}

module.exports = TodoList;
