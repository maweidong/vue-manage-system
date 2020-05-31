module.exports = {
    devServer: {
        port: 4444,
        open: true
    },
    css: {
        loaderOptions: {
            sass: {
                // 新版本sass-loader， 将data改成prependData进行配置
                Data: `@import "@/assets/scss/_variable.scss";`
            }
        }
    }
}