import { take, takeLatest } from "redux-saga/effects";
import { ChangePasswordSaga, LoginSaga, ResendOtpSaga, SetPasswordSaga, SignUpSaga, VerifyOtpSaga, completeProfileStep1Saga, completeProfileStep2Saga, completeProfileStep3Saga, deleteAccountSaga, editProfileSaga, getCategoriesSaga, getProfileSaga, getTopicsSaga, getWelcomeScreenSaga, updateMobileSaga, updateProfileSaga } from "./authWorkerSagas";
import { apiConstants } from "../../constants/appConstants";
import { resendOtpAction } from "../Actions/authActions";
import { getListenerDetailSaga, getListenerListSaga } from "./homeSaga";



export function* rootSaga() {
 
   yield takeLatest(apiConstants.API_LOGIN_LOAD, LoginSaga)
   yield takeLatest(apiConstants.API_SIGN_UP_LOAD,SignUpSaga)
   yield takeLatest(apiConstants.API_VERIFY_OTP_LOAD,VerifyOtpSaga)
   yield takeLatest(apiConstants.API_RESEND_OTP_LOAD,ResendOtpSaga)
   yield takeLatest(apiConstants.API_GET_PROFILE_LOAD, getProfileSaga)
   yield takeLatest(apiConstants.API_GET_TOPICS_LOAD, getTopicsSaga)
   yield takeLatest(apiConstants.API_COMPLETE_PROFILE_STEP1_LOAD, completeProfileStep1Saga)
   yield takeLatest(apiConstants.API_COMPLETE_PROFILE_STEP2_LOAD, completeProfileStep2Saga)
   yield takeLatest(apiConstants.API_COMPLETE_PROFILE_STEP3_LOAD, completeProfileStep3Saga)
   yield takeLatest(apiConstants.API_DELETE_ACCOUNT_LOAD, deleteAccountSaga)
   yield takeLatest(apiConstants.API_SET_PASSWORD_LOAD,SetPasswordSaga)
   yield takeLatest(apiConstants.API_EDIT_PROFILE_LOAD,editProfileSaga)
   yield takeLatest(apiConstants.API_GET_ALL_LISTENER_LOAD,getListenerListSaga)
   yield takeLatest(apiConstants.API_GET_LISTENER_DETAIL_LOAD,getListenerDetailSaga)





}
