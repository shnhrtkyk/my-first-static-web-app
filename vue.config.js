module.exports = {
    transpileDependencies: [
        "vuetify",
    ],
    parallel: false,
    chainWebpack: config => {
        config
            .plugin('fork-ts-checker')
            .tap(args => {
                args[0].memoryLimit = 16000;
                return args;
            });
    },
};
