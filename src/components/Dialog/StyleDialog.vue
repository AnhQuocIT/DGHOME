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
            this.$emit('closePopup', false);
        },
    }
}
</script>
<template>
    <div class="style-dropdown dropdown">
        <div class="list-style">
            <ul class="txt-normal">
                <li
                    v-for="style in styleData"
                    :key="style.id"
                    @click="submitData(style.id)"
                >{{ style.name }}</li>
            </ul>
        </div>
        <div @click="submitData(null)" class="clear-btn">
            <p>Clear</p>
        </div>
    </div>
</template>
<style lang="sass">

@import "./src/assets/css/constants"
@import "./src/assets/css/common"
.style-dropdown
    width: 340px
    height: 280px
    right: 0
    border-radius: 4px
    display: flex
    flex-direction: column
    .list-style
        height: 100%
        overflow-y: auto
        ul
            list-style: none
            margin: 0
            padding: 0
            width: 100%
            height: 100%
            li
                padding: 20px
                height: 55px
                display: flex
                align-items: center
                align-self: stretch
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
    .clear-btn
        display: flex
        position: sticky
        align-items: center
        height: 50px
        background: $color-white
        padding-left: 10px
        border-top: 1px solid $color-gray-4
        p
            padding: 10px 20px
            display: flex
            align-items: center
            color: $color-primary
            border-radius: 4px
            &:hover
                background: $color-primary
                color: $color-white
                cursor: pointer
</style>