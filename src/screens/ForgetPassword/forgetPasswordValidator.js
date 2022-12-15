import {validateUserEmail} from '../../utils/commonUtils';
import {objValidator} from '../../utils/validator';

const validationObj = {
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
};

export const forgetPasswordValidator = forgotPasswordObj => {
  return objValidator(forgotPasswordObj, validationObj);
};