import Todo from "@todo/entities/Todo";

interface IDataAccess {
  generateObjectId: () => string;
  save: (todo: Todo) => Promise<void>;
  load: () => Promise<Todo[]>;
  find: (id: string) => Promise<Todo>;
}

export default IDataAccess;
