<template>
  <scale-container>
    <div id="app">
      <div class="circe"></div>
    </div>
  </scale-container>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

#app {
  border: 1px solid;
}

.circe {
  margin: auto;
  width: 300px;
  height: 300px;
  border-radius: 100%;
  background: #000;
}
</style>
