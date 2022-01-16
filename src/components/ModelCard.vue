<script lang="ts">
export default {
    props: {
        modelData: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            mainImage: '',
        }
    },
    created() {
        // this.mainImage = this.modelData.image[0];
        this.mainImage = '/src/assets/imgs/test1.png';
    },
    methods: {
        changeImage(path: string): void {
            this.mainImage = path;
        },
        submitData(data: string): void {
            this.$emit('selectedData', data);
        }
    }
}
</script>
<template>
    <div class="model-item">
        <div class="model-img">
            <ul class="thumbnail-img">
                <li @click="changeImage('/src/assets/imgs/test1.png')">
                    <img src="/src/assets/imgs/test1.png" alt="test 1" />
                </li>
                <li @click="changeImage('/src/assets/imgs/test2.png')">
                    <img src="/src/assets/imgs/test2.png" alt="test 2" />
                </li>
                <li @click="changeImage('/src/assets/imgs/test3.png')">
                    <img src="/src/assets/imgs/test3.png" alt="test 3" />
                </li>
            </ul>
            <div class="review-img">
                <div class="overlay">
                    <img class="icon-eye" src="/src/assets/icons/eye-on.svg" alt="eye icon" />
                </div>
                <img :src="mainImage" :alt="mainImage" />
            </div>
        </div>
        <div class="model-info">
            <div class="model-name">modern LAZY CAFFEE CHAIR VERY LONG</div>
            <div class="model-catagory">Chair > Coffee chair</div>
            <div class="model-tag">
                <ul>
                    <li @click="submitData">TAG 1</li>
                    <li>TAG 1</li>
                    <li>TAG 1</li>
                    <li>3 more tags</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="sass">

@import "./src/assets/css/constants"
@import "./src/assets/css/common"
.model-item
    border: 1px solid $color-gray-5
    border-radius: 4px
    width: 285px
    display: flex
    flex-direction: column
    .model-img
        background-color: $color-white-smoke
        height: 170px
        display: flex
        flex-direction: row
        .thumbnail-img
            list-style: none
            padding: 0
            margin: 10px 0 10px 10px
            align-self: center
            li
                border: 1px solid $color-gray-5
                border-radius: 4px
                width: 60px
                height: 45px
                &:hover, .active
                    border: 1px solid $color-gray-4
                    cursor: pointer
                &:not(:last-child)
                    margin-bottom: 5px
                img
                    object-fit: contain
                    width: 100%
                    height: 100%
        .review-img
            width: 200px
            height: 150px
            align-self: center
            position: relative
            img
                width: 100%
                height: 100%
                object-fit: contain
            .overlay
                position: absolute
                transition: .5s ease
                opacity: 0
                width: 200px
                height: 150px
                transform: translate(-50%, -50%)
                -ms-transform: translate(-50%, -50%)
                background: rgba(0, 0, 0, 0.15)
                text-align: center
                top: 75px
                left: 105px
                border-radius: 4px
                .icon-eye
                    width: 20px
                    height: 20px
                    position: absolute
                    top: 44%
                    right: 45%
            &:hover .overlay
                opacity: 1
                cursor: pointer
    .model-info
        height: calc(100% - 170px)
        padding: 10px
        .model-name
            margin-bottom: 15px
            font-weight: 500
            @include text_size(16px, 19px)
            text-transform: uppercase
            color: $color-gray-1
            overflow: hidden
            text-overflow: ellipsis
            display: -webkit-box
            -webkit-line-clamp: 2
            -webkit-box-orient: vertical
        .model-catagory
            @include text_size(12px, 20px)
            color: $color-gray-3
        .model-tag
            ul
                list-style: none
                padding: 0
                margin: 0
                li
                    border: 1px solid $color-gray-5
                    padding: 2px 4px
                    display: inline
                    font-weight: 500
                    @include text_size(11px, 13px)
                    color: $color-gray-2
                    text-transform: uppercase
                    &:not(:last-child)
                        margin-right: 10px
                    &:hover
                        border-color: $color-gray-4
                        cursor: pointer
</style>