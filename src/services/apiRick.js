import axios from "axios";

const apiRick = axios.create({
    baseURL : 'https://rickandmortyapi.com/api',
    headers: {
        'content-type': 'aplications/json;charset=utf-8'
    }
    
})

export default apiRick