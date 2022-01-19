import { createStore } from "vuex";

export default createStore({
    state: {
        listModelName: [],
        searchKey: '',
    },
    mutations: {
        addDataForListName(state, data: Array): void {
            state.listModelName = data;
        },
        setSearchKey(state, data: string): void {
            state.searchKey = data;
        },
    },
    getters: {
        getListModelName(state) {
            return state.listModelName;
        },
        getSearchKey(state) {
            return state.searchKey;
        }
    },
    actions: {
        updateListName(context, data) {
            context.commit('addDataForListName', data);
        },
        updateSearchKey(context, data) {
            context.commit('setSearchKey', data);
        }
    }
});