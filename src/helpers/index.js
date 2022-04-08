export const getId = () => {
  const id = Math.random().toString(36).split(2, 9);
  const date = new Date().toString(36);
  return id + date;
}
export const formateDate = (date) => {
  const newDate = new Date(date);
  const options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }
  return newDate.toLocaleDateString('es-ES', options);
}