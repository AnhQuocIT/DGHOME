import Axios from "axios";

export default (function () {
    const modelsMgr = {
        url: "/src/assets/dummyData/model-data.json",
        modelNameList: [],
        getModelData(): Promise<object> {
            return new Promise((resolve, reject) => {
                Axios.get(this.url).then((res: any) => {
                    if (res.status == 200) {
                        resolve(res.data.models);
                    } else {
                        throw new Error(res.statusText);
                    }
                }).catch((res: any) => {
                    reject(res);
                });
            });
        },
        getModelAttrList(data: object, attr: string): Array {
            return data.map((item: object) => { return item[attr]; });
        },
        getModelResultList(listData: Array<object>, option: object): Array<object> {
            let type: string = option.type;
            let key: any = option.key;
            if (type == "name") {
                return this.getFilterWithName(listData, key);
            }
            if (type == "status") {
                return this.getFilterWithStatus(listData, key);
            }
            if (type == "category") {
                return this.getFilterWithCategory(listData, key);
            }
            if (type == "style") {
                return this.getFilterWithStyle(listData, key);
            }
            if (type == "tag") {
                return this.getFilterWithTag(listData, key);
            }
        },
        getFilterWithName(data: Array<object>, key: string): Array<object> {
            return data.filter((obj: object) => {
                if (obj.name.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
                    return true;
                }
            });
        },
        getFilterWithStatus(data: Array<object>, key: number): Array<object> {
            return data.filter((obj: object) => {
                if (obj.status == key) {
                    return true;
                }
            });
        },
        getFilterWithCategory(data: Array<object>, key: object): Array<object> {
            return data.filter((obj: object) => {
                if (obj.category.main == key.main) {
                    if (key.sub.includes(obj.category.sub) == true) {
                        return true;
                    }
                }
            });
        },
        getFilterWithStyle(data: Array<object>, key: number): Array<object> {
            return data.filter((obj: object) => {
                if (obj.style == key) {
                    return true;
                }
            });
        },
        getFilterWithTag(data: Array<object>, key: Array<string>): Array<object> {
            return data.filter((obj: object) => {
                return obj.tags.find((tag: string) => {
                    if (key.includes(tag) == true) {
                        return true;
                    }
                });
            });
        },
    };
    return modelsMgr;
})();