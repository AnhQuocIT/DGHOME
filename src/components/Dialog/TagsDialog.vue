<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: "TagsDialog",
    props: {
        tagsData: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
            searchValue: '',
        }
    },
    computed: {
        listTags(): Array<any> {
            if (this.searchValue != '') {
                return this.tagsData.filter((obj: any) => {
                    if (obj.name.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1) {
                        return obj;
                    }
                });
            } else {
                return this.tagsData;
            }
        }
    },
    methods: {
        /**
         * Add more data for tags list
         */
        updateData(data: Array<object>) {
            this.tagsData.forEach((obj: any) => {
                data.forEach((item: any) => {
                    if (obj.name == item) {
                        obj['selected'] = true;
                        return;
                    }
                });
            });
        },
        /**
         * Submit data to filter
         */
        submitData(data: string): void {
            let prepareData = {
                type: 'tag',
                key: data,
            }
            this.$emit('selected', prepareData);
            this.$emit('closePopup', false);
        },
    }
})
</script>
<template>
    <div class="tag-dropdown dropdown">
        <div class="search-area">
            <input
                v-model="searchValue"
                type="text"
                placeholder="Search for tags..."
                name="tag-search"
                id="tag-search"
                autocomplete="false"
            />
        </div>
        <div class="tag-list">
            <ul class="txt-normal">
                <li
                    :class="tag.selected ? 'disabled' : ''"
                    v-for="tag in listTags"
                    :key="tag.id"
                    @click="submitData(tag.name)"
                >{{ tag.name }}</li>
            </ul>
        </div>
    </div>
</template>
<style lang="sass">

@import "./src/assets/css/constants"
@import "./src/assets/css/common"
.tag-dropdown
    width: 340px
    height: 310px
    overflow: hidden
    right: 0
    @media only screen and (max-height: 850px)
        bottom: 50px
    .search-area
        display: flex
        input
            margin: 20px 20px 10px 20px
            width: 100%
    .tag-list
        overflow-y: auto
        display: flex
        flex-direction: column
        height: 224px
        ul
            list-style: none
            margin: 0 0 10px
            padding: 0
            width: 100%
            li
                padding: 5px 20px
                height: 55px
                display: flex
                align-items: center
                color: $color-gray-2
                &:hover
                    cursor: pointer
                    background-color: $color-primary
                    color: $color-white
                &:not(:last-child)
                    box-shadow: 0 1px 0 $color-white-smoke
                    margin-bottom: 10px
                &.disabled
                    color: $color-gray-4
                    cursor: auto
                    pointer-events: none
</style>