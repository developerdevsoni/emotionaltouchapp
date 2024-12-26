import { apiConstants } from "../../constants/appConstants";



//SECTION Get API_ACCEPT_JOB_LOAD
export const acceptAction=(data)=>{
  console.log("API_ACCEPT_JOB_LOAD");
  let action = {
    type: apiConstants.API_ACCEPT_JOB_LOAD,
    data
  }
  return action
}


//SECTION Get API_DECLINE_JOB_LOAD
export const declineAction=(data)=>{
    console.log("API_DECLINE_JOB_LOAD");
    let action = {
      type: apiConstants.API_DECLINE_JOB_LOAD,
      data
    }
    return action
  }

  // https://caringrecords.co.uk/proxyapi/timesheet
  
  export const timeSheetPostAction=(data,navigation)=>{
    console.log("API_DECLINE_JOB_LOAD");
    let action = {
      type: apiConstants.API_POST_JOB_LOAD,
      data,
      navigation
    }
    return action
  }

  export const getListenerListAction=(data)=>{
    console.log("API_GET_ALL_LISTENER_LOAD");
    let action = {
      type: apiConstants.API_GET_ALL_LISTENER_LOAD,
      data
    }
    return action
  }

  export const getListenerDetailsAction=(data)=>{
    console.log("API_GET_LISTENER_DETAIL_LOAD");
    let action = {
      type: apiConstants.API_GET_LISTENER_DETAIL_LOAD,
      data
    }
    return action
  }
  









