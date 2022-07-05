import axios from 'axios'

async function get(filter={}) {
    let queryString = '?';
    for (const property in filter) {
        queryString += `${property}=${filter[property]}&`;
    }

    const url = `https://api.atlasmode.ir/v1/front/products${queryString}`;

    let data = null
    await axios
        .get(url)
        .then((response) => {
            data = response.data
        }).catch((err) => {
            console.log(response.err);
        })
    return data;
}

export default {
    get
}