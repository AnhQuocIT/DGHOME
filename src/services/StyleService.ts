import Axios from "axios";

export default (function () {
    const stylesMgr = {
        url: "./src/assets/dummyData/model-data.json",
        getStyleData(): Promise<object> {
            return new Promise((resolve, reject) => {
                Axios.get(this.url).then((res: any) => {
                    resolve(res.data.styles);
                }).catch((res: any) => {
                    reject(res);
                });
            });
        },
    };
    return stylesMgr;
})();