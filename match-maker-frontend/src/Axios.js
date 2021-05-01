import axios from 'axios'

const instance=axios.create({

    baseURL: 'https://match-maker-backend.herokuapp.com'
});

export default instance;