class Todo {
  constructor(id, text) {
    this.id = id;
    this.text = text;
    this.status = "incomplete";
  }

  setComplete() {
    this.status = "complete";
  }
}

module.exports = Todo;
