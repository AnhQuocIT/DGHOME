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
            let prepareData = {
                type: 'style',
                key: data
            }
            this.$emit('selected', prepareData);
        },
    }
}
</script>
<template>
    <div class="style-dropdown dropdown">
        <ul class="txt-normal">
            <li
                v-for="style in styleData"
                :key="style.id"
                @click="submitData(style.id)"
            >{{ style.name }}</li>
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