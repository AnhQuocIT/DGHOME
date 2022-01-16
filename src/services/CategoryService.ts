import Axios from "axios";

export default (function () {
    const categoriesMgr = {
        url: "./src/assets/dummyData/model-data.json",
        getStyleData(): Promise<object> {
            return new Promise((resolve, reject) => {
                Axios.get(this.url).then((res: any) => {
                    resolve(res.data.categories);
                }).catch((res: any) => {
                    reject(res);
                });
            });
        },
    };
    return categoriesMgr;
})();