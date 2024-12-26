import { Platform } from 'react-native';
export function convertFormData(param) {
  const postData = {
    ...param,
  };
  let formData = new FormData();
  Object.entries(postData).map(function ([key, value]) {
    formData.append(key, value);
  });
  return formData;
}
