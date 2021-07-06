import { ChangeTodoParams, CreateTodoParams } from "@todo/input-data";

interface InputBoundary {
  createTodo: (params: CreateTodoParams) => Promise<void>;
  changeTodo: (params: ChangeTodoParams) => Promise<void>;
  loadTodo: () => Promise<void>;
}

export default InputBoundary;
