<script lang="ts">
export default {
    name: 'Header',
    data: () => ({
        searchQuery: '',
        isShowAutoComplete: false as boolean,
    }),
    watch: {
        searchQuery(val: string): void {
            if (val) {
                this.isShowAutoComplete = true;
            }
        }
    },
    methods: {
        clearSearchBar(): void {
            this.searchQuery = '';
            this.isShowAutoComplete = false;
        },
        closeAutoComplete(): void {
            this.isShowAutoComplete = false;
        },
        findAll(wordList: any, collection: any): void {
            return collection.filter(function (word: any) {
                word = word.toLowerCase();
                return wordList.some(function (w: any) {
                    return ~word.indexOf(w);
                });
            });
        },
        displayResults(resultsEl: any, wordList: any): void {
            return resultsEl.innerHTML = (wordList.map(function (w) {
                return '<li>' + w + '</li>';
            })).join('');
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
                    v-on:blur="closeAutoComplete()"
                    v-model="searchQuery"
                    placeholder="Search for models..."
                />
                <img
                    class="search-icon"
                    v-if="!searchQuery"
                    src="/src/assets/icons/search.svg"
                    alt="search"
                />
                <img
                    class="close-icon"
                    v-else
                    @click="clearSearchBar"
                    src="/src/assets/icons/close.svg"
                    alt="search"
                />
                <div v-show="isShowAutoComplete" class="result-area txt-normal">
                    <p>Models</p>
                    <ul class="search-results" id="results">
                        <li>123</li>
                        <li>123</li>
                        <li>123</li>
                        <li>123</li>
                        <li>123</li>
                        <li class="more-result">
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
            .search-icon, .close-icon
                position: absolute
                float: right
                cursor: pointer
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
                width: 500px
                min-height: 305px
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
                        p
                            padding: 0
                            width: max-content
                            cursor: pointer

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