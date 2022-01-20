import Axios from "axios";

export default (function () {
    const tagsMgr = {
        url: "https://aqdghome.herokuapp.com/tags",
        getTagsData(): Promise<object> {
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
    return tagsMgr;
})();