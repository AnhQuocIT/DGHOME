<script lang="ts">
import { defineComponent } from 'vue';
import CategoryDialog from "./Dialog/CategoryDialog.vue";
import StyleDialog from "./Dialog/StyleDialog.vue";
import TagsDialog from "./Dialog/TagsDialog.vue";

export interface FilterDTO {
    type: string,
    key: any,
}

export default defineComponent({
    name: "FilterComponent",
    components: { CategoryDialog, StyleDialog, TagsDialog },
    props: {
        filterData: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            isShowCategoryFilter: false,
            isShowStyleFilter: false,
            isShowTagFilter: false,
            isShowOverlay: false,
            colectedData: null,
            selectedTags: [] as Array<string>,
            filteredData: null,
            filterKey: {
                statusFilter: [] as Array<any>,
                categoryFilter: null as any,
                styleFilter: null,
                tagFilter: [] as Array<any>,
            },
        };
    },
    methods: {
        /**
         * Show/Hide category dialog
         */
        toggleCategoryFilter(): void {
            this.isShowCategoryFilter = !this.isShowCategoryFilter;
            this.isShowOverlay = !this.isShowOverlay;
            this.toggleOverlay(this.isShowOverlay);
        },
        /**
         * Show/Hide filter dialog
         */
        toggleStyleFilter(): void {
            this.isShowStyleFilter = !this.isShowStyleFilter;
            this.isShowOverlay = !this.isShowOverlay;
            this.toggleOverlay(this.isShowOverlay);
        },
        /**
         * Show/Hide tag dialog
         */
        toggleTagFilter(): void {
            (this.$refs['tagDialog'] as any).updateData(this.selectedTags);
            this.isShowTagFilter = !this.isShowTagFilter;
            this.isShowOverlay = !this.isShowOverlay;
            this.toggleOverlay(this.isShowOverlay);
        },
        /**
         * Show/Hide overlay
         */
        toggleOverlay(state: boolean): void {
            this.$emit('toggleOverlay', state);
        },
        /**
         * Hide all dialog
         */
        closePopup(): void {
            this.isShowCategoryFilter = false;
            this.isShowStyleFilter = false;
            this.isShowTagFilter = false;
            this.isShowOverlay = false;
            this.toggleOverlay(false);
        },
        /**
         * Remove tag by click
         */
        removeTag(tag: string): void {
            let index = this.selectedTags.indexOf(tag);
            if (index > -1) {
                this.selectedTags.splice(index, 1);
            }
            this.filterKey.tagFilter = this.selectedTags;
            this.$emit('selectedData', this.filterKey);
        },
        /**
         * Request filter
         */
        submitData(data: FilterDTO): void {
            // Prepare search key for tag
            if (data.type == "tag") {
                this.selectedTags.push(data.key);
                this.filterKey.tagFilter = this.selectedTags;
            }
            // Prepare search key for status
            if (data.type == "status") {
                const checkboxes = (document.querySelector('.status-list'))!.querySelectorAll('input[type="checkbox"]');
                let hasChecked = false;
                checkboxes.forEach((checkbox: any) => {
                    if (checkbox.checked == true) {
                        hasChecked = true;
                    }
                });
                if (this.filterKey.statusFilter.includes(data.key) == false) {
                    this.filterKey.statusFilter.push(data.key);
                } else {
                    let index = this.filterKey.statusFilter.indexOf(data.key);
                    if (index > -1) {
                        this.filterKey.statusFilter.splice(index, 1);
                    }
                }
                if (hasChecked == false) {
                    this.filterKey.statusFilter = [];
                }
            }
            // Prepare search key for category
            if (data.type == "category") {
                this.filterKey.categoryFilter = data.key;
                if (data.key.sub.length < 1) {
                    this.filterKey.categoryFilter = [];
                }
            }
            // Prepare search key for style
            if (data.type == "style") {
                this.filterKey.styleFilter = data.key;
            }
            this.$emit('selectedData', this.filterKey);
        }
    },
})
</script>
<template>
    <div class="filter-area">
        <div class="status-filter">
            <p class="title">Status</p>
            <ul class="status-list txt-normal">
                <li v-for="status in filterData.statusList" :key="status.id">
                    <label class="checkbox-container" :for="status.id">
                        {{ status.name }}
                        <input
                            @click="submitData({ type: 'status', key: status.id })"
                            type="checkbox"
                            name="status"
                            :id="status.id"
                            :value="status.id"
                        />
                        <span class="checkmark"></span>
                    </label>
                </li>
            </ul>
        </div>
        <div class="category-filter">
            <p class="title">Category</p>
            <div class="dropdown-btn-container">
                <button @click="toggleCategoryFilter" class="dropdown-btn">
                    Filter by categories
                    <img
                        src="/src/assets/icons/right-icon.svg"
                        class="dropdown-icon"
                        alt="dropdown icon"
                        width="24"
                        height="24"
                    />
                </button>
            </div>
            <CategoryDialog
                v-show="isShowCategoryFilter"
                :categoryData="filterData.categoryList"
                @closePopup="closePopup"
                @selected="submitData"
            ></CategoryDialog>
        </div>
        <div class="style-filter">
            <p class="title">Style</p>
            <div @click="toggleStyleFilter" class="dropdown-btn-container">
                <button class="dropdown-btn">
                    Filter by styles
                    <img
                        src="/src/assets/icons/right-icon.svg"
                        class="dropdown-icon"
                        alt="dropdown icon"
                        width="24"
                        height="24"
                    />
                </button>
            </div>
            <StyleDialog
                v-show="isShowStyleFilter"
                :styleData="filterData.styleList"
                @selected="submitData"
                @closePopup="closePopup"
            ></StyleDialog>
        </div>
        <div class="tag-filter">
            <p class="title">Tag</p>
            <div class="tag-container">
                <div v-for="tag in selectedTags" @click="removeTag(tag)">{{ tag }}</div>
                <div class="add-btn" @click="toggleTagFilter">
                    <img src="/src/assets/icons/add.svg" alt="Add icon" />
                    <p>Add</p>
                </div>
            </div>
            <TagsDialog
                ref="tagDialog"
                v-show="isShowTagFilter"
                :tagsData="filterData.tagsList"
                @selected="submitData"
                @closePopup="closePopup"
            ></TagsDialog>
        </div>
    </div>
</template>
<style lang="sass">

@import "./src/assets/css/constants"
@import "./src/assets/css/common"
.filter-area
    flex: 0 30%
    width: 100%
    display: flex
    flex-direction: column
    padding: 10px
    .title
        width: 500
        @include text_size(14px, 17px)
        color: $color-gray-3
        text-transform: uppercase
        margin: 0 0 10px 0
    .status-filter
        .status-list
            list-style: none
            padding: 0 0 0 5px
            margin: 0
            li
                color: $color-gray-2
                &:not(:last-child)
                    margin-bottom: 10px
    .category-filter
        margin-top: 20px
        position: relative
    .style-filter
        margin-top: 20px
        position: relative
    .tag-filter
        margin-top: 20px
        position: relative
        .tag-container
            position: relative
            padding: 10px
            padding-bottom: 5px
            border: 1px solid $color-gray-4
            border-radius: 4px
            display: flex
            flex-direction: row
            flex-wrap: wrap
            margin-left: 5px
            div
                text-overflow: ellipsis
                overflow: hidden
                display: -webkit-box
                -webkit-line-clamp: 1
                -webkit-box-orient: vertical
                height: 24px
                width: max-content
                max-width: 90px
                border: 1px solid $color-gray-4
                border-radius: 4px
                margin: 0 5px 5px 0
                padding: 2px 6px
                @include text_size(10px, 20px)
                color: $color-gray-2
                cursor: pointer
            .add-btn
                width: 47px
                display: flex
                align-items: center
                border-color: $color-gray-2
                padding: 5px
                img
                    padding-right: 5px
                p
                    margin: 0
                    padding: 0
                &:hover
                    border-color: $color-gray-1
</style>