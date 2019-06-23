import { nameOfMonthArr } from "./daysCountOfSpecificMonthYear";

export const MMMToIndexObj = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

export const returnChoosableMonthsObj = ({ beginMonth, endMonth }) => {
  const beginArr = beginMonth.split(" ");
  const endArr = endMonth.split(" ");
  const result = {};
  const startIndex = MMMToIndexObj[beginArr[0]];
  const endIndex = MMMToIndexObj[endArr[0]];
  result[beginArr[1]] = [];
  for (let j = startIndex; j < 12; j++) {
    result[beginArr[1]].push(nameOfMonthArr[j]);
  }

  for (let i = parseInt(beginArr[1], 10) + 1; i < endArr[1]; i++) {
    result[i] = nameOfMonthArr;
  }
  result[endArr[1]] = [];
  for (let k = 0; k <= endIndex; k++) {
    result[endArr[1]].push(nameOfMonthArr[k]);
  }
  return result;
};
