const TodoList = require("../src/TodoList.js");

describe("TodoList", () => {
  let todoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  it("creates a todo item", () => {
    // set up
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete",
    };
    // execute
    const result = todoList.create("turn the heating on!");
    // verify
    expect(result).toEqual(expected);
  });

  it("creates a second todo item", () => {
    // set up
    const expectedOne = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete",
    };

    const expectedTwo = {
      id: 2,
      text: "make lunch!",
      status: "incomplete",
    };
    // execute
    const resultOne = todoList.create("turn the heating on!");
    const resultTwo = todoList.create("make lunch!");
    // verify
    expect(resultOne).toEqual(expectedOne);
    expect(resultTwo).toEqual(expectedTwo);
  });

  //get all Todo items
  it("get all ToDos", () => {
    // set up
    const expected = [];

    //execute
    const allTodos = todoList.getAll();

    //verify
    expect(allTodos).toEqual(expected);
  });

  it("return single Todo", () => {
    // set up
    const expectedOne = [
      {
        id: 1,
        text: "turn the heating on!",
        status: "incomplete",
      },
    ];

    todoList.create("turn the heating on!")

    //execute
    const allTodos = todoList.getAll();

    //verify
    expect(allTodos).toEqual(expectedOne);
  });
  it("set item completed by ID", () => {
    // set up
    const expectedOne = [
      {
        id: 1,
        text: "turn the heating on!",
        status: "complete",
      },
    ];

    todoList.create("turn the heating on!")

    //execute
    todoList.setComplete(1)
    const allTodos = todoList.getAll();
    
    //verify
    expect(allTodos).toEqual(expectedOne);
  });
});
