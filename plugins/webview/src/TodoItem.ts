import { TodoResponse } from "@todo/output-data";

const template = document.getElementById('todo-item') as HTMLTemplateElement;
export const makeTodoItem = (item: TodoResponse) => {
  const elWrapper = document.importNode(template.content, true);
  const checkboxId = `todo-item-${item.id}-checkbox`;

  const elListItem = elWrapper.querySelector('.todo-item-wrap') as HTMLLIElement;
  elListItem.dataset.id = item.id;

  const elContent = elWrapper.querySelector('.todo-item-label') as HTMLLabelElement;
  elContent.innerText = item.content;
  elContent.htmlFor = checkboxId;

  const elCheckbox = elWrapper.querySelector('.todo-item-checkbox') as HTMLInputElement;
  elCheckbox.checked = item.completed;
  elCheckbox.id = checkboxId;

  return elWrapper;
};
