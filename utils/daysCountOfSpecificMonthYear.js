export const daysOfMonthArr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //month starts from 0
export const nameOfMonthArr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]; // 26 Feb 16:19:34

export const daysCountOfSpecificMonthYear = ({ year, month }) => {
  if (parseInt(month, 10) !== 2) {
    return daysOfMonthArr[month];
  }
  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 !== 0) {
      return 28;
    }
    return 29;
  }
  return 28;
};
