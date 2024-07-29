import axios from "axios";


const axiosBase=axios.create({
    baseURL:'http://localhost:8081/api'
})


export default  axiosBase;