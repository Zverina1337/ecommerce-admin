import axios from "axios";

async function requestManager(url = "", method = "", data = {}) {

    const response = await axios(url, {
        method: method,
        data: data
    })

    return response
}
export default requestManager;