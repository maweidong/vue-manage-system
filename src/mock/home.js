import Mcok from 'mockjs'

export default {
    getHomeData: () => {
        return {
            code: 20000,
            data: {
                videoData: [{
                    name: 'SpringBoot',
                    value: Mcok.Random.float(1000, 10000, 0, 2)
                }, {
                    name: 'Vue',
                    value: Mcok.Random.float(1000, 10000, 0, 2)
                }, {
                    name: '小程序',
                    value: Mcok.Random.float(1000, 10000, 0, 2)
                }, {
                    name: 'EC6',
                    value: Mcok.Random.float(1000, 10000, 0, 2)
                }, {
                    name: 'JAVA',
                    value: Mcok.Random.float(1000, 10000, 0, 2)
                }]
            }
        }
    }
}