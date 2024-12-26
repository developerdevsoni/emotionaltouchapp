export const ValidationConstants = {
    offline:"offline",
    invalid: {
      email: {
        invalidEmail: "Please enter valid email address.",
        invalidEmailorPassword: "Invalid email address or password.",
        unRegisteredEmail: "Please enter registered email address.",
      },
      password: {
        shortPassword: "Password should be alteast 6 characters long.",
        unmatchedConfirm: "Password and confirm password must be same.",
        unmatchedNewConfirm: "New password and confirm password must be same.",
  
      },
      year: {
        shortYear: "Year should be of 4 characters long.",
        unmatchedConfirm: "Password and confirm password must be same.",
      },
      userName: {
        shortUserName: "Username should be alteast 2 characters long.",
        invalidUsername: 'Special characters not allowed in last name.',
      },
      profession: {
        shortPro: "Profession should be alteast 2 characters long.",
        invalidUsername: 'Special characters not allowed in last name.',
      },
      personalSt: {
        shortPt: "Personal statement should be alteast 2 characters long.",
        invalidUsername: 'Special characters not allowed in last name.',
      },
      description: {
        shortDesc: "Description should be alteast 2 characters long.",
        invalidUsername: 'Special characters not allowed in last name.',
      },
      degree: {
        shortDegree: "Degree should be alteast 2 characters long.",
        invalidUsername: 'Special characters not allowed in last name.',
      },
      location: {
        shortLoc: "Location should be alteast 2 characters long.",
        invalidUsername: 'Special characters not allowed in last name.',
      },
      fullname: {
        shortName: "First name should be at least 2 characters long.",
        invalidName: 'Special characters not allowed in name.',
      },
      lastName: {
        shortName: "Last name should be at least 2 characters long.",
        invalidName: 'Special characters not allowed in last name.',
      },
      contact: {
        incorrectContactLength: "Phone number should be between 8 to 15 digits.",
        incorrectContact: "Please enter valid phone number.",
      }
    },
    empty: {
      emptyEmail: "Please enter email address.",
      emptyOldPassword: "Please enter old password.",
      emptyNewPassword: "Please enter new password.",
      emptyPassword: "Please enter password.",
      emptyConfirm: "Please enter confirm password.",
      emptyContact: "Please enter phone number.",
      emptyFullName: "Please enter full name.",
      emptyCompName: "Please enter company name.",
      emptyLastName: "Please enter last name.",
      emptyPhone: "Please enter phone number.",
      emptyDob: "Please enter phone number.",
      emptyGender:"Please select gender.",
      emptyUserName: "Please enter username.",
      emptyOtp: 'Please enter valid OTP.',
      emptyEmailNum: 'Please enter Email or Phone number.',
      emptyLoc: 'Please enter location.',
      emptyStatus: 'Please select status.',
      emptyProfession: 'Please enter profession.',
      emptyPersonalStatement: 'Please enter personal statement.',
      emptyDescription: 'Please enter description.',
      emptyDegree: 'Please enter degree.',
      emptyYear: 'Please enter year.',
      emptyUniName: 'Please select University Name.',
      emptyProfile: 'Please select profile picture.',
      emptyimdb: 'Please enter imdb link.',
      emptyfb: 'Please enter Facebook link.',
      emptyinsta: 'Please enter Instagram link.',
      emptylinkedin: 'Please enter Linkedin link.',
      emptyFavMovies: 'Please enter Favorite Movies.',
      emptyFavActors: 'Please enter Favorite Actors.',
      emptyFavDestination: 'Please enter Favorite Destination.',
      emptyFavArtists: 'Please enter Favorite Artists.',
      emptyFavMeal: 'Please enter Favorite Meal.',
      emptyFavBeverage: 'Please enter Favorite Beverage.',
      radical: 'Please enter Radical thought?.',
  
  
  
    },
    success: {
      registerSuccess: "You have been registered successfully.",
      verifyRegisteration:
        "You have been registered successfully! Please verify your email address to login into the website.",
      forgotSuccess:
        "Forgot password link has been sent to your registered email address. ",
      updateSuccess: "User details has been updated successfully. ",
    },
  
  }