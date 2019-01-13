import axios from "axios";
import {
    state
} from '@/store';
import mapState from 'vuex'

export default () => {
    console.log('state =', authen)
    const {
        token
    } = [...mapState['token']]
    return axios.create({
        baseURL: `http://localhost:3000/api`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};