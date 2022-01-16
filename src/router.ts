import { createRouter, createWebHistory } from 'vue-router'
import Overview from './views/Overview.vue'
import ModelList from './views/ModelList.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Overview,
        },
        {
            path: '/model-list',
            component: ModelList,
        }
    ]
})