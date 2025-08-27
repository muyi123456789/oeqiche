// postcss.config.js

module.exports = {
  plugins: {
    // ✅ 字符串形式，Next.js 自动加载
    'autoprefixer': {},
    '@tailwindcss/postcss': {},
    'postcss-pxtorem': {
      rootValue: 16,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0.5,
    },
  },
};