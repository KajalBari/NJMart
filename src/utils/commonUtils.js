import _ from 'lodash';

// Capitalize first letter
export const capitalizeFirstLetter = text => {
  return text.charAt(0).toUpperCase() + text.slice(1)?.toLowerCase();
};

// EmailID Validation using Regular expression
export const validateUserEmail = emailID => {
  const checkEmailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return checkEmailExp.test(emailID);
};

// EmailID Validation using Regular expression
export const validateUserMobile = mobileNumber => {
  const checkMobileNumberExp = /^[6-9]\d{9}$/gi;
  return checkMobileNumberExp.test(mobileNumber);
};

// Password Validation using Regular expression
export const validatePassword = password => {
  const regularExpression =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  return regularExpression.test(password);
};

// IFSC Code Validation using Regular expression
export const validateIFSCCode = ifscCode => {
  const regularExpression = /^[A-Z]{4}0[A-Z0-9]{6}$/;
  return regularExpression.test(ifscCode);
};

// Account Number Validation using Regular expression
export const validateAccountNumber = accountNumber => {
  const regularExpression = /^\d{9,18}$/;
  return regularExpression.test(accountNumber);
};

// Password match validations
export const passwordsMatch = (password, confirmPassword) => {
  return password === confirmPassword;
};

// Account Number match validations
export const accountNumberMatch = (accountNumber, confirmAccountNumber) => {
  return accountNumber === confirmAccountNumber;
};

// Check if variable is empty
export const checkifEmpty = data => {
  return _.isEmpty(data);
};

// Check if number is odd
export const isOdd = num => {
  return num % 2;
};

//pan card validator
export const panValidator = number => {
  const regularExpression = /([A-Z]){5}([0-9]){4}([A-Z]){1}$/;
  return regularExpression.test(number.toUpperCase());
};

// Get last four digits of account number and replace with *** for the rest
export const getLastFourDigitsAccountNumber = accountNumber => {
  return accountNumber.replace(/.(?=.{4})/g, '*');
};

// Get comma separated amount
export const amountWithCommas = amount => {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

// Get Hours Minutes Seconds
export const getHoursMinutesSeconds = time => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  const hours = Math.floor(time / 3600);
  return {
    hours: hours < 10 ? `0${hours}` : hours,
    minutes: minutes < 10 ? `0${minutes}` : minutes,
    seconds: seconds < 10 ? `0${seconds}` : seconds,
  };
};

// Check if entered amount is less than Minimum Amount
export const checkAmountLessThanMinimum = (amount, minimumAmount) => {
  return amount < minimumAmount;
};

// Validate OTP
export const validateOTP = otp => {
  return otp?.length === 6;
};
