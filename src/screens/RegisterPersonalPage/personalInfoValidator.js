import {objValidator} from '../../utils/validator';

const validationRules = {

    applicantName: {
        required: true,
        presence: {
          message: 'Enter the ApplicantName',
        },
        valid: {
          rule: '',
          message: 'Enter a valid ApplicantName',
        },
      },
};

export const personalInfoValidator = personalInfoObj => {
    return objValidator(personalInfoObj, validationRules);
 };