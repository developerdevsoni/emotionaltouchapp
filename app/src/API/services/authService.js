import {axiosApiFormData} from '../axiosConfig';
import APIConstants from '../APIConstants';
import {convertFromData} from '../../utilsFunctions/commonFunctions';

//----------------------------- REVIEW: Register new user API call.--------------------------------------
export const registerUserApiCall = async params => {
  const formData = convertFromData(params);
  try {
    const apiResponse = await axiosApiFormData().post(
      APIConstants.REGISTER,
      formData,
    );
    if (apiResponse.data.status) {
      return apiResponse.data;
    } else {
      throw apiResponse.data;
    }
  } catch (error) {
    throw error;
  }
};
