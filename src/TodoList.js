// - Create a todo item that has an ID, text description, and starts off incomplete
// - Get all todo items
// - Set a todo completed by its ID
// - Get only todo items that are incomplete
// - Get only todo items that are complete
// - Search and return a todo item by its ID, or return a message saying it doesn’t exist
// - Remove a todo item by its ID

class TodoList {

constructor() {
    this.todos = []
}

 create (description)  {
     const todo = {
     id: this.todos.length+1 ,
     text: description,
     status:"incomplete"
     } 
     this.todos.push(todo)
     return todo
 }

 setComplete() {
     const completed = {
         id: 1,
         text: description,
         status: "complete"
     }
 }


getAll() {
    return this.todos
}


}




module.exports = TodoList;
