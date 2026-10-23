<script setup lang="ts">
import '@mono-lit/helper/ui/sidebar'
import '@mono-lit/helper/ui/menu'
import '@mono-lit/helper/ui/nav'
import '@mono-lit/helper/ui/card'
import '@mono-lit/helper/ui/modal'
import '@mono-lit/helper/ui/button'
import '@mono-lit/helper/ui/chip'
import '@mono-lit/helper/ui/input'
import '@mono-lit/helper/ui/dropdown'

import { monoInject } from '@mono-lit/utility/runtime'

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
  <div class="bg-[var(--background)] text-[var(--foreground)] relative overflow-x-clip w-full">
    <LayoutSidebar />

    <div class="flex flex-col min-h-screen" style="margin-left: var(--mono-sidebar-left-width, 0px);">
      <LayoutTopbar />

      <main class="flex-1 p-3">
        <RouterView />
      </main>
    </div>
  </div>
</template>