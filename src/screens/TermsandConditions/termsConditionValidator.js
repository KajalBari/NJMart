import {objValidator} from '../../utils/validator';

const validationRules = {
    termsAndConditions: {
        required: true,
        presence: {
          message:
            'Please read and agree to the terms and conditions for registration',
        },
        valid: {
          message: 'Accept the Terms and Conditions',
        },
      },
};

export const termsConditionValidator = termsConditionObj => {
    return objValidator(termsConditionObj, validationRules);
 };