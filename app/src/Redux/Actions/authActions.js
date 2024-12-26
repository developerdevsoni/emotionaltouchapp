import { apiConstants } from "../../constants/appConstants";

//!SECTION for sending otp
export const signUpAction = (data, navigation) => {
  let action = {
    type: apiConstants.API_SIGN_UP_LOAD,
    data,
    navigation,
  }
  return action
}

//!SECTION for Login
export const LoginAction = (data, navigation) => {
  let action = {
    type: apiConstants.API_LOGIN_LOAD,
    data,
    navigation,
  }
  return action
}


//!SECTION for API_VERIFY_OTP_LOAD
export const submitOtpAction = (data, navigation) => {
  let action = {
    type: apiConstants.API_VERIFY_OTP_LOAD,
    data,
    navigation,
  }
  return action
}

//!SECTION for API_RESEND_OTP_LOAD
export const resendOtpAction = (data, navigation) => {
  let action = {
    type: apiConstants.API_RESEND_OTP_LOAD,
    data,
    navigation,
  }
  return action
}


//SECTION - FORGOT PASSWORD 
export const forgotPasswordAction = (data,navigation) => {
  let action = {
    type: apiConstants.API_FORGOT_PASSWORD_LOAD,
    data,
    navigation

  }
  return action
}

//SECTION - GET PROFILE
export const getProfileAction = (data,navigation) => {
  let action = {
    type: apiConstants.API_GET_PROFILE_LOAD,
    data,
    navigation

  }
  return action
}


//SECTION - TOPICS LIST
export const getTopicsListAction = (data,navigation) => {
  let action = {
    type: apiConstants.API_GET_TOPICS_LOAD,
  }
  return action
}

//SECTION - CHANGE PASSWORD
export const changePasswordAction = (data,navigation) => {
  let action = {
    type: apiConstants.API_CHANGE_PASSWORD_LOAD,
    data,
    navigation

  }
  return action
}

export const deleteAccountAction = () => {
  let action = {
    type: apiConstants.API_DELETE_ACCOUNT_LOAD,
  }
  return action
}

export const LogoutAction = () => {
  let action = {
    type: apiConstants.API_LOGOUT_LOAD,
  }
  return action
}










