import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().email().required("Please enter email Address !").min(6),
  password: yup.string().required("Please enter password").min(6),
});

export default loginSchema;
