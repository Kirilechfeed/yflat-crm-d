<script setup lang="ts">
import { h, ref } from 'vue'
import { NMenu } from 'naive-ui'
import { RouterLink } from 'vue-router'
import type { MenuOption } from 'naive-ui'
import LogoIcon from '@/assets/clearoff.svg'
import { useRoute } from 'vue-router'

const items = [
  {
    id: 1,
    label: 'Ads',
    path: '/dashboard/ads',
    icon: 'rocket_launch',
  },
  {
    id: 2,
    label: 'Clients',
    path: '/dashboard/clients',
    icon: 'person',
  },
  {
    id: 3,
    label: 'Partners',
    path: '/dashboard/partners',
    icon: 'handshake',
  },
  {
    id: 4,
    label: 'Analytics',
    path: '/dashboard/analytics',
    icon: 'monitoring',
  },
]

const route = useRoute()

const renderIcon = (iconName: string) => {
  return () => h('span', { class: 'material-symbols-rounded' }, iconName)
}

const menuOptions: MenuOption[] = items.map(item => ({
  key: item.id,
  label: () => h(RouterLink, { to: item.path }, { default: () => item.label }),
  icon: renderIcon(item.icon),
}))

const selectedKey = ref(items.find(item => item.path === route.path)?.id || 1)
</script>

<template>
  <div class="container">
    <LogoIcon class="logo" />
    <n-menu v-model:value="selectedKey" :options="menuOptions" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
}

.logo {
  margin: 40px 0;
  width: 100%;
}
</style>
