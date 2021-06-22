class Todo {
  public readonly id: string;
  public content: string;
  public completed: boolean;
  public readonly createdAt: Date;

  constructor (params: Todo) {
    this.id = params.id;
    this.content = params.content;
    this.completed = params.completed;
    this.createdAt = params.createdAt;
  }
}

export default Todo;
