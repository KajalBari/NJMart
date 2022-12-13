import {validatePassword, validateUserEmail, validateOTP,panValidator} from '../../utils/commonUtils';
import {objValidator} from '../../utils/validator';

const validationRules = {
email: {
    required: true,
    presence: {
      message: 'Enter the EmailID',
    },
  
  },
  password: {
    required: true,
    presence: {
      message: 'Enter the password',
    },
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

