<script lang="ts">
import Breadcrumb from '../components/Breadcrumb.vue';
import Filter from '../components/Filter.vue';
import ModelCard from '../components/ModelCard.vue';
import Pagination from '../components/Pagination.vue';
import TagsService from '../services/TagsService';
import ModelsService from '../services/ModelsService';
import StatusService from '../services/StatusService';
import StyleService from '../services/StyleService';
import CategoryService from '../services/CategoryService';
import store from '../store';

export default {
    name: 'ModelsList',
    components: { Breadcrumb, Filter, ModelCard, Pagination },
    data() {
        return {
            store: store,
            service: {
                TagsService,
                ModelsService,
                StatusService,
                StyleService,
                CategoryService
            },
            crumbs: ['Model Listing'],
            isShowOverlay: false,
            paginationData: {
                maxItemOnPage: 9,
                totalPage: 0,
                currentPage: 0,
            },
            modelListData: null,
            filterData: {
                statusList: [],
                categoryList: [],
                styleList: [],
                tagsList: [],
            },
            backupModelList: [],
            listModelName: [],
        };
    },
    computed: {
        searchNameKey(): void {
            return this.store.state.searchKey;
        }
    },
    watch: {
        isShowOverlay(val: boolean) {
            const contentEl = document.querySelector(".content-wrapper");
            if (val == true) {
                contentEl.style.overflow = "hidden";
            } else {
                contentEl.style.overflow = "";
            }
        },
        searchNameKey(name: string) {
            this.updateData({ name });
        }
    },
    created() {
        this.paginationData.currentPage = 1;
        this.initData();
    },
    methods: {
        /**
         * Initial data
         */
        initData(): void {
            // Get list model
            this.service.ModelsService.getModelData().then((data: Array<object>) => {
                this.backupModelList = data;
                this.paginationData.totalPage = Math.ceil(this.backupModelList.length / this.paginationData.maxItemOnPage);
                this.modelListData = this.backupModelList.slice((this.paginationData.currentPage - 1) * this.paginationData.maxItemOnPage, this.paginationData.currentPage * this.paginationData.maxItemOnPage);
                this.listModelName = this.service.ModelsService.getModelAttrList(data, 'name');
                this.store.dispatch('updateListName', this.listModelName);
            });
            // Get list status
            this.service.StatusService.getStatusData().then((data: Array<object>) => {
                this.filterData.statusList = data;
            });
            // Get list category
            this.service.CategoryService.getCategoryData().then((data: Array<object>) => {
                this.filterData.categoryList = data;
            });
            // Get list style
            this.service.StyleService.getStyleData().then((data: Array<object>) => {
                this.filterData.styleList = data;
            });
            // Get list tag
            this.service.TagsService.getTagsData().then((data: Array<object>) => {
                this.filterData.tagsList = data;
            });
        },
        /**
         * Toggle overlay
         * @param state show/hide state
         */
        toggleOverlay(state: boolean): void {
            this.isShowOverlay = state;
        },
        /**
         * Close all filter popup
         */
        closePopup(): void {
            this.isShowOverlay = false;
            this.$refs.filter.closePopup();
        },
        /**
         * Request change page
         * @param page page number will request
         */
        changePage(page: number): void {
            this.paginationData.currentPage = page;
            this.modelListData = this.backupModelList.slice((page - 1) * this.paginationData.maxItemOnPage, page * this.paginationData.maxItemOnPage);
        },
        /**
         * Update data base on search key
         * @param key search key
         */
        updateData(key: object): void {
            this.service.ModelsService.getModelData().then((modelData: Array<object>) => {
                this.backupModelList = this.service.ModelsService.getModelResultList(modelData, key);
                this.paginationData.currentPage = 1;
                this.$refs.pagination.currentPage = 1;
                this.paginationData.totalPage = Math.ceil(this.backupModelList.length / this.paginationData.maxItemOnPage);
                this.modelListData = this.backupModelList.slice((this.paginationData.currentPage - 1) * this.paginationData.maxItemOnPage, this.paginationData.currentPage * this.paginationData.maxItemOnPage);
            });
        },
    }
}
</script>

<template>
    <div class="model-container">
        <div class="breadscrum-area">
            <Breadcrumb :crumbs="crumbs"></Breadcrumb>
        </div>
        <div class="model-content-wrapper">
            <div class="list-area">
                <div class="list-model">
                    <ModelCard
                        v-for="(model, index) in modelListData"
                        :key="index"
                        :modelData="model"
                        @selectedData="updateData"
                    ></ModelCard>
                </div>
                <Pagination
                    ref="pagination"
                    :paginationData="paginationData"
                    @changePage="changePage"
                ></Pagination>
            </div>
            <Filter
                ref="filter"
                :filterData="filterData"
                @selectedData="updateData"
                @toggleOverlay="toggleOverlay"
            ></Filter>
        </div>
    </div>
    <div @click="closePopup" v-show="isShowOverlay" class="dropdown-overlay"></div>
</template>

<style lang="sass">

@import "./src/assets/css/constants"
@import "./src/assets/css/common"

.model-container
    width: 100%
    padding: 10px 0
    margin: 0 10px
    .breadscrum-area
        width: 100%
        margin: 10px 0
    .model-content-wrapper
        height: 100%
        display: flex
        flex-direction: row
        align-items: flex-start
        .list-area
            flex: 98% 0
            padding: 10px
            .list-model
                display: grid
                grid-template-columns: repeat(auto-fill, 285px)
                grid-gap: 20px
</style>