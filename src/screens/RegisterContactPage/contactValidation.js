import {
    passwordsMatch,
    validatePassword,
    validateUserEmail,
    validateUserMobile,
  } from '../../utils/commonUtils';
  import {objValidator} from '../../utils/validator';

  const validationRules = {

    mobile: {
        required: true,
        presence: {
          message: 'Enter your mobile number',
        },
        // valid: {
        //   rule: mobile => validateUserMobile(mobile),
        //   message: 'Enter a valid mobile number',
        // },
      },
  };

  
  export const contactValidation = (loginObj) => {
    return objValidator(loginObj, validationRules);
    };