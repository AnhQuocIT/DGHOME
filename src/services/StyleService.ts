import Axios from "axios";

export default (function () {
    const stylesMgr = {
        url: "https://aqdghome.herokuapp.com/api/styles",
        getStyleData(): Promise<object> {
            return new Promise((resolve, reject) => {
                Axios.get(this.url).then((res: any) => {
                    if (res.status == 200) {
                        resolve(res.data);
                    } else {
                        throw new Error(res.statusText);
                    }
                }).catch((res: any) => {
                    reject(res);
                });
            });
        },
    };
    return stylesMgr;
})();