import * as yup from "yup";

const categorySchema = yup.object().shape({
  name: yup.string().required("Category name is required"),
  image: yup.string().required("Category image is required"),
  ar_name: yup.string().required("Category status is required"),
});

export default categorySchema;
