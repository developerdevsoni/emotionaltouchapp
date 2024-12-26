import { call, put } from 'redux-saga/effects';
import { Fetch, setAccessToken } from '../Fetch/index';
import { showMessage } from 'react-native-flash-message';

import color from '../../../rsc/theme/color';
import { CustomAlert } from '../../../rsc/theme/customAlert';
import { getInternetStatus } from '../../../rsc/theme/internetStatus';
import { DataManager } from '../../Utils/dataManager';
import { access_keys } from '../../Utils/dataManagerKeys';
import { DeviceEventEmitter } from 'react-native';
import { apiConstants } from '../../constants/appConstants';
import { ValidationConstants } from '../../constants/validationConstants';
import { SCREEN_CONSTANT } from '../../navigation/constant';

function* ResetSaga() {
  console.log('reset saga called')
  // DataManager.clear()
  yield put({
    type: apiConstants.API_REMOVE_TOKEN,
    data: null
  })
}

export function* SignUpSaga(action) {
  const internetStatus = yield call(getInternetStatus)
  if (internetStatus) {
    try {
      console.log("@@try 1");
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: true
      })
      const response = yield call(Fetch.createUser, action.data)
      console.log("@@ in saga response", response);
      console.log("@@ in saga response status", response.status);
      if (response.status == 0) {
        if (response.result.status == 'success') {

        console.log("toooooken in saga response done", {...response?.result?.data,...action.data});
        action.navigation.navigate(SCREEN_CONSTANT.OTP,{loginData:{...response?.result?.data,...action.data}})
       
       

        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        }
        else{
          yield put({
            type: apiConstants.UPDATE_LODING_STATE,
            data: false
          })
        CustomAlert(response.result.message)

        }

      }
      else if (response.result.status == 'error') {
        console.log("@@try else if 1");
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        CustomAlert(response.result.message)
      }
      else {
        console.log("@@try else 2");
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        showMessage({
          message: response.result.message,
          type: "info",
          backgroundColor: color.flashMessage,
        })
      }
    }
    catch (e) {
      console.log("@@catch 1", e);
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
      showMessage({
        message: ValidationConstants.offline,
        type: "info",
        backgroundColor: color.flashMessage,
      })
    }
  }
  else {
    console.log("@@catch else 1");
    showMessage({
      message: ValidationConstants.offline,
      type: "info",
      backgroundColor: color.flashMessage,
    })
  }
}

export function* LoginSaga(action) {

  const internetStatus = yield call(getInternetStatus)
  if (internetStatus) {
    try {
      console.log("@@@ in saga internet", action);
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: true
      })
      const response = yield call(Fetch.Login, action.data)
      console.log(response, 'response of login')
      if (response.status == 0) {
        if (response.result.status == 'success') {

        console.log("toooooken in saga response done", {...response?.result?.data,...action.data});
        action.navigation.navigate(SCREEN_CONSTANT.OTP,{loginData:{...response?.result?.data,...action.data}})
       
       

        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        }
        else{
          yield put({
            type: apiConstants.UPDATE_LODING_STATE,
            data: false
          })
        CustomAlert(response.result.message)

        }

      }
      else if (response.status == 1) {
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        CustomAlert(response.result.message)
      }
      else {
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        CustomAlert(response.result.message)
      }
    }
    catch (e) {
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
      CustomAlert(ValidationConstants.offline)

    }
  } else {
    CustomAlert(ValidationConstants.offline)
  }
}

export function* ResendOtpSaga(action) {
  const internetStatus = yield call(getInternetStatus)
  if (internetStatus) {
    try {
      console.log("@@@ in saga internet");
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: true
      })
      const response = yield call(Fetch.resendOTP, action.data)
      if (response.status == 0) {
        console.log("toooooken in saga response done", response);
        action.navigation.navigate(SCREEN_CONSTANT.OTP,{loginData:response?.result?.data})

        CustomAlert(response.result?.message)

        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        yield put({
          type: apiConstants.API_RESEND_OTP_SUCCESS,
          data: response?.result
        })
        // console.log("@@@@ verify otp success inside saga");
      
      }
      else if (response.result.status == 'error') {
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        CustomAlert(response.result?.message)
      }
      else {
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        showMessage({
          message: response.result.message,
          type: "info",
          backgroundColor: color.flashMessage,
        })
      }
    }
    catch (e) {
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
      CustomAlert(ValidationConstants.offline)

    }
  } else {
    CustomAlert(ValidationConstants.offline)
  }
}

export function* VerifyOtpSaga(action) {
  const internetStatus = yield call(getInternetStatus)
  if (internetStatus) {
    try {
      console.log("@@@ in saga internet");
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: true
      })
      const response = yield call(Fetch.verifyOTP, action.data)
      if (response.result.status == 'success') {
        console.log("toooooken in saga response done verify OTP",response?.result?.data?.user_details?.id);
        DataManager.setAccessToken(response?.result?.data?.api_token)
        DataManager.setUserId(JSON.stringify(response?.result?.data?.user_details?.id))

        DeviceEventEmitter.emit("onLogin")
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        yield put({
          type: apiConstants.API_VERIFY_OTP_SUCCESS,
          data: response?.result?.data
        })
      
      }
      else if (response.result.status == 'error') {
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        CustomAlert(response.result?.message)
      }
      else {
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        showMessage({
          message: response.result.message,
          type: "info",
          backgroundColor: color.flashMessage,
        })
      }
    }
    catch (e) {
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
      CustomAlert(ValidationConstants.offline)

    }
  } else {
    CustomAlert(ValidationConstants.offline)
  }
}

export function* SetPasswordSaga(action) {
  const internetStatus = yield call(getInternetStatus)
  if (internetStatus) {
    try {
      console.log("@@@ in saga internet", action.data);
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: true
      })
      const response = yield call(Fetch.SetPassword, action.data)
      if (response.status == 0) {
        console.log("toooooken in saga response done", response);
        // DataManager.setAccessToken(response.result.data.accessToken)
        action.navigation.navigate('Login')

        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        yield put({
          type: apiConstants.API_SET_PASSWORD_SUCCESS,
          data: response?.result
        })
        console.log("@@@@ verify otp success inside saga");
      }
      else if (response.status ==1) {
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        CustomAlert(response.result.message)
      }
      else {
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        showMessage({
          message: response.result.message,
          type: "info",
          backgroundColor: color.red,
        })
      }
    }
    catch (e) {
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
      CustomAlert(ValidationConstants.offline)

    }
  } else {
    CustomAlert(ValidationConstants.offline)
  }
}
  
export function* updateProfileSaga(action) {

  const internetStatus = yield call(getInternetStatus)
  if (internetStatus) {
    try {
      console.log("@@@ in saga internet createProfile", action.data);
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: true
      })
      const response = yield call(Fetch.updateProfile, action.data)
      console.log("@@@ in saga internet createProfile", response);

      if (response?.status == 0) {
        console.log("toooooken in saga create profile done", response);
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        yield put({
          type: apiConstants.API_UPDATE_PROFILE_SUCCESS,
          data: response?.result?.data,
        })
        CustomAlert(response.result.message,color.green)
        action?.navigation?.navigate(action.screen);

        // if(response?.result?.data?.otp_sent !='no')
        // {
        // action?.navigation?.navigate(ScreenConstants.VerifyOtpMobileUpdate,{new_phone_number:action.data.phone_number,OTP:response?.result?.data?.userDetails?.otp,data:action.data});
        // }

      }
     

      else if (response.status == 1) {
        DataManager.multiRemoveData([access_keys.access_token, access_keys.filter, access_keys.userDetails, access_keys.user_type, access_keys.user_id])

        yield put({
          type: apiConstants.API_REMOVE_TOKEN,
          data: null
        })
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        yield put({ type: apiConstants.LOGOUT })
        setTimeout(() => {

          CustomAlert(response?.result?.message)
        }, 100);
      }
      else {
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        CustomAlert(response?.result?.message)
      }
    }
    catch (e) {
      console.log('eee in create profile', e)
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
      CustomAlert(ValidationConstants.offline)

    }
  } else {
    CustomAlert(ValidationConstants.offline)
  }
}

export function* updateMobileSaga(action) {

  const internetStatus = yield call(getInternetStatus)
  if (internetStatus) {
    try {
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: true
      })
      const response = yield call(Fetch.updateMobileApi, action.data)
      if (response?.status == 0) {
        console.log("toooooken API_UPDATE_MOBILE_NUMBER_SUCCESSAPI_UPDATE_MOBILE_NUMBER_SUCCESS", response);
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        if (response.result.status == 'success') {
          console.log("toooooken in saga response done", response);
          // DataManager.setAccessToken(response.result.data.accessToken)
  
          yield put({
            type: apiConstants.API_UPDATE_MOBILE_NUMBER_SUCCESS,
            data: response?.result?.data,
          })
        action.navigation.goBack()

          console.log("@@@@ change pass inside saga");
  
        }
        else if (response.result.status == 'error') {
          yield put({
            type: apiConstants.UPDATE_LODING_STATE,
            data: false
          })
          CustomAlert(response.result.message)
        }
      

      }
     

      else if (response.status == 1) {
        DataManager.multiRemoveData([access_keys.access_token, access_keys.filter, access_keys.userDetails, access_keys.user_type, access_keys.user_id])

        yield put({
          type: apiConstants.API_REMOVE_TOKEN,
          data: null
        })
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        yield put({ type: apiConstants.LOGOUT })
        setTimeout(() => {

          CustomAlert(response?.result?.message)
        }, 100);
      }
      else {
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        CustomAlert(response?.result?.message)
      }
    }
    catch (e) {
      console.log('eee in create profile', e)
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
      CustomAlert(ValidationConstants.offline)

    }
  } else {
    CustomAlert(ValidationConstants.offline)
  }
}

export function* getProfileSaga(action) {
  const internetStatus = yield call(getInternetStatus)
  if (internetStatus) {
    try {
      //   cl("inside try");
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: true
      })
      const response = yield call(
        Fetch.GetProfile,
        action.data
      );
      if (response?.result.status == 'success') {
        // DataManager.setUserType(JSON.stringify(response?.result))
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })

        yield put({
          type: apiConstants.API_GET_PROFILE_SUCCESS,
          result: response?.result?.data?.user_details
        })
      }


      else if (response?.result?.status == 'error') {
        console.log("@@@ //////////////////@@@@@@@@@", response);


        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        CustomAlert(response.result.message)
      }

      if (response.status == 1) {
        DataManager.multiRemoveData([access_keys.access_token, access_keys.filter, access_keys.userDetails, access_keys.user_type, access_keys.user_id])
        yield put({ type: apiConstants.LOGOUT })

        yield put({
          type: apiConstants.API_REMOVE_TOKEN,
          data: null
        })
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        setTimeout(() => {

          CustomAlert(response?.result?.message)
        }, 100);
      }

      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
    } catch (e) {
      console.log(e, 'error in project list')
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
    }
  }
}

export function* ChangePasswordSaga(action) {
  const internetStatus = yield call(getInternetStatus)
  if (internetStatus) {
    try {
      console.log("@@@ in saga internet", action.data);
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: true
      })
      const response = yield call(Fetch.ChangePasswordApi, action.data)
      if (response.result.status == 'success') {
        console.log("toooooken in saga response done", response);
        // DataManager.setAccessToken(response.result.data.accessToken)
        action.navigation.goBack();

        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        yield put({
          type: apiConstants.API_CHANGE_PASSWORD_SUCCESS,
          // data: response?.result?.data
        })
        console.log("@@@@ change pass inside saga");

      }
      else if (response.result.status == 'error') {
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        CustomAlert(response.result.message)
      }
      else {
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        showMessage({
          message: response.result.message,
          type: "info",
          backgroundColor: color.flashMessage,
        })
      }
    }
    catch (e) {
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
      CustomAlert(ValidationConstants.offline)

    }
  } else {
    CustomAlert(ValidationConstants.offline)
  }
}

export function* ForgotPasswordSaga(action) {
  const internetStatus = yield call(getInternetStatus)
  if (internetStatus) {
    try {
      console.log("@@@ in saga internet", action.data);
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: true
      })
      const response = yield call(Fetch.ForgotPasswordApi, action.data)
      if (response.status == 0) {
        console.log("toooooken in saga response done", response);
        // DataManager.setAccessToken(response.result.data.accessToken)
        // action.navigation.goBack();
        // action.navigation.navigate('otpverify', { type: action.data.type, email: action.data.email_mobile })

        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        yield put({
          type: apiConstants.API_FORGOT_PASSWORD_SUCCESS,
          data: response.result,
          // email: response?.result?.data,

        })
        console.log("@@@@ forget pass inside saga");
        action.navigation.navigate('OtpVerify', { email: action.data.email })

      }
      else if (response.result.status == 'error') {
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        CustomAlert(response.result.message)
      }
      else {
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        showMessage({
          message: response.result.message,
          type: "info",
          backgroundColor: color.flashMessage,
        })
      }
    }
    catch (e) {
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
      CustomAlert(ValidationConstants.offline)

    }
  } else {
    CustomAlert(ValidationConstants.offline)
  }
}

export function* getPrivacySaga(action) {
  const internetStatus = yield call(getInternetStatus)
  if (internetStatus) {
    console.log("inside theget profile saga2", action, internetStatus);
    try {
      //   cl("inside try");
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: true
      })
      const response = yield call(
        Fetch.getPrivacyApi
      );
      console.log("response from the get privacy api ==>", response);
      if (response?.status == 0) {
        // DataManager.setUserType(JSON.stringify(response?.result));
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        yield put({
          type: apiConstants.API_PRIVACY_POLICY_SUCCESS,
          result: response?.result
        });
      }


      else if (response?.result?.status == 'error') {
        console.log("@@@ //////////////////@@@@@@@@@", response);


        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        CustomAlert(response.result.message)
      }

      if (response.status == 1) {
        DataManager.multiRemoveData([access_keys.access_token, access_keys.filter, access_keys.userDetails, access_keys.user_type, access_keys.user_id])
        yield put({ type: apiConstants.LOGOUT })

        yield put({
          type: apiConstants.API_REMOVE_TOKEN,
          data: null
        })
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        setTimeout(() => {

          CustomAlert(response?.result?.message)
        }, 100);
      }

      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
    } catch (e) {
      console.log(e, 'error in privasy list')
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
    }
  }
}

export function* getTermsSaga(action) {
  const internetStatus = yield call(getInternetStatus)
  if (internetStatus) {
    console.log("inside theget profile saga2", action, internetStatus);
    try {
      //   cl("inside try");
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: true
      })
      const response = yield call(
        Fetch.getTermsApi
      );
      console.log("response from the get privacy api ==>", response);
      if (response?.status == 0) {
        // DataManager.setUserType(JSON.stringify(response?.result));
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        yield put({
          type: apiConstants.API_TERMS_SERVICE_SUCCESS,
          result: response?.result
        });
      }


      else if (response?.result?.status == 'error') {
        console.log("@@@ //////////////////@@@@@@@@@", response);


        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        CustomAlert(response.result.message)
      }

      if (response.status == 1) {
        DataManager.multiRemoveData([access_keys.access_token, access_keys.filter, access_keys.userDetails, access_keys.user_type, access_keys.user_id])
        yield put({ type: apiConstants.LOGOUT })

        yield put({
          type: apiConstants.API_REMOVE_TOKEN,
          data: null
        })
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        setTimeout(() => {

          CustomAlert(response?.result?.message)
        }, 100);
      }

      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
    } catch (e) {
      console.log(e, 'error in privasy list')
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
    }
  }
}

export function* getWelcomeScreenSaga(action) {
  const internetStatus = yield call(getInternetStatus)
  if (internetStatus) {
    console.log("inside theget profile saga2", action, internetStatus);
    try {
      //   cl("inside try");
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: true
      })
      const response = yield call(
        Fetch.getWelcomeScreenData
      );
      console.log("response from the get WELCOME SCREEN api ==>", response);
      if (response?.status == 0) {
        // DataManager.setUserType(JSON.stringify(response?.result));
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        yield put({
          type: apiConstants.API_GET_WELCOME_SCREENS_SUCCESS,
          result: response?.result
        });
      }


      else if (response?.result?.status == 'error') {
        console.log("@@@ //////////////////@@@@@@@@@", response);


        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        CustomAlert(response.result.message)
      }

      if (response.status == 1) {
        DataManager.multiRemoveData([access_keys.access_token, access_keys.filter, access_keys.userDetails, access_keys.user_type, access_keys.user_id])
        yield put({ type: apiConstants.LOGOUT })

        yield put({
          type: apiConstants.API_REMOVE_TOKEN,
          data: null
        })
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        setTimeout(() => {

          CustomAlert(response?.result?.message)
        }, 100);
      }

      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
    } catch (e) {
      console.log(e, 'error in privasy list')
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
    }
  }
}


export function* getTopicsSaga(action) {
  const internetStatus = yield call(getInternetStatus)
  if (internetStatus) {
    console.log("inside theget profile saga2", action, internetStatus);
    try {
      //   cl("inside try");
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: true
      })
      const response = yield call(
        Fetch.getTopics
      );
      console.log("response from the get topics List api ==>", response);
      if (response?.result?.status == 'success') {
        // DataManager.setUserType(JSON.stringify(response?.result));
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        yield put({
          type: apiConstants.API_GET_TOPICS_SUCCESS,
          result: response?.result?.data
        });
      }


      else if (response?.result?.status == 'error') {
        console.log("@@@ //////////////////@@@@@@@@@", response);


        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        CustomAlert(response.result.message)
      }

      if (response.status == 1) {
        DataManager.multiRemoveData([access_keys.access_token, access_keys.filter, access_keys.userDetails, access_keys.user_type, access_keys.user_id])
        yield put({ type: apiConstants.LOGOUT })

        yield put({
          type: apiConstants.API_REMOVE_TOKEN,
          data: null
        })
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        setTimeout(() => {

          CustomAlert(response?.result?.message)
        }, 100);
      }

      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
    } catch (e) {
      console.log(e, 'error in privasy list')
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
    }
  }
}


export function* completeProfileStep1Saga(action) {
  const internetStatus = yield call(getInternetStatus)
  if (internetStatus) {
    try {
      console.log("@@@ in saga internet");
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: true
      })
      const response = yield call(Fetch.completeProfileStep1, action.data)
      if (response.result.status == 'success') {
        // console.log("toooooken in saga response done verify OTP",response?.result?.data?.user_details?.id);
      
        // DeviceEventEmitter.emit("onLogin")
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        yield put({
          type: apiConstants.API_GET_PROFILE_SUCCESS,
          result: response?.result?.data?.user_details
        })
      
      }
      else if (response.result.status == 'error') {
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        CustomAlert(response.result?.message)
      }
      else if (response.status == 1) {
        // alert('dsds')
        DataManager.multiRemoveData([access_keys.access_token, access_keys.filter, access_keys.userDetails, access_keys.user_type, access_keys.user_id])
        DeviceEventEmitter.emit('Logout')
        yield put({
          type: apiConstants.API_REMOVE_TOKEN,
          data: null
        })
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        yield put({ type: apiConstants.LOGOUT })
        setTimeout(() => {

          CustomAlert(response?.result?.message)
        }, 100);
      }
      else {
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        showMessage({
          message: response.result.message,
          type: "info",
          backgroundColor: color.flashMessage,
        })
      }
    }
    catch (e) {
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
      CustomAlert(ValidationConstants.offline)

    }
  } else {
    CustomAlert(ValidationConstants.offline)
  }
}

export function* completeProfileStep2Saga(action) {
  const internetStatus = yield call(getInternetStatus)
  if (internetStatus) {
    try {
      console.log("@@@ in saga internet");
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: true
      })
      const response = yield call(Fetch.completeProfileStep2, action.data)
      if (response.result.status == 'success') {
        console.log("toooooken in saga response done step2 OTP",response?.result?.data?.user_details?.id);
      
        // DeviceEventEmitter.emit("onLogin")
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        yield put({
          type: apiConstants.API_GET_PROFILE_SUCCESS,
          result: response?.result?.data?.user_details
        })
      
      }
      else if (response.result.status == 'error') {
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        CustomAlert(response.result?.message)
      }
      else if (response.status == 1) {
        // alert('dsds')
        DataManager.multiRemoveData([access_keys.access_token, access_keys.filter, access_keys.userDetails, access_keys.user_type, access_keys.user_id])
        DeviceEventEmitter.emit('Logout')
        yield put({
          type: apiConstants.API_REMOVE_TOKEN,
          data: null
        })
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        yield put({ type: apiConstants.LOGOUT })
        setTimeout(() => {

          CustomAlert(response?.result?.message)
        }, 100);
      }
      else {
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        showMessage({
          message: response.result.message,
          type: "info",
          backgroundColor: color.flashMessage,
        })
      }
    }
    catch (e) {
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
      CustomAlert(ValidationConstants.offline)

    }
  } else {
    CustomAlert(ValidationConstants.offline)
  }
}

export function* completeProfileStep3Saga(action) {
  const internetStatus = yield call(getInternetStatus)
  if (internetStatus) {
    try {
      console.log("@@@ in saga internet");
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: true
      })
      const response = yield call(Fetch.completeProfileStep3, action.data)
      if (response.result.status == 'success') {
        console.log("toooooken in saga response done verify OTP",response?.result?.data?.user_details?.id);
      
        // DeviceEventEmitter.emit("onLogin")
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        yield put({
          type: apiConstants.API_GET_PROFILE_SUCCESS,
          result: response?.result?.data?.user_details
        })
        action.navigation.goBack()
      
      }
      else if (response.result.status == 'error') {
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        CustomAlert(response.result?.message)
      }
      else if (response.status == 1) {
        // alert('dsds')
        DataManager.multiRemoveData([access_keys.access_token, access_keys.filter, access_keys.userDetails, access_keys.user_type, access_keys.user_id])
        DeviceEventEmitter.emit('Logout')
        yield put({
          type: apiConstants.API_REMOVE_TOKEN,
          data: null
        })
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        yield put({ type: apiConstants.LOGOUT })
        setTimeout(() => {

          CustomAlert(response?.result?.message)
        }, 100);
      }
      else {
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        showMessage({
          message: response.result.message,
          type: "info",
          backgroundColor: color.flashMessage,
        })
      }
    }
    catch (e) {
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
      CustomAlert(ValidationConstants.offline)

    }
  } else {
    CustomAlert(ValidationConstants.offline)
  }
}


export function* editProfileSaga(action) {
  const internetStatus = yield call(getInternetStatus)
  if (internetStatus) {
    try {
      console.log("@@@ in saga internet");
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: true
      })
      const response = yield call(Fetch.editProfile, action.data)
      if (response.result.status == 'success') {
        // console.log("toooooken in saga response done verify OTP",response?.result?.data?.user_details?.id);
      
        // DeviceEventEmitter.emit("onLogin")
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        yield put({
          type: apiConstants.API_GET_PROFILE_SUCCESS,
          result: response?.result?.data?.user_details
        })
        action.navigation.goBack()
      }
      else if (response.result.status == 'error') {
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        CustomAlert(response.result?.message)
      }
      else if (response.status == 1) {
        // alert('dsds')
        DataManager.multiRemoveData([access_keys.access_token, access_keys.filter, access_keys.userDetails, access_keys.user_type, access_keys.user_id])
        DeviceEventEmitter.emit('Logout')
        yield put({
          type: apiConstants.API_REMOVE_TOKEN,
          data: null
        })
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        yield put({ type: apiConstants.LOGOUT })
        setTimeout(() => {

          CustomAlert(response?.result?.message)
        }, 100);
      }
      else {
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        showMessage({
          message: response.result.message,
          type: "info",
          backgroundColor: color.flashMessage,
        })
      }
    }
    catch (e) {
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
      CustomAlert(ValidationConstants.offline)

    }
  } else {
    CustomAlert(ValidationConstants.offline)
  }
}


export function* deleteAccountSaga(action) {
  const internetStatus = yield call(getInternetStatus)
  if (internetStatus) {
    try {
      console.log("@@@ in saga internet");
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: true
      })
      const response = yield call(Fetch.DeleteAccountApi)
      if (response.result.status == 'success') {
        console.log("toooooken in saga response done DELETE_USER");
      
        DeviceEventEmitter.emit("Logout")
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        yield put({
          type: apiConstants.API_DELETE_ACCOUNT_SUCCESS,
          // result: response?.result?.data?.user_details
        })
        // action.navigation.goBack()
      }
      else if (response.result.status == 'error') {
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        CustomAlert(response.result?.message)
      }
      else {
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
        showMessage({
          message: response.result.message,
          type: "info",
          backgroundColor: color.flashMessage,
        })
      }
    }
    catch (e) {
      console.log(e,'error in api call')
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
      CustomAlert(ValidationConstants.offline)

    }
  } else {
    CustomAlert(ValidationConstants.offline)
  }
}
