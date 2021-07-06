import OutputBoundary from "@todo/output-boundary";
import { TodoListResponse } from "@todo/output-data";
import { makeTodoItem } from "./TodoItem";

const TodoListPresenter = class implements OutputBoundary {
  constructor (private el: HTMLUListElement) {}

  setEntries ({ entries }: TodoListResponse) {
    this.el.innerHTML = '';
    
    entries?.forEach((item) => {
      this.el.appendChild(makeTodoItem(item));
    });
  }
};

export default TodoListPresenter;
