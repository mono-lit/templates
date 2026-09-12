<script setup lang="ts">
import 'mono-helper/ui/sidebar'
import 'mono-helper/ui/menu'
import 'mono-helper/ui/nav'
import 'mono-helper/ui/card'
import 'mono-helper/ui/modal'
import 'mono-helper/ui/button'
import 'mono-helper/ui/chip'
import 'mono-helper/ui/input'
import 'mono-helper/ui/dropdown'

import { monoInject } from 'mono-utils/runtime'

const menuStore = useHostMenuStore()


const sidebar = monoInject<any[]>({
  key: 'app:sidebar',
  defaultValue: [],
})

watch(
  sidebar,
  (value) => {
    menuStore.additionalMenu = value
  },
  {
    immediate: true,
    deep: true,
  },
)
</script>

<template>
  <!-- `overflow-x-clip`, NOT `overflow-x-hidden`: when one axis is not `visible`
       the other computes from `visible` to `auto`, which would silently make this
       div a scroll container. The sticky <mono-nav> in the topbar would then stick
       inside THIS element rather than the viewport — and since the div's height is
       content-driven it never scrolls, so the nav would have no scroll range and
       just ride the page away. `clip` suppresses horizontal overflow the same way
       without creating a scroll container. -->
  <div class="bg-white relative overflow-x-clip w-full">
    <SharedLayoutSidebar />

    <div class="flex flex-col min-h-screen" style="margin-left: var(--mono-sidebar-left-width, 0px);">
      <SharedLayoutTopbar />

      <main class="flex-1 px-3 py-6">
        <RouterView />
      </main>
    </div>

    <SharedLayoutLogoutModal />
  </div>
</template>