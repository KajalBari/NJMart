import {validatePassword, validateUserEmail, validateOTP,panValidator} from '../../utils/commonUtils';
import {objValidator} from '../../utils/validator';

const validationRules = {
email: {
    required: true,
    presence: {
      message: 'Enter the EmailID',
    },
   // valid: {
      //       rule: emailID => validateUserEmail(emailID),
      //       message: 'Enter a valid EmailID',
      //     },
  
  },
  password: {
    required: true,
    presence: {
      message: 'Enter the password',
    },
    //valid: {
      //       rule: password => validatePassword(password),
      //       message: 'Enter a valid password',
      //     },
  },
}

  export const loginValidator = (loginObj) => {
  return objValidator(loginObj, validationRules);
  };

