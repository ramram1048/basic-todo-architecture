import InputBoundary from "@todo/input-boundary";

const TodoFormController = class {
  constructor (
    private el: HTMLFormElement, 
    private useCaseHandler: InputBoundary,
  ) {}

  init () {
    this.el.addEventListener('submit', this.handleSubmit.bind(this));
  }

  async handleSubmit (e: Event) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      todo: HTMLInputElement;
    };
    await this.useCaseHandler.createTodo({ content: target.todo.value });
    target.todo.value = '';
  };
};

export default TodoFormController;
