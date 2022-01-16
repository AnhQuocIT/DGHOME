<script lang="ts">
export default {
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
            listTags: [],
        }
    },
    methods: {
        submitData(data: string): void {
            this.$emit('selected', data);
        },
        searchTags(): Array {
            // this.listTags.push(this.searchValue);
            return this.listTags;
        }
    }
}
</script>
<template>
    <div class="tag-dropdown dropdown">
        <div class="search-area">
            <input @keyup="searchTags" v-model="searchValue" type="text" placeholder="Search for tags..." name="tag-search" id="tag-search" />
        </div>
        <div class="tag-list">
            <ul class="txt-normal">
                <li @click="submitData()">Japanese</li>
                <li>Indochine</li>
                <li class="disabled">Modern</li>
                <li>Modern Luxury</li>
                <li>Indochine</li>
                <li class="disabled">Modern</li>
                <li>Modern Luxury</li>
                <li>Indochine</li>
                <li class="disabled">Modern</li>
                <li>Modern Luxury</li>
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
        margin: 0 0 10px 20px
        padding-right: 20px
        ul
            list-style: none
            margin: 0 0 10px
            padding: 0
            li
                padding: 5px
                height: 33px
                align-self: stretch
                color: $color-gray-2
                &:hover
                    cursor: pointer
                    background-color: $color-gray-5
                &:not(:last-child)
                    box-shadow: 0 1px 0 $color-white-smoke
                    margin-bottom: 10px
                &.disabled
                    color: $color-gray-4
                    cursor: auto
                    pointer-events: none
</style>