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
  panNum:{
    required: true,
    presence: {
      message: 'Enter the PAN Card Number',
    },
    // valid: {
    //   rule: panNumber => panValidator(panNumber),
    //   message: 'Enter a valid PAN Card Number',
    // },
  }
};

  export const loginValidator = (loginObj) => {
  return objValidator(loginObj, validationRules);
  };

