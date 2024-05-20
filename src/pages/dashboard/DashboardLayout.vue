<script setup lang="ts">
import { NLayout, NLayoutSider } from 'naive-ui'
import Menu from './components/Menu.vue'
</script>

<template>
  <section class="main">
    <n-layout has-sider class="layout">
      <n-layout-sider>
        <Menu />
      </n-layout-sider>

      <n-layout>
        <router-view />
      </n-layout>
    </n-layout>
  </section>
</template>

<style lang="scss" scoped>
.main {
  height: 100dvh;
}

.layout {
  height: 100%;
}
</style>
