import {validatePassword, validateUserEmail, validateOTP,panValidator} from '../../utils/commonUtils';
import {objValidator} from '../../utils/validator';

const validationRules = {
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

export const bankValidator = (panInfoObj) => {
    return objValidator(panInfoObj, validationRules);
};