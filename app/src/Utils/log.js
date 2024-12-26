//For Common Log Display  Function
export const LogDisplay = function (key, value) {
  let isLog = false;

  if (isLog) {
    if (value) {
      return console.log(key, value);
    }
    else {
      return console.log(key);
    }
  }
  return null;
};
