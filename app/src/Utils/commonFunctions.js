export const convertFromData = objectData => {
  let formData = new FormData();
  Object.entries(objectData).map(function ([key, value]) {
    formData.append(key, value);
  });
  return formData;
};

export const makeDiscountArray = () => {
  var list = [];
  for (var i = 5; i <= 100; i = i + 5) {
    list.push({
      label: i.toString(),
      id: i.toString(),
    });
  }
  return list;
};
