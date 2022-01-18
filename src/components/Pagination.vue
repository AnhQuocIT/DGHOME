<script lang="ts">
export default {
    name: 'Pagination',
    props: {
        paginationData: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            currentPage: 0,
        }
    },
    created() {
        this.currentPage = this.paginationData.currentPage;
    },
    methods: {
        changePage(page: number): void {
            if (page != this.currentPage) {
                this.currentPage = page;
                this.$emit('changePage', page);
            }
        }
    }
}
</script>
<template>
    <div class="pagination-area">
        <button
            v-for="n in paginationData.totalPage"
            :key="n"
            class="pagination-btn"
            :class="currentPage === n ? 'actived' : ''"
            @click="changePage(n)"
        >{{ n }}</button>
    </div>
</template>
<style lang="sass">

.pagination-area
    text-align: center
    margin-top: 20px
    button:not(:last-child)
        margin-right: 8px
</style>