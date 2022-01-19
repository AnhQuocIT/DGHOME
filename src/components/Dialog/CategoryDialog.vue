<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: "CategoryDialog",
    props: {
        categoryData: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            selectedData: {
                main: [] as Array<string>,
                sub: [] as Array<string>,
            },
        };
    },
    methods: {
        /**
         * Submit data for filter
         */
        submitData(): void {
            let data = {
                type: 'category',
                key: this.selectedData,
            };
            this.$emit('selected', data);
            this.$emit('closePopup', false);
        },
        /**
         * Select all checkbox
         */
        selectAll(selector: string): void {
            const checkboxes = (document.querySelector('.' + selector) as any).querySelectorAll('input[type="checkbox"]');
            this.selectedData['main'].push(selector);
            for (let checkbox of checkboxes) {
                checkbox.checked = true;
                this.selectedData['sub'].push(checkbox.value);
            }
        },
        /**
         * Deselect all checkbox
         */
        deSelectAll(): void {
            const checkboxes = (document.querySelector('.list-container') as any).querySelectorAll('input[type="checkbox"]');
            for (let checkbox of checkboxes) {
                checkbox.checked = false;
            }
            this.selectedData = {
                main: [],
                sub: [],
            };
        },
        /**
         * Select checkbox
         */
        onChange(main: string, sub: string, $event: any): void {
            if ($event.target.checked == true) {
                if (this.selectedData.main.includes(main) == false) {
                    this.selectedData.main.push(main);
                }
                if (this.selectedData.sub.includes(sub) == false) {
                    this.selectedData.sub.push(sub);
                }
            } else {
                let index = -1;
                index = this.selectedData.sub.indexOf($event.target.value);
                if (index > -1) {
                    this.selectedData.sub.splice(index, 1);
                }
                if (this.selectedData.sub.length < 1) {
                    this.selectedData.main = [];
                }
            }
        }
    }
})
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
                        <input
                            type="checkbox"
                            @change="onChange(category.name, subCaegory.name, $event)"
                            :name="category.name"
                            :value="subCaegory.name"
                            :id="subCaegory.name"
                        />
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