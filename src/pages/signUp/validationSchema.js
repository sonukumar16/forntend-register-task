import * as Yup from 'yup';

const phoneRegExp = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;

export const validationSchema = Yup.object({
  firstName: Yup.string('Enter a first name').required(
    'First name is required'
  ),
  lastName: Yup.string('Enter a last name').required('Last name is required'),
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string('')
    .min(8, 'Password must contain at least 8 characters')
    .max(15, 'Password can be max 8 characters')
    .required('Enter your password'),
  confirmPassword: Yup.string()
    .test('passwords-match', 'Passwords must match', function (value) {
      return this.parent.password === value
    }),
  mobile: Yup.string('Enter your Mobile Number')
    .matches(phoneRegExp, 'Mobile number is not valid'),
  gender: Yup.string(),
  termsCondition: Yup.boolean().oneOf([true]).required("Please select terms and condition")
});

export const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  termsCondition: false,
  gender: ""
};
