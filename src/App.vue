<script setup lang="ts">
import { darkTheme, NConfigProvider, GlobalThemeOverrides } from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {
  Card: {
    boxShadow: '0px 0px 5px #63e2b7',
  },
  Carousel: {},
}
</script>

<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides">
    <RouterView />
  </n-config-provider>
</template>

<style scoped></style>
