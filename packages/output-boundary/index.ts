import { TodoListResponse } from "@todo/output-data";

interface OutputBoundary {
  setEntries: (entries: TodoListResponse) => void;
}

export default OutputBoundary;
