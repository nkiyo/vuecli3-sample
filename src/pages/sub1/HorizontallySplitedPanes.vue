<template>
  <div>
    <!-- 高さに上限を設ける。ウインドウの高さを超えないようにする。 -->
    <el-row>
      <el-col :span="12">
        <slot name="left">left undefined</slot>
      </el-col>
      <el-col :span="12">
        <slot name="right">right undefined</slot>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// 右ペイン発火のイベントを、左ペインに渡す
</script>
