export const objValidator = (dataObj, validationRules) => {
  const data = Object.entries(dataObj);
  const errorMessageObj = {
    valid: true,
  };
  data.forEach(k => {
    if (
      validationRules[`${k[0]}`]?.match?.rule &&
      !validationRules[`${k[0]}`]?.match?.rule(
        data.find(e => e[0] === 'password')
          ? data.find(e => e[0] === 'password')[1]
          : data.find(e => e[0] === 'accountNumber')
          ? data.find(e => e[0] === 'accountNumber')[1]
          : null,
        k[1],
      )
    ) {
      errorMessageObj[`${k[0]}`] =
        validationRules[`${k[0]}`]?.match?.message || '';
      errorMessageObj.valid = false;
    }
    if (
      validationRules[`${k[0]}`]?.valid?.rule &&
      !validationRules[`${k[0]}`]?.valid?.rule(k[1])
    ) {
      errorMessageObj[`${k[0]}`] =
        validationRules[`${k[0]}`]?.valid?.message || '';
      errorMessageObj.valid = false;
    }
    if (
      validationRules[`${k[0]}`]?.required &&
      validationRules[`${k[0]}`].required
    ) {
      if (!k[1]) {
        errorMessageObj[`${k[0]}`] =
          validationRules[`${k[0]}`]?.presence?.message || '';
        errorMessageObj.valid = false;
      }
    }
  });
  return errorMessageObj;
};
