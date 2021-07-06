import IDataAccess from "@todo/data-access-interface";
import Todo from "@todo/entities/Todo";

const localStorageKey = 'todos'
const makeByte = (n: number, byteCount: number) => n.toString(16).slice(-byteCount).padStart(byteCount, '0');
let counter = Math.trunc(Math.random() * 4096);

const LocalStorageManager = class implements IDataAccess {
  generateObjectId () {
    const timestampPart = makeByte(Date.now(), 4);
    const randomPart = makeByte(Math.trunc(Math.random() * 1048576), 5);
    const counterPart = makeByte(++counter, 3);
    return `${timestampPart}${randomPart}${counterPart}`;
  };

  async save (todo: Todo) {
    const current: Todo[] = await this.load();
    const index = current.findIndex((item) => item.id === todo.id);
    const isChange = index !== -1;

    const next = isChange ? [
      ...current.slice(0, index),
      todo,
      ...current.slice(index + 1),
    ] : [...current, todo];

    localStorage.setItem(localStorageKey, JSON.stringify(next));
  };

  async load () {
    return JSON.parse(localStorage.getItem(localStorageKey)) || [];
  };

  async find (id: string) {
    const current: Todo[] = await this.load();
    return current.find((item) => item.id === id);
  };
}

export default LocalStorageManager;
