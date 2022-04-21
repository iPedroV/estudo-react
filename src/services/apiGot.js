import axios from "axios";

const apiGot = axios.create({
    baseURL : 'https://thronesapi.com/api/v2/',
    headers: {
        'content-type': 'aplications/json;charset=utf-8'
    }
    
})

export default apiGot