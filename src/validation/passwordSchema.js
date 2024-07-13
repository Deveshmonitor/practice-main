import * as yup from "yup";

const passwordSchema = yup.object().shape({
  password: yup.string().required("Please enter password").min(6),
});

export default passwordSchema;
