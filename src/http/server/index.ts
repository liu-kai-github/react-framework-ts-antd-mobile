import axios, {AxiosPromise, Canceler} from 'axios';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

import {APIBaseURL} from "src/variables/config";

import {regionID, schoolID, gradeID, classID, userID, systemID, token} from 'src/variables/user';

// console.log(regionID, schoolID, gradeID, classID, userID, token);

function httpServer(url: string, data: object, baseURL: string = ''): { promise: AxiosPromise, cancel: Canceler } {
    const promise: AxiosPromise = axios({
        method: 'post',
        url,
        data,
        cancelToken: source.token,
        baseURL,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
        },
    });
    const cancel: Canceler = source.cancel;
    return {promise, cancel};
}

function httpGETJS(url: string) {
    const promise: AxiosPromise = axios({
        method: 'get',
        url,
        cancelToken: source.token,
        headers: {},
    });
    const cancel: Canceler = source.cancel;
    return {promise, cancel};
}

export class HTTPfetchJS {

    cancel: Canceler | null = null;
    private res: { promise: AxiosPromise, cancel: Canceler } | null;
    private url: string = '';

    constructor(url: string) {
        this.url = url + '?' + Math.floor(Date.now() / 3600000);
        this.res = httpGETJS(url);
        this.cancel = this.res.cancel;
    }

    async getResult() {
        try {
            const res = this.res ? (await this.res.promise) : null;
            // console.log(res, 'resresresres');
            if (res) {
                if (res.status === 200) {
                    return res.data;
                } else {
                    return new Error('接口出错 ' + this.url)
                }
            }
        } catch (e) {
            console.log(e);
        }

    }
}

export default class Http {

    cancel: Canceler | null = null;
    private res: { promise: AxiosPromise, cancel: Canceler } | null;
    private url: string = '';

    constructor(url: string, parameter: object = {}, baseURL: string = '') {
        if (!baseURL) {
            baseURL = APIBaseURL;
        }

        const params = {
            RegionID: regionID.toString(),
            SchoolID: schoolID.toString(),
            Grade: gradeID.toString(),
            StuClass: classID.toString(),
            UserID: userID.toString(),
            SystemID: systemID,
            token,
            ...parameter,
        };

        this.url = url;
        this.res = httpServer(url, params, baseURL);
        this.cancel = this.res.cancel;
    }

    async getResult() {
        try {
            const res = this.res ? (await this.res.promise) : null;
            // console.log(res, 'resresresres');
            if (res) {
                if (res.status === 911) {
                    window.location.href = window.sessionStorage.getItem('fromLoginSourceURL') || window.localStorage.getItem('fromLoginSourceURL') || '/regionLogin/index.html';
                    return;
                }
                if (res.status === 200) {
                    return res.data;
                } else {
                    return new Error('接口出错 ' + this.url)
                }
            }
        } catch (e) {
            console.log(e);
        }

    }
}
