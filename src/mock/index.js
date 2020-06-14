import Mock from 'mockjs'
import homeApi from './home'


//设置200-2000毫秒延时请求
Mock.setup({
    timeout: '200-2000'
})


//首页相关
// 拦截/home/getData
Mock.mock(/\/home\/getData/, 'get', homeApi.getStatisticalData)