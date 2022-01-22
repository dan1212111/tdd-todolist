const Todo = require("./Todo.js");

class TodoList {
  constructor() {
    this.toDoList = [];
  }

  create(id, text) {
    const toDo = new Todo(id, text);
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

  setComplete(id) {
    for (let i = 0; i < this.toDoList.length; i++) {
      if (this.toDoList[i].id === id) {
        this.toDoList[i].setComplete();
        return this.toDoList[i];
      }
    }
  }

  getIncompleteTodos() {
    const incompleteToDos = [];
    for (let i = 0; i < this.toDoList.length; i++) {
      if (this.toDoList[i].status === "incomplete") {
        incompleteToDos.push(this.toDoList[i]);
      }
    }
    // console.log(incompleteToDos)
    return incompleteToDos;
  }

  getCompleteTodos() {
    const completeToDos = [];
    for (let i = 0; i < this.toDoList.length; i++) {
      if (this.toDoList[i].status === "complete") {
        completeToDos.push(this.toDoList[i]);
      }
    }
    // console.log(completeToDos)
    return completeToDos;
  }

  removeTodo(id) {
    for (let i = 0; i < this.toDoList.length; i++) {
      if (id === this.toDoList[i].id) {
        const removedTodo = this.toDoList[i];
        this.toDoList.splice(i, 1);
        return removedTodo;
      }
    }
  }
}

module.exports = TodoList;
