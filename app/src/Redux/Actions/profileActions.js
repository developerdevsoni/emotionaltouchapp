import { apiConstants } from "../../constants/appConstants";

//!SECTION for sending otp
export const completeProfileStep1 = (data, navigation) => {
  let action = {
    type: apiConstants.API_COMPLETE_PROFILE_STEP1_LOAD,
    data,
    navigation,
  }
  return action
}


export const completeProfileStep2 = (data, navigation) => {
  let action = {
    type: apiConstants.API_COMPLETE_PROFILE_STEP2_LOAD,
    data,
    navigation,
  }
  return action
}


export const completeProfileStep3 = (data, navigation) => {
  let action = {
    type: apiConstants.API_COMPLETE_PROFILE_STEP3_LOAD,
    data,
    navigation,
  }
  return action
}

export const editProfile = (data, navigation) => {
  let action = {
    type: apiConstants.API_EDIT_PROFILE_LOAD,
    data,
    navigation,
  }
  return action
}









