export default function useDate(date: string) {
  const currentDate = new Date(date);
  return {
    month: currentDate.getMonth() + 1,
    day: currentDate.getDate(),
    hour: currentDate.getHours() + 9,
    minute: currentDate.getMinutes(),
  };
}
