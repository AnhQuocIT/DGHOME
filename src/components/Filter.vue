<script lang="ts">
import CategoryDialog from "./Dialog/CategoryDialog.vue";
import StyleDialog from "./Dialog/StyleDialog.vue";
import TagsDialog from "./Dialog/TagsDialog.vue";

export default {
    name: "FilterComponent",
    components: { CategoryDialog, StyleDialog, TagsDialog },
    data() {
        return {
            isShowCategoryFilter: false,
            isShowStyleFilter: false,
            isShowTagFilter: false,
            isShowOverlay: false,
            colectedData: null,
        };
    },
    methods: {
        toggleCategoryFilter(): void {
            this.isShowCategoryFilter = !this.isShowCategoryFilter;
            this.isShowOverlay = !this.isShowOverlay;
            this.toggleOverlay(this.isShowOverlay);
        },
        toggleStyleFilter(): void {
            this.isShowStyleFilter = !this.isShowStyleFilter;
            this.isShowOverlay = !this.isShowOverlay;
            this.toggleOverlay(this.isShowOverlay);
        },
        toggleTagFilter(): void {
            this.isShowTagFilter = !this.isShowTagFilter;
            this.isShowOverlay = !this.isShowOverlay;
            this.toggleOverlay(this.isShowOverlay);
        },
        toggleOverlay(state): void {
            this.$emit('toggleOverlay', state);
        },
        closePopup(): void {
            this.isShowCategoryFilter = false;
            this.isShowStyleFilter = false;
            this.isShowTagFilter = false;
            this.isShowOverlay = false;
            this.toggleOverlay(false);
        },
        submitData(data: any): void {
            this.$emit('selectedData', data);
        }
    },
}
</script>
<template>
    <div class="filter-area">
        <div class="status-filter">
            <p class="title">Status</p>
            <ul class="status-list txt-normal">
                <li>
                    <label class="checkbox-container" for="draft">
                        Draft
                        <input
                            @click="submitData('status')"
                            type="checkbox"
                            name="draft"
                            id="draft"
                        />
                        <span class="checkmark"></span>
                    </label>
                </li>
                <li>
                    <label class="checkbox-container" for="reviewing">
                        Reviewing
                        <input type="checkbox" name="reviewing" id="reviewing" />
                        <span class="checkmark"></span>
                    </label>
                </li>
                <li>
                    <label class="checkbox-container" for="published">
                        Published
                        <input type="checkbox" name="published" id="published" />
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
            <StyleDialog v-show="isShowStyleFilter" @selected="submitData"></StyleDialog>
        </div>
        <div class="tag-filter">
            <p class="title">Tag</p>
            <div class="tag-container">
                <div>Tag 1</div>
                <div>Tag 2 text ste</div>
                <div>Tag 3 text long asd dasda asd asdas dasd</div>
                <div>Tag 1</div>
                <div>Tag 2 text</div>
                <div>Tag 3 text long asd dasda asd asdas dasd</div>
                <div>Tag 2 text</div>
                <div class="add-btn" @click="toggleTagFilter">
                    <img src="/src/assets/icons/add.svg" alt="Add icon" />
                    <p>Add</p>
                </div>
            </div>
            <TagsDialog v-show="isShowTagFilter" @selected="submitData"></TagsDialog>
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
                    cursor: pointer
                    border-color: $color-gray-1
</style>