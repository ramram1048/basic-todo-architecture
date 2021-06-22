import { CreateTodoParams } from "@todo/input-data";

interface InputBoundary {
  createTodo: (params: CreateTodoParams) => Promise<void>;
  loadTodo: () => Promise<void>;
}

export default InputBoundary;
