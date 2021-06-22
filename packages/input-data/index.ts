export type CreateTodoParams = {
  content: string;
};

export type ChangeTodoParams = {
  id: string;
  content?: string;
  completed?: boolean;
};
