import { ValidationConstants } from '../../constants/validationConstants'
import { ApiKit } from './apiKit'
import { showMessage } from 'react-native-flash-message'
// import { data } from 'jquery';
// import moment from 'moment';

//STATUS CODE TO SEND INTO RESPONSE
const statusCode = {
  success: 0,
  unAuthenticated: 1,
  failure: 2,
}

const returnErrorCase = {
  result: { message: 'request failed' },
  status: statusCode.failure
}

export const Fetch = {

 
  verifyOTP(data)
  {
    return Method.POST('otp-verification', data)
  },
  completeProfileStep1(data)
  {
    let data1 = new FormData();
    data1.append('is_anonymous',data.is_anonymous)
    data1.append('display_name',data.display_name)
    data1.append('gender',data.gender)
    data1.append('age',data.age)
    data1.append('topic_id',data.topic_id)
    data1.append('service',data.service)
    data1.append('about',data.about)
    data1.append('availability',data.availability)
    data1.append('profile_photo',data.profile_photo)

    return Method.POST_FORMDATA('listner-profile-step-1', data1)
  },
  completeProfileStep2(data)
  {
    let data1 = new FormData();
    data1.append('selfie_photo',data.selfie_photo)
    return Method.POST_FORMDATA('listner-profile-step-2', data1)
  },
  completeProfileStep3(data)
  {
    let data1 = new FormData();
    data1.append('id_proof_name',data.id_proof_name)
    data1.append('id_proof',data.id_proof)

    return Method.POST_FORMDATA('listner-profile-step-3', data1)
  },
  editProfile(data)
  {
    let data1 = new FormData();
    data1.append('full_name',data.full_name)
    data1.append('display_name',data.display_name)
    data1.append('gender',data.gender)
    data1.append('age',data.age)
    data1.append('service',data.service)
    data1.append('about',data.about)
    if(data.profile_photo)
    {
    data1.append('profile_photo',data.profile_photo)
    return Method.POST_FORMDATA('edit-listner-profile', data1)
    }
    else{
      return Method.POST('edit-listner-profile', data)
    }
  },
  listenerDetailApi(data)
  {
    return Method.GET('listener-details?user_id='+data)
  },
  resendOTP(data)
  {
    return Method.POST('resend-otp', data)
  },
  getTopics()
  {
    return Method.GET('get-topic-list')
  },
  createUser(data) {
    console.log(data, 'verifyOTTTPPP>>>>')

    return Method.POST('register', data)
  },
  updateProfile(data) {
    return Method.POST('wp-json/questionaire/v2/questionaires', data)
  },
  updateMobileApi(data) {
    return Method.POST('update-mobile-number', data)
  },

  SetPassword(data) {
    console.log(data, 'verifyOTTTPPP>>>>')
    return Method.POST('set-password', data)
  },
  ChangePasswordApi(data) {
    console.log(data, 'change password>>>>')
    return Method.POST('change-password', data)
  },
  // delete-user-account
  DeleteAccountApi() {
    return Method.POST('delete-user-account')
  },

  Login(data) {
      return Method.POST('login', data)
  },
  GetProfile(id) {
    return Method.GET('get-user-details?user_id='+id)
  },
  // get
  Logout() {
    return Method.GET('user/logout')
  },


  getListenerList(data)
  {
    
    return Method.GET('/get-all-listener',data)

  },




}

const Method = {
  GET(url,params) {
    return ApiKit.get(url,{params:params})
      .then(data => {
        console.log(data, 'data get > > >>  > >>  ')
        if (data.status == 200 || data.status == 201) {
          return {
            result: data.data,
            status: statusCode.success,
            page: data?.headers
          }
        }
        else if (data.status == 403 || data.status == 401) {
          return {
            result: { message: data.data.message },
            status: statusCode.unAuthenticated
          }
        }
        else {
          return {
            result: { message: 'request failed' },
            status: statusCode.failure
          }
        }
      })
      .catch(e => {
        if (e.response.status == 403 || e.response.status == 401) {
          return {
            result: { message: e.response.data.message },
            status: statusCode.unAuthenticated
          }
        }
        else {
          return {
            result: { message: e.response.data.message },
            status: statusCode.failure
          }
        }
      }
      )
  },
  POST(url, body) {
    console.log("this is url = ", url,body);
    return ApiKit.post(url,body&& body)
      .then(data => {
        console.log("this is data", data);
        if (data.status == 200 || data.status == 201) {
          console.log("this is data200", data);
          return {
            result: data.data,
            status: statusCode.success
          }
        }
        else if (data.status == 403 || data.status == 401) {
          return {
            result: { message: data.data.message },
            status: statusCode.unAuthenticated
          }
        }
        else {
          return {
            result: { message: 'request failed' },
            status: statusCode.failure
          }
        }
      })
      .catch(e => {
        console.log("@@@ e ", e);
        console.log("@@@ e response status", e.response.status);

        if (e.response.status == 403 || e.response.status == 401) {
          return {
            result: { message: e.response.data.message },
            status: statusCode.unAuthenticated
          }
        }
        return {
          result: {
            message: ValidationConstants.offline,
            data: e.response.data.data
          },
          status: statusCode.failure
        }
      })
  },
  DELETE(url) {
    return ApiKit.delete(url)
      .then(data => {
        if (data.status == 200) {
          return {
            result: data.data,
            status: statusCode.success
          }
        }
        else if (data.status == 403 || data.status == 401) {
          return {
            result: { message: data.data.message },
            status: statusCode.unAuthenticated
          }
        }
        else {
          return {
            result: { message: 'request failed' },
            status: statusCode.failure
          }
        }
      })
      .catch(e => {
        if (e.response.status == 403 || e.response.status == 401) {
          return {
            result: { message: e.response.data.message },
            status: statusCode.unAuthenticated
          }
        }
        else {
          return {
            result: { message: e.response.data.message },
            status: statusCode.failure
          }
        }
      }
      )
  },

  POST_FORMDATA(url, body) {
    console.log(body, 'bodydydyd')
    return ApiKit.post(url, body,
      {
        headers: {
          'Content-Disposition': 'attachment; filename=image.png',
          'Content-Type': 'multipart/form-data',
        }
      })
      .then(data => {
        console.log("this is data", data);
        if (data.status == 200) {
          return {
            result: data.data,
            status: statusCode.success
          }
        }
        else if (data.status == 403 || data.status == 401) {
          return {
            result: { message: data.data.message },
            status: statusCode.unAuthenticated
          }
        }
        else {
          return {
            result: { message: 'request failed' },
            status: statusCode.failure
          }
        }
      })
      .catch(e => {
        console.log("@@@ e ", e);
        console.log("@@@ e response", e.response);
        console.log("@@@ e response status", e.response.status);

        if (e.response.status == 403 || e.response.status == 401) {
          return {
            result: { message: e.response.data.message },
            status: statusCode.unAuthenticated
          }
        }
        return {
          result: {
            message: e.response.data.message,
            data: e.response.data.data
          },
          status: statusCode.failure
        }
      })
  },
}


