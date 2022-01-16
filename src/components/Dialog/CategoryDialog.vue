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
            selectedData: '',
        };
    },
    methods: {
        submitData(): void {
            this.$emit('closePopup', false);
            this.$emit('selected', this.selectedData);
        },
        selectAll(): void {
            const checkboxes = (document.querySelector('.category-group')).querySelectorAll('input[type="checkbox"]');
            for (let checkbox of checkboxes) {
                checkbox.checked = true;
            }
        },
        deSelectAll(): void {
            const checkboxes = (document.querySelector('.category-group')).querySelectorAll('input[type="checkbox"]');
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
            <div class="category-group">
                <div class="category-title">
                    <p class="txt-normal">Chair</p>
                    <button @click="selectAll">SELECT ALL</button>
                </div>
                <div class="category-option">
                    <label class="checkbox-container" for="a">
                        <p>Published</p>
                        <input type="checkbox" name="a" id="a" />
                        <span class="checkmark"></span>
                    </label>
                    <label class="checkbox-container" for="b">
                        <p>Publishedaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                        <input type="checkbox" name="b" id="b" />
                        <span class="checkmark"></span>
                    </label>
                    <label class="checkbox-container" for="c">
                        <p>Published</p>
                        <input type="checkbox" name="c" id="c" />
                        <span class="checkmark"></span>
                    </label>
                    <label class="checkbox-container" for="d">
                        <p>Published</p>
                        <input type="checkbox" name="d" id="d" />
                        <span class="checkmark"></span>
                    </label>
                    <label class="checkbox-container" for="e">
                        <p>Published</p>
                        <input type="checkbox" name="e" id="e" />
                        <span class="checkmark"></span>
                    </label>
                    <label class="checkbox-container" for="f">
                        <p>Published</p>
                        <input type="checkbox" name="f" id="f" />
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
    width: 445px
    max-height: 430px
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