export default function ajax(url, type, jsonData) {
    if (type === "GET") {
        // 如果是 GET 請求，將 JSON 數據轉換成查詢字符串，然後附加到 URL 上
        const queryString = new URLSearchParams(jsonData).toString();
        url += '?' + queryString;
    }

    return fetch(url, {
        method: type,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: type === "GET" ? undefined : new URLSearchParams(jsonData)
    });
}
export function errortest(test, call_back, showmsg = false) {
    if (test?.rtn) {
        return true;
    }
    console.error(test.msg);
    if (call_back) {
        call_back(test.msg);
    }
    if (!call_back || showmsg) {
        swal.fire({
            icon: 'error',
            title: '錯誤',
            text: test.msg,
        })
    }
    return false;
}