import Cookie from 'js-cookie'
export default {
    state: {
        isCollapse: false,
        menu: [],
        currentMenu: null,
        tabsList: [{
            path: "/",
            name: "home",
            label: "首页",
            icon: "home",
        }]
    },
    mutations: {
        //设置菜单
        setMenu(state, val) {
            //val为后台返回的菜单
            state.menu = val
            Cookie.set('menu', JSON.stringify(val))
        },
        //清除cookie中的菜单
        clearMenu(state) {
            state.menu = []
            Cookie.remove('menu')
        },

        addMenu(state, router) {
            let menu = JSON.parse(Cookie.get('menu'))
            if (!menu) {
                return
            }
            state.menu = menu

            //动态路由
            let currentMenu = [{
                    path: '/',
                    component: () =>
                        import (`@/views/Main`),
                    children: []
                }]
                //将后端传过来的菜单路径放到动态路由中
            menu.forEach(item => {
                if (item.children) {
                    item.children = item.children.map(item => {
                        item.component = () =>
                            import (`@/views/${item.url}`)
                        return item
                    })
                    currentMenu[0].children.push(...item.children)
                } else {
                    item.component = () =>
                        import (`@/views/${item.url}`)
                    currentMenu[0].children.push(item)
                }
            })
            router.addRoutes(currentMenu)

        },



        selectMenu(state, val) {
            if (val.name !== 'home') {
                state.currentMenu = val
                let result = state.tabsList.findIndex(item => item.name === val.name)
                result === -1 ? state.tabsList.push(val) : ''
            } else {
                state.currentMenu = null
            }
        },
        closeTab(state, val) {
            let result = state.tabsList.findIndex(item => item.name === val.name)
            state.tabsList.splice(result, 1)
        },
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        }
    },
    actions: {}
}