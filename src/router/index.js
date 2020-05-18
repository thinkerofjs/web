import Vue from 'vue'
import Router from 'vue-router'
import BookReader from "../views/book-reader/book-reader.vue";
import UniverseList from '@/views/universe-list.vue'
import Home from '@/views/home.vue'
import BookCataLogue from '@/views/BookCataLogue.vue'
import Personone from '@/views/book_manage/personone.vue'
import universePage from '@/views/universePage'
import loadpage from "@/views/loadpage";
import book_info from "../views/book_info";
import favorite from "../views/favorite";
import write from "../views/write";
import book_edit from "@/views/book_manage/book_edit.vue";
// import Creatbook from "../views/creatbook";
// import book_info from "../views/book_info";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
          path: '/write',
          name: 'write',
          component: write
        },
        {
            path: '/favorite',
            name: 'favorite',
            component: favorite

        },
        {
            path: '/BookReader',
            name: 'BookReader',
            component: BookReader
        },
        {
            path: '/BookCataLogue',
            name: 'BookCataLogue',
            component: BookCataLogue
        },
        {
            path: '/book_info',
            name: 'book_info',
            component: book_info
        },
        {
            path: '/universe-list',
            name: 'universe-list',
            component: UniverseList
        },
        {
            path: '/book_manage/personone',
            name: 'personone',
            component: Personone
        },
        {
            path: '/universePage',
            name: 'universePage',
            component: universePage
        },
        {
            path: '/loadpage',
            name: 'loadpage',
            component: loadpage
        },
        {
            // eslint-disable-next-line no-mixed-spaces-and-tabs
            path: '/book_manage/book_edit',
            name: 'book_edit',
            component: book_edit
        }
        // {
        //     path: "/creatbook",
        //     name: 'creatbook',
        //     component: Creatbook
        // }
    ]
})
