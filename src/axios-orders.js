import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-9adf4-default-rtdb.asia-southeast1.firebasedatabase.app/'
});

export default instance;