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

    const expectedTwo = [
      {
        id: 1,
        text: "turn the heating on!",
        status: "incomplete",
      },
    ];

    // execute
    const result = todoList.create(1, "turn the heating on!", "incomplete");
    const resultTwo = todoList.getAll();
    // verify
    expect(result).toEqual(expected);
    expect(resultTwo).toEqual(expectedTwo);
  });

  it("change status to complete", () => {
    // set up
    const expectedThree = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete",
    };

    const expectedFour = {
      id: 1,
      text: "turn the heating on!",
      status: "complete",
    };

    // execute
    todoList.create(1, "turn the heating on!", "incomplete");
    const resultFour = todoList.setComplete(1);

    // verify
    expect(resultFour).toEqual(expectedFour);
  });

  it("list all complete/incomplete todos", () => {
    // set up

    const incompleteToDos = [
     {
        id: 1,
        text: "turn the heating on!",
        status: "incomplete",
      },
  
    {
        id: 2,
        text: "turn the shower off",
        status: "incomplete",
      },
  {
        id: 3,
        text: "turn the lights off",
        status: "incomplete",
      
    }]

    const completeTodos = [
      {
        id: 4,
        text: "turn the music down",
        status: "complete",
      },
  
    {
        id: 5,
        text: "tidy the kitchen",
        status: "complete",
      },
  {
        id: 6,
        text: "mop the floor",
        status: "complete",
      
    }
    ]

    // execute
    todoList.create(1,"turn the heating on!", "incomplete" );
    todoList.create(2, "turn the shower off", "incomplete");
    todoList.create(3,"turn the lights off", "incomplete" );
    todoList.create(4, "turn the music down", "complete");
    todoList.create(5,"tidy the kitchen", "complete" );
    todoList.create(6, "mop the floor", "complete");
    const resultFive = todoList.getCompleteTodos();
    const resultSix = todoList.getIncompleteTodos();

    // verify
    expect(resultFive).toEqual(completeTodos);
    expect(resultSix).toEqual(incompleteToDos);
  });

  it("search for a todo", () => {
    // set up

    const errorMessage = "ITEM NOT FOUND"
    const expectedSeven = {
      id: 6,
      text: "mop the floor",
      status: "complete",
  }

  const expectedFour = 
    {
       id: 1,
       text: "turn the heating on!",
       status: "incomplete",
     }

    // execute
    todoList.create(1,"turn the heating on!", "incomplete" );
    todoList.create(2, "turn the shower off", "incomplete");
    todoList.create(3,"turn the lights off", "incomplete" );
    const resultSeven = todoList.searchForTodo(6)
    const resultEight = todoList.searchForTodo(1)
    // verify
    expect(resultSeven).toEqual(errorMessage);
    expect(resultEight).toEqual(expectedFour);
  });

  it("remove a todo", () => {
    // set up
    const removedTodo = {
      id: 2,
      text: "turn the shower off",
      status: "incomplete",
    };

    // execute
    todoList.create(1,"turn the heating on!", "incomplete" );
    todoList.create(2, "turn the shower off", "incomplete");
    todoList.create(3,"turn the lights off", "incomplete" );
    const resultNine = todoList.removeTodo(2);

    // verify
    expect(resultNine).toEqual(removedTodo);
  });
});
