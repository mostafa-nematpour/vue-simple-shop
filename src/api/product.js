import axios from 'axios'

async function get(filter) {
    let page = filter.page ?? 1

    const url = `https://api.atlasmode.ir/v1/front/products?page=${page}`;
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