import Axios from "axios";

export default (function () {
    const statusMgr = {
        url: "./src/assets/dummyData/model-data.json",
        getStatusData(): Promise<object> {
            return new Promise((resolve, reject) => {
                Axios.get(this.url).then((res: any) => {
                    if (res.status == 200) {
                        resolve(res.data.status);
                    } else {
                        throw new Error(res.statusText);
                    }
                }).catch((res: any) => {
                    reject(res);
                });
            });
        },
    };
    return statusMgr;
})();