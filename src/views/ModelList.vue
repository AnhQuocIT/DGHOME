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

export default {
    name: 'ModelsList',
    components: { Breadcrumb, Filter, ModelCard, Pagination },
    data() {
        return {
            service: {
                TagsService,
                ModelsService,
                StatusService,
                StyleService,
                CategoryService
            },
            crumbs: ['Model Listing'],
            isShowOverlay: false,
            paginationData: null,
            modelListData: null,
            filterData: {
                statusList: [],
                categoryList: [],
                styleList: [],
                tagsList: [],
            },
        };
    },
    watch: {
        isShowOverlay(val: boolean) {
            const contentEl = document.querySelector(".content-wrapper");
            if (val == true) {
                contentEl.style.overflow = "hidden";
            } else {
                contentEl.style.overflow = "";
            }
        }
    },
    created() {
        this.paginationData = {
            totalPage: 4,
            currentPage: 2,
        };
        this.initData();
    },
    methods: {
        initData(): void {
            // Get list model
            this.service.ModelsService.getModelData().then((data: Array<object>) => {
                this.modelListData = data;
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
        toggleOverlay(state: boolean): void {
            this.isShowOverlay = state;
        },
        closePopup(): void {
            this.isShowOverlay = false;
            this.$refs.filter.closePopup();
        },
        changePage(page: number): void {
            // Get new list
        },
        updateData(data: object): void {
            this.service.ModelsService.getModelResultList(this.modelListData, data);
        },
    }
}
</script>

<template>
    <div class="model-container">
        <div class="breadscrum-area">
            <Breadcrumb :crumbs="crumbs" @selected="crumbSelected"></Breadcrumb>
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
                <Pagination :paginationData="paginationData" @changePage="changePage"></Pagination>
            </div>
            <Filter ref="filter" :filterData="filterData" @selectedData="updateData" @toggleOverlay="toggleOverlay"></Filter>
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