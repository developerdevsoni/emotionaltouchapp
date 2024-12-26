import React from 'react'
import { showMessage } from 'react-native-flash-message'
import { Colors } from '.'

export const CustomAlert = (message,color) => {
    return (
        showMessage({
            message: message,
            type: "info",
            backgroundColor: color ?color:Colors.darkRed,
            paddingTop:40
          })
    )
}

export const validateEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email)
}
export const validatePass =(pass)=>{
    let re=/^(?=.*[a-zA-Z])(?=.*[0-9])/
    return re.test(pass)
  }
export const getYearArr=()=>{
    let dateToday= new Date();
  let y=dateToday.getFullYear();
  let yearArr= Array.from(new Array(50),(value,index)=> (y-index).toString())
  return yearArr;
}

// export const uploadImg=(img)=>{
//   console.log(img,'img at upload img fun')
//   return new Promise((resolve , reject) => {
//     console.log(img,'img at upload img fun1')

//     Fetch.uploadImgApi(img)
//       .then((res) => {
//         console.log(res,'response of image upload')
//         resolve (res.result.data.attachments)
//         // successfully got data
//         // resolve(res);
//       })
//       .catch((err) => {
//         // an error occured
//         console.log(err,'error of image upload')
//          reject('Please upload again')
//         // reject(err);
//       });          
//   })
// }