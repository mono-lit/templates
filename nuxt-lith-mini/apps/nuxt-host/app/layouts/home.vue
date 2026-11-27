<script setup lang="ts">
// mono-nav (shadow build) is registered in app/plugins/mono-shadow.{server,client}.ts
// so the Lit DOM shim is installed BEFORE the element evaluates on the server.
// Do NOT import shadow/light element modules here — a top-level <script setup>
// import runs on the server before any shim and throws `HTMLElement is not defined`.
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

    <!--
      `mono-sidebar-push` marks this as the layout content: the sidebar (@mono-lit/helper
      >= 0.1.6) publishes the width it pushes as `--mono-sidebar-left-push` on THIS element
      only (268 expanded, 64 rail, 0 for mobile temporary). It no longer writes
      `--mono-sidebar-left-width` on <html> unless `publish-root-width` is set — reading
      that one left the margin stuck on its fallback, so an expanded sidebar covered the page.
      The variable is written from client JS only (a no-op during SSR). The
      `.mono-sidebar-panel` is `position: fixed` (out of flow), so the 64px fallback matches
      the server-rendered default (desktop rail mode, collapsed → rail-width 64) and the very
      first paint already reserves the rail's space; JS then refines it.
    -->
    <div class="mono-host-main flex flex-col min-h-screen" mono-sidebar-push>
      <LayoutTopbar />

      <main class="flex-1 p-3">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
.mono-host-main {
  margin-left: var(--mono-sidebar-left-push, 64px);
  transition: margin-left 0.2s ease;
}
</style>
