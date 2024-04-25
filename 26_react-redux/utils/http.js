import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

export default axios;

// axios('/products')  axios('/detail/' + id)