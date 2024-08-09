import validate from "./validateUtil";

const LoginFormValidate = (value, type, setErrorObject) => {

  if (type === 'email') {
    setErrorObject((oldErrorState) => {
      let status = {};
      if (!validate('email', value)) {
        status = {
          errorStatus: true,
          helperText: 'Enter a valid email id',
        };

      } else {
        status = {
          errorStatus: false,
          helperText: '',
        };
      }
      return {
        ...oldErrorState,
        emailId: status,
      };

    });

  } else {
    setErrorObject((oldErrorState) => {
      let status = {};
      if (!validate('password', value)) {
        status = {
          errorStatus: true,
          helperText: 'Enter a valid password',
        };
      } else {
        status = {
          errorStatus: false,
          helperText: '',
        };

      }
      return {
        ...oldErrorState,
        password: status,
      };

    });
  }
};

const RegisterFormValidate = (value, type, setErrorObject) => {
  switch (type) {
    case 'fullName': setErrorObject((oldErrorState) => {
      let status = {};
      if (!validate('fullName', value)) {
        status = {
          errorStatus: true,
          helperText: 'Enter a valid Name',
        };
      } else {
        status = {
          errorStatus: false,
          helperText: '',
        };
      }
      return {
        ...oldErrorState,
        fullName: status,
      };
    });
      break;

    case 'phoneNumber': setErrorObject((oldErrorState) => {
      let status = {};
      if (!validate('phoneNumber', value)) {
        status = {
          errorStatus: true,
          helperText: 'Enter a valid Phone number',
        };
      } else {
        status = {
          errorStatus: false,
          helperText: '',
        };
      }
      return {
        ...oldErrorState,
        phoneNumber: status,
      };
    });
      break;
    case 'email': setErrorObject((oldErrorState) => {
      let status = {};
      if (!validate('email', value)) {
        status = {
          errorStatus: true,
          helperText: 'Enter a Valid Email Id',
        };
      } else {
        status = {
          errorStatus: false,
          helperText: '',
        };
      }
      return {
        ...oldErrorState,
        email: status,
      };
    });
      break;
    case 'address': setErrorObject((oldErrorState) => {
      let status = {};
      if (!validate('address', value)) {
        status = {
          errorStatus: true,
          helperText: 'Enter a valid address',
        };
      } else {
        status = {
          errorStatus: false,
          helperText: '',
        };
      }
      return {
        ...oldErrorState,
        address: status,
      };
    });
      break;
    case 'cardNumber': setErrorObject((oldErrorState) => {
      let status = {};
      if (!validate('cardNumber', value)) {
        status = {
          errorStatus: true,
          helperText: 'Enter the 16-digit card number',
        };
      } else {
        status = {
          errorStatus: false,
          helperText: '',
        };
      }
      return {
        ...oldErrorState,
        cardNumber: status,
      };
    });
      break;
    case 'cvvNumber': setErrorObject((oldErrorState) => {
      let status = {};
      if (!validate('cvvNumber', value)) {
        status = {
          errorStatus: true,
          helperText: 'Enter the 3 or 4 digit number on the card',
        };
      } else {
        status = {
          errorStatus: false,
          helperText: '',
        };
      }
      return {
        ...oldErrorState,
        cvvNumber: status,
      };
    });
      break;
    case 'expiryDay': setErrorObject((oldErrorState) => {
      let status = {};
      if (!validate('expiryDay', value)) {
        status = {
          errorStatus: true,
          helperText: 'Enter the day',
        };
      } else {
        status = {
          errorStatus: false,
          helperText: '',
        };
      }
      return {
        ...oldErrorState,
        expiryDay: status,
      };
    });
    case 'expiryMonth': setErrorObject((oldErrorState) => {
      let status = {};
      if (!validate('expiryMonth', value)) {
        status = {
          errorStatus: true,
          helperText: 'Enter the Month',
        };
      } else {
        status = {
          errorStatus: false,
          helperText: '',
        };
      }
      return {
        ...oldErrorState,
        expiryMonth: status,
      };
    });

      break;

    case 'password': setErrorObject((oldErrorState) => {
      let status = {};
      if (!validate('password', value)) {
        status = {
          errorStatus: true,
          helperText: 'Enter a valid password',
        };
      } else {
        status = {
          errorStatus: false,
          helperText: '',
        };
      }
      return {
        ...oldErrorState,
        password: status,
      };
    });
      break;

    default: break;
  }
};

export {
  LoginFormValidate,
  RegisterFormValidate
};
