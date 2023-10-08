type UtcHoursProps = {
  year?: number;
  month?: number;
  date?: number;
  hour?: number;
  minute?: number;
  second?: number;
};

export const getUtcHours = (props: UtcHoursProps) => {
  const currentDate = new Date();
  const {
    year = currentDate.getFullYear(),
    month = currentDate.getMonth() + 1,
    date = currentDate.getDate(),
    hour = currentDate.getHours(),
    minute = currentDate.getMinutes(),
    second = currentDate.getSeconds(),
  } = props;

  return new Date(
    `${year}-${parseTime(month)}-${parseTime(date)}T${parseTime(
      hour,
    )}:${parseTime(minute)}:${parseTime(second)}Z`,
  );
};

const parseTime = (value: number) => {
  return value.toString().padStart(2, '0');
};
