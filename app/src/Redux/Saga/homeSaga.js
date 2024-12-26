import { call, put } from 'redux-saga/effects';
import { Fetch, setAccessToken } from '../Fetch/index';

import { CustomAlert } from '../../../rsc/theme/customAlert';
import { getInternetStatus } from '../../../rsc/theme/internetStatus';
import { DataManager } from '../../Utils/dataManager';
import { access_keys } from '../../Utils/dataManagerKeys';
import { apiConstants } from '../../constants/appConstants';
import { ValidationConstants } from '../../constants/validationConstants';
import { LoginAction } from '../Actions/authActions';
import { DeviceEventEmitter } from 'react-native';
// import { useDispatch,  } from 'react-redux';
// const dispatch=useDispatch()



  export function* getListenerListSaga(action) {
    const internetStatus = yield call(getInternetStatus)
    if (internetStatus) {
      try {
        //   cl("inside try");
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: true
        })
        const response = yield call(
          Fetch.getListenerList,
          action?.data
        );
        console.log("response from the timsheet api ==>", response);
        if (response?.status == 0) {
          // DataManager.setUserType(JSON.stringify(response?.result));
          yield put({
            type: apiConstants.UPDATE_LODING_STATE,
            data: false
          })
          yield put({
            type: apiConstants.API_GET_ALL_LISTENER_SUCCESS,
            result: response?.result
          });
          // if(action?.navigation)
          // {
          //   action.navigation.goBack()
          // }
        //   CustomAlert('Data Saved Successfully.')
        // yield put(LoginAction({loggedIn:true}))

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
        DeviceEventEmitter.emit('Logout')
          
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
        console.log(e, 'error in categories list')
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
      }
    }
    else{
        CustomAlert(ValidationConstants.offline)
    }
  }



  export function* getListenerDetailSaga(action) {
    const internetStatus = yield call(getInternetStatus)
    if (internetStatus) {
      try {
        //   cl("inside try");
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: true
        })
        const response = yield call(
          Fetch.listenerDetailApi,
          action?.data
        );
        console.log("response from the timsheet api ==>", response);
        if (response?.result?.status == 'success') {
          // DataManager.setUserType(JSON.stringify(response?.result));
          yield put({
            type: apiConstants.UPDATE_LODING_STATE,
            data: false
          })
          yield put({
            type: apiConstants.API_GET_LISTENER_DETAIL_SUCCESS,
            result: response?.result
          });
          // if(action?.navigation)
          // {
          //   action.navigation.goBack()
          // }
        //   CustomAlert('Data Saved Successfully.')
        // yield put(LoginAction({loggedIn:true}))

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
        DeviceEventEmitter.emit('Logout')
          
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
        console.log(e, 'error in categories list')
        yield put({
          type: apiConstants.UPDATE_LODING_STATE,
          data: false
        })
      }
    }
    else{
        CustomAlert(ValidationConstants.offline)
    }
  }