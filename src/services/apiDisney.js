import axios from "axios";

const apiDisney = axios.create({
    baseURL : 'https://api.disneyapi.dev',
    headers: {
        'content-type': 'aplications/json;charset=utf-8'
    }
    
})

export default apiDisney