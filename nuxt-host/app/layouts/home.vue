<script setup lang="ts">
// mono-nav (shadow build) is registered in app/plugins/mono-shadow.{server,client}.ts
// so the Lit DOM shim is installed BEFORE the element evaluates on the server.
// Do NOT import shadow/light element modules here — a top-level <script setup>
// import runs on the server before any shim and throws `HTMLElement is not defined`.
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
    <LayoutSidebar />

    <!--
      `--mono-sidebar-left-width` is written by the sidebar element's client-side
      `_writeLayoutVar()` AFTER it connects/hydrates — it is a no-op during SSR.
      The `.mono-sidebar-panel` is `position: fixed` (out of flow), so on a fresh
      load/reload the panel paints over this content until that JS runs. The 64px
      fallback matches the server-rendered default (desktop rail mode, collapsed →
      rail-width 64) so the very first paint already reserves the rail's space and
      the fixed sidebar no longer stacks on top of the page. JS then refines it
      (268 when expanded, 0 for mobile temporary).
    -->
    <div class="flex flex-col min-h-screen" style="margin-left: var(--mono-sidebar-left-width, 64px);">
      <LayoutTopbar />

      <main class="flex-1 px-3 py-6">
        <slot />
      </main>
    </div>

  </div>
</template>
