import LocalStorageManager from "@todo/local-storage";
import TodoUseCases from "@todo/use-case-interactor";
import TodoFormController from "./TodoFormController";
import TodoListController from "./TodoListController";
import TodoListPresenter from "./TodoListPresenter";

const elTodoList = document.getElementById('todo-list') as HTMLUListElement;
const elTodoForm = document.getElementById('todo-form') as HTMLFormElement;

const dataAccess = new LocalStorageManager();
const todoList = new TodoListPresenter(elTodoList);
const useCaseHandler = new TodoUseCases(dataAccess, todoList);

new TodoListController(elTodoList, useCaseHandler).init();
new TodoFormController(elTodoForm, useCaseHandler).init();

useCaseHandler.loadTodo();
