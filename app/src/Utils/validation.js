import validationRegularExp from '../constants/validationRegularExp';

export const validateRequire = (t, name, value, type) => {
  if (value === '' || value === null) {
    return {
      isValidationFire: true,
      validationMessage: `${name} ${[
        t('common:VALIDATION_MESSAGE.IS_REQUIRE'),
      ]}`,
    };
  } else {
    return {
      isValidationFire: true,
      validationMessage: null,
    };
  }
};

export const validateName = (t, name, value) => {
  const isRequire = validateRequire(t, name, value);
  if (isRequire.validationMessage === null) {
    if (value.length < 3) {
      return {
        isValidationFire: true,
        validationMessage: `${name} ${[
          t('common:VALIDATION_MESSAGE.NAME_LENGTH'),
        ]}`,
      };
    } else {
      return {
        isValidationFire: true,
        validationMessage: isRequire.validationMessage,
      };
    }
  } else {
    return isRequire;
  }
};

export const validateNumber = (name, value) => {
  return validationRegularExp.name.test(value)
    ? `Please enter number only.`
    : null;
};

export const validateMobile = (t, name, value) => {
  const isRequire = validateRequire(t, name, value);

  if (isRequire.validationMessage === null) {
    if (!validationRegularExp.phoneNo.test(value)) {
      return {
        isValidationFire: true,
        validationMessage: `${name} ${[
          t('common:VALIDATION_MESSAGE.IS_NOT_VALID'),
        ]}`,
      };
    } else if (value.length < 8) {
      return {
        isValidationFire: true,
        validationMessage: `${name} ${[
          t('common:VALIDATION_MESSAGE.MOBILE_LENGTH'),
        ]}`,
      };
    } else {
      return {
        isValidationFire: true,
        validationMessage: null,
      };
    }
  } else {
    return isRequire;
  }
};

export const validateEmail = (t, name, value) => {
  const isRequire = validateRequire(t, name, value);
  if (isRequire.validationMessage === null) {
    if (value === '') {
      return {
        isValidationFire: false,
        validationMessage: null,
      };
    } else {
      if (validationRegularExp.email.test(value)) {
        return {
          isValidationFire: true,
          validationMessage: null,
        };
      } else {
        return {
          isValidationFire: true,
          validationMessage: `${name} ${[
            t('common:VALIDATION_MESSAGE.EMAIL_VALIDATE'),
          ]}`,
        };
      }
    }
  } else {
    return isRequire;
  }
};

export const validatePassword = (t, name, value, validationMessage) => {
  const isRequire = validateRequire(t, name, value);
  if (isRequire.validationMessage === null) {
    if (validationRegularExp.password.test(value)) {
      return {
        isValidationFire: true,
        validationMessage: null,
      };
    } else {
      return {
        isValidationFire: true,
        validationMessage: validationMessage
          ? `${name} ${validationMessage}`
          : `${name} ${[t('common:VALIDATION_MESSAGE.PASSWORD_VALIDATE')]}`,
      };
    }
  } else {
    return isRequire;
  }
};
