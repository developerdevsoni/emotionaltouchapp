import { put, call } from 'redux-saga/effects'
import { showMessage } from 'react-native-flash-message'
import { Fetch } from '../Fetch'
import NetInfo from "@react-native-community/netinfo";
// import { apiConstants,ValidationConstants } from "../../themes/constants";
import { useNavigation } from '@react-navigation/native';
import { DataManager } from '../../Utils/dataManager';
import color from '../../../rsc/theme/color';
import { apiConstants,ValidationConstants } from '../../../rsc/theme/constants';
import { access_keys } from '../../Utils/dataManagerKeys';

var internetStatus = false;
// const {ValidationConstants}=AppConstants
NetInfo.fetch().then((state) => {
  internetStatus = state.isConnected;
});


export function* logOutSaga(action) {
  NetInfo.addEventListener((state) => (internetStatus = state.isConnected));
  if (internetStatus) {
    try {
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
      yield put({
        type: apiConstants.LOGOUT
      })
      let response = yield call(Fetch.Logout)
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
      let { result, status } = response
      console.log("in logout saga  result is",result,'status is',status);
      if (status === 0) {
        yield put({ type: apiConstants.LOGOUT })

       DataManager.multiRemoveData([access_keys.access_token,access_keys.filter,access_keys.userDetails,access_keys.user_type,access_keys.user_id])
        yield put({
          type: apiConstants.API_REMOVE_TOKEN,
          data: null
        })
      }
      else if (status === 3) {
        yield put({
          type: apiConstants.LOGOUT,
        })
      } else {
        showMessage({
          message: result.message,
          backgroundColor: color.flashMessage,
        })
      }
    } catch (error) {
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
      showMessage({
        message: ValidationConstants.offline,
        backgroundColor: color.flashMessage,
      })
    }
  }
  else {
    showMessage({
      message: ValidationConstants.offline,
      type: "info",
      backgroundColor: color.flashMessage,
    })
  }
}

export function* DeleteAccountSaga(action) {
  NetInfo.addEventListener((state) => (internetStatus = state.isConnected));
  if (internetStatus) {
    try {
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
      yield put({
        type: apiConstants.LOGOUT
      })
      let response = yield call(Fetch.DeleteAccount)
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
      let { result, status } = response
      console.log("in logout saga  result is",result,'status is',status);
      if (status === 0) {
       DataManager.multiRemoveData([access_keys.access_token,access_keys.filter,access_keys.userDetails,access_keys.user_type,access_keys.user_id])
        yield put({
          type: apiConstants.API_REMOVE_TOKEN,
          data: null
        })
      }
      else if (status === 3) {
        yield put({
          type: apiConstants.LOGOUT,
        })
      } else {
        showMessage({
          message: result.message,
          backgroundColor: color.flashMessage,
        })
      }
    } catch (error) {
      yield put({
        type: apiConstants.UPDATE_LODING_STATE,
        data: false
      })
      showMessage({
        message: ValidationConstants.offline,
        backgroundColor: color.flashMessage,
      })
    }
  }
  else {
    showMessage({
      message: ValidationConstants.offline,
      type: "info",
      backgroundColor: color.flashMessage,
    })
  }
}
