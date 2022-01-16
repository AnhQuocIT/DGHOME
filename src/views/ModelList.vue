<script lang="ts">
import Breadcrumb from '../components/Breadcrumb.vue';
import Filter from '../components/Filter.vue';
import ModelCard from '../components/ModelCard.vue';
import Pagination from '../components/Pagination.vue';
import TagsService from '../services/TagsService';
import ModelsService from '../services/ModelsService';

export default {
    name: 'ModelsList',
    components: { Breadcrumb, Filter, ModelCard, Pagination },
    data() {
        return {
            service: {
                TagsService,
                ModelsService
            },
            crumbs: ['Model Listing'],
            isShowOverlay: false,
            paginationData: null,
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
        },
        this.service.ModelsService.getModelData();
    },
    methods: {
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
        updateData(data: any): void {
            // Get new list
        }
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
                    <ModelCard v-for="n in 9" :key="n"></ModelCard>
                </div>
                <Pagination :paginationData="paginationData" @changePage="changePage"></Pagination>
            </div>
            <Filter ref="filter" @selectedData="updateData" @toggleOverlay="toggleOverlay"></Filter>
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