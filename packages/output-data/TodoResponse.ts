export interface TodoResponse {
  id: string;
  content: string;
  completed: boolean;
  createdAt: Date;
}

export interface TodoListResponse {
  entries: TodoResponse[];
}
