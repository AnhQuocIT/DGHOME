<script lang="ts">
export default {
    name: "CategoryDialog",
    props: {
        categoryData: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            selectedData: null,
        };
    },
    methods: {
        submitData(data: any): void {
            this.$emit('closePopup', false);
            this.selectedData = {
                type: 'category',
                key: data
            };
            this.$emit('selected', this.selectedData);
        },
        selectAll(selector: string): void {
            const checkboxes = (document.querySelector('.' + selector)).querySelectorAll('input[type="checkbox"]');
            for (let checkbox of checkboxes) {
                checkbox.checked = true;
            }
        },
        deSelectAll(): void {
            const checkboxes = (document.querySelector('.list-container')).querySelectorAll('input[type="checkbox"]');
            for (let checkbox of checkboxes) {
                checkbox.checked = false;
            }
        }
    }
}
</script>
<template>
    <div class="category-dropdown dropdown">
        <div class="list-container">
            <div
                v-for="category in categoryData"
                :key="category.id"
                class="category-group"
                :class="category.name"
            >
                <div class="category-title">
                    <p class="txt-normal">{{ category.name }}</p>
                    <button @click="selectAll(category.name)">SELECT ALL</button>
                </div>
                <div class="category-option">
                    <label
                        v-for="(subCaegory,index) in category.sub"
                        :key="index"
                        class="checkbox-container"
                        :for="subCaegory.name"
                    >
                        <p>{{ subCaegory.name }}</p>
                        <input type="checkbox" :name="category.name" :id="subCaegory.name" />
                        <span class="checkmark"></span>
                    </label>
                </div>
            </div>
        </div>
        <div class="dropdown-footer">
            <button @click="submitData" class="apply-btn">APPLY</button>
            <button @click="deSelectAll" class="clear-btn">CLEAR</button>
        </div>
    </div>
</template>
<style lang="sass">

@import "./src/assets/css/constants"
@import "./src/assets/css/common"

.category-dropdown
    width: 450px
    max-height: 440px
    display: flex
    right: 0
    flex-direction: column
    &:after
        display: block
    .list-container
        overflow-y: auto
        height: 100%
        padding: 0 20px
        height: auto
        .category-group
            margin-top: 20px
            .category-title
                margin-bottom: 15px
                display: flex
                align-items: center
                p
                    margin: 0
                button
                    height: 23px
                    background: none
                    border: none
                    cursor: pointer
                    color: $color-primary
                    text-transform: uppercase
                    @include text_size(9px, 23px)
                    margin-left: 10px
            .category-option
                display: grid
                grid-template-columns: repeat(auto-fill, 117px)
                column-gap: 25px
                row-gap: 15px
                label
                    display: flex
                    align-items: center
                    height: 24px
                    width: 117px
                    p
                        padding: 0
                        margin: 0
                        text-overflow: ellipsis
                        white-space: nowrap
                        overflow: hidden
    .dropdown-footer
        display: flex
        position: sticky
        bottom: 0
        margin: 20px 0
        button
            height: 27px
            text-align: center
            background: none
            cursor: pointer
        .apply-btn
            width: 67px
            border: 1px solid $color-primary
            color: $color-primary
            border-radius: 4px
            margin: 0 15px
            padding: 2px 8px
        .clear-btn
            width: 61px
            padding: 3.5px 8px
            border: none
</style>