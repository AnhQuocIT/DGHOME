import Axios from "axios";

export default (function () {
    const modelsMgr = {
        url: "/src/assets/dummyData/model-data.json",
        modelNameList: [],
        getModelData(): Promise<object> {
            return new Promise((resolve, reject) => {
                Axios.get(this.url).then((res: any) => {
                    this.getListModelAttr(res.data.models, 'name');
                    resolve(res.data.models);
                }).catch((res: any) => {
                    reject(res);
                });
            });
        },
        getListModelAttr(data: object, attr: string): Array {
            return data.map((item: object) => { return item[attr] });
        }
    };
    return modelsMgr;
})();