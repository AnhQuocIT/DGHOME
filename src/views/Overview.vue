<script setup lang="ts">
</script>

<template>
    <div class="content-area">
        <h1>Overview</h1>
        <div class="txt-large">
            <p>This is homepage, display overview information</p>
            <p>Comming soon</p>
        </div>
    </div>
</template>

<style lang="sass" >
@import "./src/assets/css/constants"
.content-area
    display: flex
    flex-direction: column
    align-items: center
    padding: 10px
    order: 1
    align-self: stretch
    flex-grow: 1
    margin: 0 10px
    h1
        margin: 0 0 10px 0
    div
        text-align: center
        p
            margin: 0
            &:last-of-type
                margin-top: 20px
</style>
