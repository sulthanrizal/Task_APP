import Axios from "axios";

const AxiosInstance = Axios.create({
    baseURL: 'https://crudapi.co.uk/api/v1',
   headers: {
        Authorization: "Bearer vg_-7Pc_SHyxPqTkiHsSoWnFVuUlVYI7K6RdovVOXB3dylIVkA"
    } 
});

export default AxiosInstance