module.exports = {
    serverPort: 4001,
    components: './src/**/[A-z]*.{js,jsx}',
    require: [
        './examples/example.css',
    ],

    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react', 'stage-0'],
                        plugins: ['react-hot-loader/babel'],
                    },
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: [
                        require.resolve('style-loader'),
                        {
                            loader: require.resolve('css-loader'),
                        },
                    ],
                },
            ],
        },
    },
    showUsage: true,
    showCode: true,
    title: 'Guidance of react-qtip',
    styleguideDir: './docs',
};