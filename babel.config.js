module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    env: {
      development: {
        plugins: [
          [
            'module-resolver',
            {
              alias: {
                '@/screens': './screens',
                '@/components': './components',
                '@/assets': './assets',
                '@/lib': './lib',
              },
            },
          ],
        ],
      },
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  }
}
