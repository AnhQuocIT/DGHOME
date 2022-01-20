import Axios from "axios";

export default (function () {
    const modelsMgr = {
        url: "https://aqdghome.herokuapp.com/api/models",
        modelNameList: [],
        getModelData(): Promise<object> {
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
        getModelAttrList(data: Array<object>, attr: string): Array<object> {
            return data.map((item: any) => { return item[attr]; });
        },
        getModelResultList(listData: Array<object>, option: any): Array<object> {
            let result = listData;
            if (option.name != null && option.name != '') {
                return this.getFilterWithName(listData, option.name);
            }
            // Search status
            if (option.statusFilter != null && option.statusFilter.length > 0) {
                result = this.getFilterWithStatus(result, option.statusFilter);
            }
            // Search category
            if (option.categoryFilter != null && option.categoryFilter.sub != null) {
                result = this.getFilterWithCategory(result, option.categoryFilter);
            }
            // Search style
            if (option.styleFilter != null) {
                result = this.getFilterWithStyle(result, option.styleFilter);
            }
            // Search style
            if (option.tagFilter != null && option.tagFilter.length > 0) {
                result = this.getFilterWithTag(result, option.tagFilter);
            }
            return result;
        },
        getFilterWithName(data: Array<object>, key: string): Array<object> {
            return data.filter((obj: any) => {
                if (obj.name.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
                    return true;
                }
            });
        },
        getFilterWithStatus(data: Array<object>, key: Array<number>): Array<object> {
            return data.filter((obj: any) => {
                return obj.status.find((item: number) => {
                    if (key.includes(item) == true) {
                        return true;
                    }
                });
            });
        },
        getFilterWithCategory(data: Array<object>, key: any): Array<object> {
            return data.filter((obj: any) => {
                if (key.main.includes(obj.category.main) == true) {
                    if (key.sub.includes(obj.category.sub) == true) {
                        return true;
                    }
                }
            });
        },
        getFilterWithStyle(data: Array<object>, key: number): Array<object> {
            return data.filter((obj: any) => {
                if (obj.style == key) {
                    return true;
                }
            });
        },
        getFilterWithTag(data: Array<object>, key: Array<string>): Array<object> {
            return data.filter((obj: any) => {
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