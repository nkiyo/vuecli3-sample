<template>
  <div>
  hoge<br>
  hoge<br>
  <HorizontallySplitedPanes>
    <template slot="left">
      <!-- ここに選択項目一覧コンポーネントを配置 -->
      <ul>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
        <li>left</li>
      </ul>
      <button @click="selectItem">Select</button>
    </template>
    <template slot="right">
      <!-- ここに選択項目詳細表示コンポーネントを配置 -->
      <ul>
        <li>{{ detailContent }}</li>
        <li>{{ detailContent }}</li>
        <li>{{ detailContent }}</li>
        <li>{{ detailContent }}</li>
        <li>{{ detailContent }}</li>
        <li>{{ detailContent }}</li>
      </ul>
    </template>
  </HorizontallySplitedPanes>
  </div>
  <!--
  <Main/>
  -->
</template>

<script>
// import Main from '@/pages/sub1/Main.vue';
import HorizontallySplitedPanes from '@/pages/sub1/HorizontallySplitedPanes.vue';

export default {
  components: {
    // Main,
    HorizontallySplitedPanes,
  },
  data() {
    return {
      detailContent: 'detail',
    };
  },
  methods: {
    selectItem() {
      // alert('selectItemx');
      this.$notify({
        title: 'hoge',
        message: 'hage',
      });
      // 上コンポーネントの選択中の項目を取得
      // 下コンポーネントへ反映
    },
  },
};
</script>

<style>
</style>
