import { daysCountOfSpecificMonthYear } from "./daysCountOfSpecificMonthYear";

export const returnDaysArr = xdate => {
  const firstDay = xdate.setDate(1).getDay();
  const daysCount = daysCountOfSpecificMonthYear({
    year: xdate.getFullYear(),
    month: xdate.getMonth(),
  });
  const arr = [];
  for (let i = 0; i < firstDay; i++) {
    arr.push({ day: "" });
  }
  for (let i = 1; i <= daysCount; i++) {
    arr.push({ day: i });
  }
  return arr;
};
