import {
    passwordsMatch,
    validatePassword,
    validateUserEmail,
    validateUserMobile,
  } from '../../utils/commonUtils';
import {objValidator} from '../../utils/validator';

const validationRules = {
    userId: {
        required: true,
        presence: {
          message: 'Enter the UserId',
        },
        valid: {
          rule: userId => validateUserEmail(userId),
          message: 'Enter a valid UserId',
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
      confirmPass: {
        required: true,
        presence: {
          message: 'Enter the password again for confirmation',
        },
        valid: {
          message: 'Enter a valid password',
        },
        match: {
          rule: (password, confirmPass) =>
            passwordsMatch(password, confirmPass),
          message: 'Passwords do not match',
        },
      },
};


export const securityInfoValidator = (securityInfoObj) => {
    return objValidator(securityInfoObj, validationRules);
  };