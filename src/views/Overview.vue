<script lang="ts">
import ModelsService from '../services/ModelsService';
import store from '../store';

export default {
    name: 'Overview',
    data() {
        return {
            service: {
                ModelsService
            },
            listModelName: []
        }
    },
    created() {
        // Get list model
        this.service.ModelsService.getModelData().then((data: Array<object>) => {
            this.listModelName = this.service.ModelsService.getModelAttrList(data, 'name');
            this.$store.dispatch('updateListName', this.listModelName);
        });
    }
}

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
