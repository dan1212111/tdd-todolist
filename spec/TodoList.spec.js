const Todo = require("../src/Todo.js");
const TodoList = require("../src/TodoList.js");

describe("TodoList", () => {
  let todoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  it("creates a todo item", () => {
    // set up
    const expected = new Todo(1, "turn the heating on!");
    const expectedTwo = [
      new Todo(1, "turn the heating on!"),
      new Todo(1, "turn the heating on!"),
    ];

    // execute
    const result = todoList.create(1, "turn the heating on!");
    todoList.create(1, "turn the heating on!");
    const resultTwo = todoList.getAll();
    // verify
    expect(result).toEqual(expected);
    expect(resultTwo).toEqual(expectedTwo);
  });

  it("change status to complete", () => {
    // set up
    const expected = new Todo(1, "turn the pump on!", "complete");
    expected.status = "complete";

    // execute
    todoList.create(1, "turn the pump on!");
    todoList.create(2, "turn the ligths on!");
    const result = todoList.setComplete(1);

    // verify
    expect(result).toEqual(expected);
  });

  it("list all complete/incomplete todos", () => {
    // set up
    const incompleteTodos = [
      new Todo(1, "turn the ligths on!"),
      new Todo(2, "turn the shower off"),
    ];

    // execute
    todoList.create(1, "turn the ligths on!");
    todoList.create(4, "turn the music down");
    todoList.create(2, "turn the shower off");

    // todoList.create(5, "tidy the kitchen")
    const complete = todoList.setComplete(4);

    // todoList.setComplete(5)
    const resultFive = todoList.getIncompleteTodos();
    const resultSix = todoList.getCompleteTodos();

    // verify
    expect(resultFive).toEqual(incompleteTodos);
    expect(resultSix).toEqual([complete]);
  });

  it("search for a todo", () => {
    // set up
    const errorMessage = "ITEM NOT FOUND";
    const expectedSeven = new Todo(6, "mop the floor");
    const expectedFour = new Todo(1, "turn the heating on!");

    // execute
    todoList.create(1, "turn the heating on!", "incomplete");
    todoList.create(2, "turn the shower off", "incomplete");
    todoList.create(3, "turn the lights off", "incomplete");
    const resultSeven = todoList.searchForTodo(6);
    const resultEight = todoList.searchForTodo(1);
    // verify
    expect(resultSeven).toEqual(errorMessage);
    expect(resultEight).toEqual(expectedFour);
  });

  it("remove a todo", () => {
    // set up
    const removedTodo = new Todo(2, "turn the shower off");

    // execute
    todoList.create(1, "turn the heating on!", "incomplete");
    todoList.create(2, "turn the shower off", "incomplete");
    todoList.create(3, "turn the lights off", "incomplete");
    const resultNine = todoList.removeTodo(2);

    // verify
    expect(resultNine).toEqual(removedTodo);
  });
});
