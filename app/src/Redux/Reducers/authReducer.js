import { DataManager } from "../../Utils/dataManager";
import { access_keys } from "../../Utils/dataManagerKeys";
import { apiConstants } from "../../constants/appConstants";
// import { navigationRef } from "../../navigation/navigationServices";



const initialState = {
  signUpData: null,
  // verified:false,
  otpResend: false,
  // userLogInData:null,
  userToken: null,
  userInfo: null,
  isSignUp: false,
  isLogin: false,
 
  firstTime: true,
  profileComp: false,
  profileData:null,
  welcomeScreens:[],
  topicsList:[],
  homeList:null
}

export function authReducer(state = initialState, action) {

  const remove = async () => {
    await DataManager.multiRemoveData([access_keys.access_token, access_keys.filter, access_keys.userDetails, access_keys.user_type, access_keys.user_id])
    // navigationRef.current.navigate('Login')
  }
  console.log("jdjbhjd", action);

  switch (action.type) {

    case apiConstants.API_GET_WELCOME_SCREENS_SUCCESS:
      console.log("profile get success @@@!!!!!#####", action);
      return {
        ...state,
        welcomeScreens: action?.result?.data
      };

      case apiConstants.API_GET_TOPICS_SUCCESS:
        console.log("topicslslsls", action);
        return {
          ...state,
          topicsList: action?.result?.topic
        };


    case apiConstants.API_LOGIN_SUCCESS:
      return {
        ...state,
        userData: action?.data?.userData,
        homeList:action.homeList,
        userToken: action.token,
      };

    case apiConstants.API_SIGN_UP_SUCCESS:
      console.log(action.data,'API_SIGN_UP_SUCCESS')
      return {
        ...state,
        signUpData: action.data,
      };
    case apiConstants.API_FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        userData: action.data,
        // userId: action.userId
        // userData: action.data,
      };



    case apiConstants.API_VERIFY_OTP_LOAD:
      return {
        ...state,
        // verified: action.data.result.success,
        //userLogInData:action.data.result.data.token
      };

    case apiConstants.API_VERIFY_OTP_SUCCESS:
      console.log("reducer success @@@!!!!!#####", action.data);

      return {
        ...state,
      };

    case apiConstants.API_SET_PASSWORD_SUCCESS:
      console.log("reducer success @@@!!!!!#####", action.data);

      return {
        ...state,
      };
      case apiConstants.API_UPDATE_MOBILE_NUMBER_SUCCESS:
        console.log("reducer success @@@!!!!!#####API_UPDATE_MOBILE_NUMBER_SUCCESS", action.data);
        let data=state.profileData
         data.api_token=action?.data?.api_token;
        data.phone_number=action?.data?.phone_number
        console.log("API_UPDATE_MOBILE_NUMBER_SUCCESS--------", data);

        return {
          ...state,
          profileData:data
        };

    case apiConstants.API_CHANGE_PASSWORD_SUCCESS:
      console.log("reducer success @@@!!!!!#####", action);
      return {
        ...state,
      };
    case apiConstants.API_GET_PROFILE_SUCCESS:
      console.log("profile get success @@@!!!!!#####", action);
      return {
        ...state,
        profileData: action?.result
      };

    case apiConstants.API_UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        profileData:action?.data?.userDetails
      };
    case apiConstants.API_PRIVACY_POLICY_SUCCESS:
      return {
        ...state,
        privacy:action.result

      };

      case apiConstants.API_TERMS_SERVICE_SUCCESS:
        return {
          ...state,
          terms:action.result
        };

    case apiConstants.API_GET_CATEGORIES_SUCCESS:
      console.log('API_CATEGORIES_LIST_SUCCESS', action.result)
      return {
        ...state,
        categories: action.result.data,
      };

 
    case apiConstants.SET_TOKEN:
      return {
        ...state,
        userToken: action.token,
        verified: false,
        profileComp: action.profileComp
      }
    case apiConstants.API_REMOVE_TOKEN:
      remove()

      return {
        ...state,
        userToken: null,
        verified: false,
        profileData: null,
      }
    case apiConstants.LOGOUT:
     
      remove()
      return {
        ...state,
        userToken: null,
        verified: false,
        profileData: null,
        userData: null
      }


    default:
      return state
  }

}