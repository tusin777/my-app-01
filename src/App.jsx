import { useState } from "react";
import { handleStatus } from "./handleStatus";
import {
  useCreateTodoMutation,
  useDeleteTodoMutation,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from "./services/api";

export function App() {
  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);
  const [editTodo, setEditTodo] = useState("");

  const { data: todos, isLoading, error, refetch } = useGetTodosQuery();
  const [updateTodo, { isLoading: isUpdating, error: updateError }] =
    useUpdateTodoMutation();

  const [createTodo, { isLoading: isCreating, error: createError }] =
    useCreateTodoMutation();

  const [deleteTodo, { isLoading: isDeleting, error: deleteError }] =
    useDeleteTodoMutation();

  const statusMessage = handleStatus({
    isLoading,
    isUpdating,
    isDeleting,
    isCreating,
    error,
    updateError,
    createError,
    deleteError,
  });

  if (statusMessage) return <div>{statusMessage}</div>;

  const handleToggleComplete = async (todo) => {
    await updateTodo({
      id: todo.id,
      completed: !todo.completed,
    }).unwrap();
  };

  const handleAddTodo = async (e) => {
    e.preventDefault();

    if (!newTodo.trim()) return;

    await createTodo({
      title: newTodo,
      completed: false,
      createdAt: new Date().toISOString(),
    });

    setNewTodo("");
    refetch();
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id).unwrap();
    refetch();
  };

  const startEditing = (todo) => {
    setEditingTodo(todo);
    setEditTodo(todo.title);
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();

    if (!editTodo.trim()) return;
    await updateTodo({
      id: editingTodo.id,
      title: editTodo,
    });
    setEditingTodo(null);
  };

  return (
    <div className="p-5 max-w-2xl mx-auto">
      <h1 className="text-2xl mb-4 font-bold">Управление задачами</h1>

      {/* Форма добавления */}
      <form onSubmit={handleAddTodo}>
        <div className="mb-5 flex">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Новая задача"
            className="flex-grow mr-2 px-3 py-2 border rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded
             hover:bg-blue-600 cursor-pointer"
          >
            Добавить
          </button>
        </div>
      </form>

      {/*Список задач*/}

      <ul className="space-y-2">
        {todos &&
          todos.map((todo) => (
            <li key={todo.id}>
              <div className="mb-2 flex items-center border-2 border-gray-400 p-2 rounded">
                {editingTodo?.id === todo.id ? (
                  <div>
                    <form onSubmit={handleSaveEdit}>
                      <input
                        type="text"
                        value={editTodo}
                        onChange={(e) => setEditTodo(e.target.value)}
                        placeholder="Новая задача"
                        className="flex-grow mr-2 px-3 py-2 border rounded"
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 bg-yellow-500 text-white rounded
             hover:bg-yellow-600 cursor-pointer"
                      >
                        Сохранить
                      </button>
                    </form>
                  </div>
                ) : (
                  <div>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => handleToggleComplete(todo)}
                      className="mr-2 h-5 w-5"
                    />
                    <span
                      className={`flex-grow ${
                        todo.completed ? "line-through" : ""
                      }`}
                    >
                      {todo.title}
                    </span>
                    <button
                      onClick={() => startEditing(todo)}
                      className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer mx-4"
                    >
                      Редактировать
                    </button>
                    <button
                      onClick={() => handleDeleteTodo(todo.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
                    >
                      Удалить
                    </button>
                  </div>
                )}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
