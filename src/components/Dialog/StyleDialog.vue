<script lang="ts">
export default {
    name: "StyleDialog",
    props: {
        styleData: {
            type: Array,
            required: true,
        }
    },
    data() {
        return {
        }
    },
    methods: {
        submitData(data: string): void {
            this.$emit('selected', data);
        },
    }
}
</script>
<template>
    <div class="style-dropdown dropdown">
        <ul class="txt-normal">
            <li @click="submitData()">Japanese</li>
            <li>Indochine</li>
            <li class="disabled">Modern</li>
            <li>Modern Luxury</li>
            <li>Scandinavian</li>
            <li>Japanese</li>
            <li>Japanese</li>
            <li>Japanese</li>
        </ul>
    </div>
</template>
<style lang="sass">

@import "./src/assets/css/constants"
@import "./src/assets/css/common"
.style-dropdown
    width: 340px
    height: 245px
    overflow-y: auto
    right: 0
    ul
        list-style: none
        padding: 20px
        margin: 0
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