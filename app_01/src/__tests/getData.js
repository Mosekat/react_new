const axios = require('axios');
const surname = require('./surname');

const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const userName = response.data.map(user => surname(user.name));
    return userName;
}

module.exports = getData;