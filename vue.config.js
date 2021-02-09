module.exports = {
  outputDir: 'docs',
  pages: {
    main: {
      entry: 'src/pages/main/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Main Page',
    },
    sub1: {
      entry: 'src/pages/sub1/main.js',
      title: 'Sub1',
    },
    // 設定方法は、https://cli.vuejs.org/config/#pages を参考にした
  },
};
