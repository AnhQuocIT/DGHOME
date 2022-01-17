import Axios from "axios";

export default (function () {
    const tagsMgr = {
        url: "/src/assets/dummyData/model-data.json",
        getTagsData(): Promise<object> {
            return new Promise((resolve, reject) => {
                Axios.get(this.url).then((res: any) => {
                    if (res.status == 200) {
                        resolve(res.data.tags);
                    } else {
                        throw new Error(res.statusText);
                    }
                }).catch((res: any) => {
                    reject(res);
                });
            });
        },
    };
    return tagsMgr;
})();