import moment from "moment";

const formateDate = (value) => {
    return moment(value).format("DD-MM-YYYY");
};

export default formateDate;