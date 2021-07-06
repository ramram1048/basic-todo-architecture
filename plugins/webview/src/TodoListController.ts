import InputBoundary from "@todo/input-boundary";

const TodoListController = class {
  constructor (
    private el: HTMLUListElement, 
    private useCaseHandler: InputBoundary,
  ) {}

  init () {
    this.el.addEventListener('click', this.handleChangeComplete.bind(this));
  }

  handleChangeComplete = (e: Event) => {
    const target = e.target as typeof e.target & HTMLInputElement;
    if (target.classList.contains('todo-item-checkbox')) {
      const id = target.parentElement.dataset.id;
      this.useCaseHandler.changeTodo({
        id,
        completed: target.checked,
      });
    }
  };
};

export default TodoListController;
