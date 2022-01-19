<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    props: {
        modelData: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            mainImage: '',
            numberOfTag: 0,
            maxTagShow: 0
        }
    },
    created() {
        this.mainImage = this.modelData.image[0];
        if (this.modelData.tags.length > 3) {
            this.numberOfTag = this.modelData.tags.length - 3;
            this.maxTagShow = 3;
        } else {
            this.maxTagShow = this.modelData.tags.length;
        }
    },
    methods: {
        changeImage(path: string): void {
            this.mainImage = path;
        },
    }
})
</script>
<template>
    <div class="model-item">
        <div class="model-img">
            <ul class="thumbnail-img">
                <li v-for="n in 3" :key="n" @click="changeImage(modelData.image[n - 1])">
                    <img
                        :src="modelData.image[n - 1] ? modelData.image[n - 1] : ''"
                        :alt="modelData.image[n - 1]"
                        onerror="this.src='/src/assets/imgs/no-image.png';"
                    />
                </li>
            </ul>
            <div class="review-img">
                <div class="overlay">
                    <img class="icon-eye" src="/src/assets/icons/eye-on.svg" alt="eye icon" />
                </div>
                <img
                    :src="mainImage ? mainImage : ''"
                    onerror="this.src='/src/assets/imgs/no-image.png';"
                    :alt="mainImage"
                />
            </div>
        </div>
        <div class="model-info">
            <div class="model-name">{{ modelData.name }}</div>
            <div class="model-catagory">
                <ul>
                    <li>
                        <span>{{ modelData.category.main }}</span>
                        <img
                            src="/src/assets/icons/right-icon.svg"
                            class="right-icon"
                            width="8"
                            height="8"
                            alt="right icon"
                        />
                    </li>
                    <li>
                        <span>{{ modelData.category.sub }}</span>
                    </li>
                </ul>
            </div>
            <div class="model-tag">
                <div
                    v-for="n in maxTagShow"
                    :key="n"
                >{{ modelData.tags[n - 1] }}</div>
                <div v-show="numberOfTag > 0">{{ numberOfTag }} more tags</div>
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
            padding-left: 10px
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
        padding: 10px 10px 0 10px
        .model-name
            margin-bottom: 15px
            font-weight: 500
            height: 38px
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
            ul
                list-style: none
                padding: 0
                margin: 0
                li
                    display: inline
                    .right-icon
                        margin: 0 4px
        .model-tag
            display: flex
            flex-direction: row
            flex-wrap: wrap
            div
                border: 1px solid $color-gray-5
                padding: 2px 4px
                font-weight: 500
                margin-bottom: 10px
                width: max-content
                max-width: 85px
                @include text_size(11px, 13px)
                color: $color-gray-2
                text-transform: uppercase
                text-overflow: ellipsis
                overflow: hidden
                display: -webkit-box
                -webkit-line-clamp: 1
                -webkit-box-orient: vertical
                &:not(:last-child)
                    margin-right: 10px
                &:last-child
                    cursor: auto
                    pointer-events: none
</style>