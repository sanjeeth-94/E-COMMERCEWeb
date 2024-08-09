export default function validate(typeToValidate, valueToValidate) {
  switch (typeToValidate) {
    case 'email':
      return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
        .test(valueToValidate);
    case 'password':
      return valueToValidate.length > 4;
    case 'fullName':
      return (/^[a-zA-Z][a-zA-Z.\s]+$/).test(valueToValidate);
    case 'phoneNumber':
      return (/^[789]\d{9}$/).test(valueToValidate);
    case 'address':
      return (/^(?!\s*$).+/).test(valueToValidate);
    case 'cardNumber':
      return (/^\d{16}$/).test(valueToValidate);
    case 'cvvNumber':
      return (/^\d{3,4}$/).test(valueToValidate);
    case 'expiryDay':
      const day = parseInt(valueToValidate, 10);
      return (/^\d{1,2}$/).test(valueToValidate) && day >= 1 && day <= 31;
    case 'expiryMonth':
      const isValidFormat = (/^\d{1,2}$/).test(valueToValidate);
      if (!isValidFormat) return false;
      const number = parseInt(valueToValidate, 10);
      return number >= 1 && number <= 12;
    default:
      return false;
  }
}
