import * as yup from "yup";

const settingSchema = yup.object().shape({
  basePrice: yup.string().required("Base price is required"),
  distancePerKm: yup.string().required("Distance per km is required"),
  demandPrice: yup.string().required("Demand price is required"),
  demandDistance: yup.string().required("Demand price is required"),
});

export default settingSchema;
