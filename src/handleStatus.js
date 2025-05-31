export const handleStatus = (status) => {
  if (status.isLoading) return "Загрузка...";
  if (status.isUpdating) return "Обновляется...";
  if (status.isCreating) return "Создается новая задача...";
  if (status.isDeleting) return "Задача удаляется...";

  if (status.error) return `Ошибка: ${status.error.status}`;
  if (status.updateError)
    return `Ошибка обновления: ${status.updateError.data}`;
  if (status.createError)
    return `Ошибка создания новой задачи: ${status.createError.data}`;
  if (status.deleteError)
    return `Ошибка удаления задачи: ${status.deleteError.data}`;
};
