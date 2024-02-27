import Axios from "axios";

const AxiosInstance = Axios.create({
    baseURL: 'https://crudapi.co.uk/api/v1',
});

export default AxiosInstance