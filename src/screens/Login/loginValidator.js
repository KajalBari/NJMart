import {validatePassword, validateUserEmail, validateOTP} from '../../utils/commonUtils';
import {objValidator} from '../../utils/validator';

const validationRules = {
  emailID: {
    required: true,
    presence: {
      message: 'Enter the EmailID',
    },
    valid: {
      rule: emailID => validateUserEmail(emailID),
      message: 'Enter a valid EmailID',
    },
  },
  password: {
    required: true,
    presence: {
      message: 'Enter the password',
    },
    valid: {
      rule: password => validatePassword(password),
      message: 'Enter a valid password',
    },
  },
  rememberMe: {
    required: false,
  },
};

export const loginValidator = (loginObj,includeOTPRules) => {
  if (includeOTPRules) {
    return objValidator(loginObj, {
      ...validationRules,
      ...submitValidationRules,
    });
  } else {
    return objValidator(loginObj, validationRules);
  }
  //return objValidator(loginObj, validationRules);
};

const submitValidationRules = {
  otp: {
    required: true,
    presence: {
      message: 'Enter the OTP',
    },
    valid: {
      rule: otp => validateOTP(otp),
      message: 'Enter the OTP',
    },
  },
};