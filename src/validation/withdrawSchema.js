import * as yup from "yup";

const withdrawSchema = yup.object().shape({
  reason: yup.string().required("Please specify a reason for the Rejection"),
});

export default withdrawSchema;
