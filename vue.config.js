module.exports = {
  pages: {
    main: {
      entry: 'src/pages/top/main.js',
      template: 'public/index.html',
      filename: 'index.html',
    },
    sub1: {
      entry: 'src/pages/sub1/main.js',
      template: 'public/sub1.html',
      filename: 'sub1.html',
    },
  },
};
