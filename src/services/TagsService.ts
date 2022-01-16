import Axios from "axios";

export default (function () {
    const tagsMgr = {
        url: "/src/assets/dummyData/model-data.json",
        getTagsData(): Promise<object> {
            return new Promise((resolve, reject) => {
                Axios.get(this.url).then((res: any) => {
                    resolve(res.data.tags);
                }).catch((res: any) => {
                    reject(res);
                });
            });
        },
    };
    return tagsMgr;
})();