<script lang="ts">
export default {
    props: {
        crumbs: {
            type: Array,
            required: true,
        },
    },
    methods: {
        isLast(index: number): boolean {
            return index === this.crumbs.length - 1;
        },
        selected(crumb: any): void {
            this.$emit('selected', crumb);
        },
    },
};
</script>
<template>
    <ul class="breadcrumb">
        <router-link to="/">
            <li class="breadcrumb-item">
                <img src="/src/assets/icons/Home.svg" class="home-icon" width="20" height="20" alt="Home icon" />
                <span>Home</span>
                <img src="/src/assets/icons/right-icon.svg" class="right-icon" width="16" height="16" alt="right icon">
            </li>
        </router-link>
        <li v-for="(crumb, ci) in crumbs" :key="ci" class="breadcrumb-item" :class="{ 'disabled': isLast(ci) }" @click="selected(crumb)">
            <span>{{ crumb }}</span>
            <img src="/src/assets/icons/right-icon.svg" class="right-icon" :class="{ 'd-none': isLast(ci) }" width="16" height="16" alt="right icon">
        </li>
    </ul>
</template>
<style lang="sass">
@import "./src/assets/css/constants"
@import "./src/assets/css/common"
.breadcrumb
    list-style: none
    padding: 0
    margin: 0 0 0 10px
    display: flex
    a
        text-decoration: none
    .breadcrumb-item
        align-items: center
        display: inline-flex
        &:hover
            cursor: pointer
        .home-icon
            margin-right: 17px
        .right-icon
            margin: 0 8px
        span
            font-weight: 500
            @include text_size(16px, 22px)
            color: $color-gray-3
    .disabled
        cursor: auto
        pointer-events: none
        display: block
        span
            color: $color-primary
</style>