import axios from 'axios'

async function get() {

    const url = `https://api.atlasmode.ir/v1/front/home`;
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