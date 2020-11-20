module.exports = {
  // default:
  // presets: [
  //   '@vue/cli-plugin-babel/preset',
  // ],

  // customized:
  // https://github.com/vuejs/vue-cli/issues/3678#issuecomment-474728989
  // https://qiita.com/DaisukeNishi/items/ff36054a2d00cf81aac4
  presets: [['@vue/app', { useBuiltIns: 'entry' }]],
};
