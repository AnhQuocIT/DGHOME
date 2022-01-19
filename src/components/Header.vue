<script lang="ts">
import ModelsService from "../services/ModelsService";
import store from "../store";
export default {
    name: 'Header',
    data() {
        return {
            store: store,
            service: {
                ModelsService
            },
            searchQuery: '',
            isShowAutoComplete: false,
            defaultItemNumber: 10,
            isShowCloseIcon: false,
            maxItem: 6,
            isShowLoadMore: false,
            isSelectedName: false
        }
    },
    watch: {
        searchQuery(val: string): void {
            if (val) {
                if (this.isSelectedName == false) {
                    this.isShowAutoComplete = true;
                } else {
                    this.isSelectedName = false;
                }
            } else {
                this.store.dispatch('updateSearchKey', val);
            }
        },
    },
    computed: {
        listName(): void {
            this.maxItem = 6;
            if (this.searchQuery != '') {
                return this.store.state.listModelName.filter((item: string) => {
                    if (item.toLowerCase().indexOf(this.searchQuery.toLowerCase()) !== -1) {
                        return true;
                    }
                });
            } else {
                return this.store.state.listModelName;
            }
        },
    },
    methods: {
        /**
         * Clear value input search
         */
        clearSearchBar(): void {
            this.searchQuery = '';
            this.isShowCloseIcon = false;
            this.isShowAutoComplete = false;
            this.store.dispatch('updateSearchKey', this.searchQuery);
        },
        /**
         * Close auto complete popup
         */
        closeAutoComplete(): void {
            this.isShowAutoComplete = false;
        },
        /**
         * Click item in autocomplete popup to get name
         */
        getName(value: string): void {
            this.searchQuery = value;
            this.isShowAutoComplete = false;
            this.isSelectedName = true;
            document.getElementById("search").focus();
        },
        /**
         * Handle for enter key
         * @param $event element event
         */
        handleEnter($event): void {
            if ($event.key === "Enter") {
                this.handleSearch();
            }
        },
        /**
         * Handle for onBlur event
         */
        handleBLur(): void {
            window.onclick = e => {
                this.isShowAutoComplete = false;
            }
        },
        /**
         * Handle search
         */
        handleSearch(): void {
            if (this.searchQuery != '') {
                this.isShowCloseIcon = true;
                this.isShowAutoComplete = false;
                this.store.dispatch('updateSearchKey', this.searchQuery);
            }
        },
        /**
         * On click to load more item
         */
        loadMore(): void {
            window.onclick = e => { }; // Prevent event click on this window
            this.maxItem += 6;
        }
    }
}
</script>
<template>
    <div class="topbar-wrapper">
        <div class="logo-area">
            <img src="/src/assets/imgs/main-logo.png" alt="logo" />
        </div>

        <div class="search-area">
            <div class="search-container">
                <input
                    class="search-input txt-normal"
                    id="search"
                    type="text"
                    @click="handleBLur"
                    autocomplete="off"
                    v-model="searchQuery"
                    @keyup="handleEnter"
                    placeholder="Search for models..."
                />
                <span v-if="!isShowCloseIcon" @click="handleSearch" class="gourp-search-btn">
                    <img
                        class="search-icon"
                        @click="handleSearch"
                        src="/src/assets/icons/search.svg"
                        alt="search"
                    />
                </span>
                <span v-else @click="clearSearchBar" class="gourp-search-btn">
                    <img
                        class="close-icon"
                        src="/src/assets/icons/close.svg"
                        alt="search"
                    />
                </span>
                <div v-show="isShowAutoComplete" class="result-area txt-normal">
                    <p>Models</p>
                    <ul class="search-results" id="results">
                        <li
                            v-if="listName.length > 0"
                            v-for="n in (listName.length > maxItem ? maxItem : listName.length)"
                            :key="n"
                            @click="getName(listName[n - 1])"
                        >{{ listName[n - 1] }}</li>
                        <li class="no-result" v-else>No results</li>
                        <li
                            v-show="maxItem < listName.length"
                            class="more-result"
                            @click="loadMore"
                        >
                            <p>See more results</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="action-icon-area">
            <img src="/src/assets/icons/question-circle.svg" alt="info" />
            <img src="/src/assets/icons/bell.svg" alt="bell" />
            <img src="/src/assets/imgs/user.png" alt="user" />
        </div>
    </div>
</template>
<style lang="sass">

@import "./src/assets/css/constants"
.topbar-wrapper
    width: 100%
    height: 80px
    display: flex
    .logo-area
        display: flex
        justify-content: flex-start
        flex: 250px 0 0
        align-items: center
        img
            height: 50px
            margin-left: 20px
    .search-area
        display: flex
        width: 100%
        align-items: center
        .search-container
            width: 100%
            position: relative
            .gourp-search-btn
                width: 80px,
                height: 50px,
                position: absolute
                display: flex
                align-items: center
                justify-content: center
                right: 0
                cursor: pointer
                .search-icon, .close-icon
                    width: 24px
                    height: 24px
                    right: 24px
                    top: 13px
            .search-input
                color: $color-gray-3
                border: 1px solid $color-gray-5
                border-radius: 4px
                width: 100%
                height: 50px
                float: right
                padding: 16px 24px
                outline: 0px
                &::placeholder
                    color: $color-gray-4
            .result-area
                position: absolute
                z-index: 999
                width: 100%
                height: max-content
                max-height: 500px
                overflow: auto
                background-color: $color-white
                border: 1px solid $color-gray-4
                border-radius: 4px
                box-shadow: 0 2px 4px $color-gray-5
                top: 55px
                p
                    color: $color-primary
                    padding: 6px 12px 0 12px
                    margin: 0
                    position: sticky
                    top: 0
                    background-color: $color-white
                .search-results
                    list-style: none
                    text-align: left
                    margin: 0
                    padding: 0
                    li
                        padding: 12px 24px
                        height: 47px
                        color: $color-gray-2
                        &:not(:last-child):hover
                            background: $color-white-smoke
                            cursor: pointer
                    .more-result
                        text-decoration: underline
                        color: $color-primary
                        position: sticky
                        bottom: 0
                        background: white
                        p
                            padding: 0
                            width: max-content
                            cursor: pointer
                    .no-result
                        cursor: auto
                        pointer-events: none

    .action-icon-area
        display: flex
        justify-content: flex-end
        flex: 0 0 250px
        align-items: center
        img
            width: 24px
            height: 24px
            margin-right: 32px
        img:last-of-type
            margin-right: 28px
</style>