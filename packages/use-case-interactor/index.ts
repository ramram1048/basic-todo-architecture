import Todo from "@todo/entities/Todo";
import IDataAccess from "@todo/data-access-interface";
import { ChangeTodoParams, CreateTodoParams } from "@todo/input-data";
import InputBoundary from "@todo/input-boundary";
import OutputBoundary from "@todo/output-boundary";

class TodoUseCases implements InputBoundary {
  constructor (
    private readonly dataAccess: IDataAccess, 
    private readonly presenter: OutputBoundary
  ) {}

  async createTodo (params: CreateTodoParams) {
    const id = this.dataAccess.generateObjectId();
    const instance = new Todo({
      id,
      content: params.content,
      completed: false,
      createdAt: new Date(),
    });
    await this.dataAccess.save(instance);
    await this.loadTodo();
  }

  async loadTodo () {
    const entries = await this.dataAccess.load();
    this.presenter.setEntries({ entries });
  }

  async changeTodo (params: ChangeTodoParams) {
    const target = await this.dataAccess.find(params.id);
    const instance = new Todo({
      ...target,
      ...params,
    })
    await this.dataAccess.save(instance);
    await this.loadTodo();
  }
}

export default TodoUseCases;
