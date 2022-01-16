<script lang="ts">
</script>
<template>
    <div class="sidebar-area">
        <ul class="list-menu">
            <router-link to="/">
                <li class="active">
                    <span class="icon icon-dashboard"></span>
                    <p>Overview</p>
                </li>
            </router-link>
            <router-link to="/model-list">
                <li>
                    <span class="icon icon-list"></span>
                    <p>Model Listing</p>
                </li>
            </router-link>
        </ul>
    </div>
</template>
<style lang="sass">

@import "./src/assets/css/constants"
$dashboard-icon-url: url(/src/assets/icons/dashboard.svg)
$menu-icon-url: url(/src/assets/icons/menu-list.svg)
.sidebar-area
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: space-between
    width: 250px
    height: 100%
    border-right: 1px solid $color-gray-5
    .list-menu
        list-style: none
        flex-grow: 1
        padding: 0 10px
        width: 100%
        margin-top: 0
        a
            text-decoration: none
        li
            margin-top: 10px
            padding: 10px
            cursor: pointer
            color: $color-primary
            height: 40px
            display: flex
            align-items: center
            &:hover
                background-color: $color-gray-5
                border-radius: 10px
            .icon
                -webkit-mask-size: cover
                mask-size: cover
                background-color: $color-primary
                width: 20px
                height: 20px
                &-dashboard
                    -webkit-mask-image: $dashboard-icon-url
                    mask-image: $dashboard-icon-url
                &-list
                    -webkit-mask-image: $menu-icon-url
                    mask-image: $menu-icon-url
                    width: 18px
            p
                padding-left: 10px
                font-size: 16px
                line-height: 25px
                text-align: center
        .router-link-active
            color: $color-info
            pointer-events: none
            cursor: auto
            p
                color: $color-info
            .icon
                background-color: $color-info
</style>