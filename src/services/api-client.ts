import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api/games',
    params:{
        key:'e44eeada075940eb8ce6d662e5430636'
    }
})