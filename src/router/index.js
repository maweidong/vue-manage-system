import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        component: () =>
            import ('@/views/Main.vue'),
        children: [{
                path: '/',
                name: 'home',
                component: () =>
                    import ('@/views/Home/Home')
            },
            {
                path: '/video',
                name: 'video',
                component: () =>
                    import ('@/views/VideoManage/VideoManage')
            },
            {
                path: '/user',
                name: 'user',
                component: () =>
                    import ('@/views/UserManage/UserManage')
            }, {
                path: '/page1',
                name: 'page1',
                component: () =>
                    import ('@/views/Other/PageOne')
            }, {
                path: '/page2',
                name: 'page2',
                component: () =>
                    import ('@/views/Other/PageTwo')
            }
        ]
    }]
});