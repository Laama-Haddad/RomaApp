import axios, {AxiosResponse} from "axios";

const getToken = () => {
    return '';
    /*    const { data } = store.getState().currentUser;
        return data ? data.accessToken : "";*/
};

const http = {
    get: (url) =>
        new Promise((resolve, reject) => {
            axios.get(url, {
                headers: {
                    Authorization: `Bearer ${getToken()}`,
                    "content-type": "application/json",
                },
            })
                .then((res: AxiosResponse<any>) => resolve(res.data))
                .catch((err) => reject(err));
        }),
    post: (url, body) =>
        new Promise((resolve, reject) => {
            axios
                .post(url, body, {
                    headers: {
                        Authorization: `Bearer ${getToken()}`,
                        "content-type": "application/json",
                    },
                })
                .then((res) => resolve(res.data))
                .catch((err) => reject(err));
        }),
};

export default http;
