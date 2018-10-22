import Http from './server';

interface returnResult {
    promise: Promise<any>,
    cancel: any;
}

/**
 * 获取dashboard卡片
 */
interface dashboardcardParams {
}

export function dashboardcard(params: dashboardcardParams): returnResult {
    const req = new Http('/componentconfigserv/dashboard/get/dashboardcard', params);
    const promise = req.getResult();
    const cancel = req.cancel;
    return {
        promise,
        cancel,
    };
}

/**
 * 获取家长身份验证码
 */
interface randomCodeParams {
}

export function randomCode(params: randomCodeParams): returnResult {
    const req = new Http('/componentconfigserv/dashboard/get/randomCode', params);
    const promise = req.getResult();
    const cancel = req.cancel;
    return {
        promise,
        cancel,
    };
}
