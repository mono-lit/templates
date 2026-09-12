<script setup lang="ts">
/**
 * Full-screen frosted-glass loading splash. Rendered during SSR (visible on
 * first paint) and removed by `app.vue` once Nuxt hydrates. Translucent white
 * with a backdrop blur, so the page content stays faintly visible behind it.
 */
</script>

<template>
  <div class="app-loader" role="status" aria-live="polite" aria-label="Loading">
    <div class="app-loader__bar" aria-hidden="true" />

    <div class="app-loader__card">
      <div class="app-loader__ring" aria-hidden="true">
        <div class="app-loader__dot"><span /></div>
      </div>

      <div class="app-loader__text">
        <div class="app-loader__title">Loading your workspace</div>
        <div class="app-loader__subtitle">Just a moment…</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-loader {
  /* rebrand here */
  --brand: #2563eb;
  --brand-2: #4f46e5;
  --fg: #0f172a;
  --muted: #475569;
  --track: rgba(37, 99, 235, 0.16);

  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--fg);
  font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  z-index: 2147483647;
  -webkit-font-smoothing: antialiased;

  /* frosted glass: translucent white + blur the content behind */
  background: rgba(255, 255, 255, 0.4);
  -webkit-backdrop-filter: blur(10px) saturate(135%);
  backdrop-filter: blur(10px) saturate(135%);
}

/* the glass card holding the spinner + text */
.app-loader__card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 18px 22px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.65);
  box-shadow:
    0 8px 30px rgba(2, 6, 23, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  backdrop-filter: blur(16px) saturate(160%);
}

.app-loader__bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  overflow: hidden;
  background: var(--track);
}
.app-loader__bar::after {
  content: "";
  position: absolute;
  inset: 0;
  width: 40%;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--brand), var(--brand-2));
  animation: app-loader-slide 1.15s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}

.app-loader__ring {
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: conic-gradient(from 90deg, transparent 0%, var(--brand) 78%, var(--brand-2) 100%);
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3px));
  mask: radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 3px));
  animation: app-loader-spin 0.95s linear infinite;
}

.app-loader__dot {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.app-loader__dot span {
  width: 10px;
  height: 10px;
  border-radius: 4px;
  background: linear-gradient(135deg, var(--brand), var(--brand-2));
  animation: app-loader-pulse 1.4s ease-in-out infinite;
}

.app-loader__text {
  text-align: center;
  display: grid;
  gap: 3px;
}
.app-loader__title {
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.2px;
}
.app-loader__subtitle {
  font-size: 11px;
  color: var(--muted);
  animation: app-loader-breathe 1.8s ease-in-out infinite;
}

@keyframes app-loader-spin { to { transform: rotate(360deg); } }
@keyframes app-loader-pulse {
  0%, 100% { transform: scale(0.82); opacity: 0.65; }
  50%      { transform: scale(1);    opacity: 1; }
}
@keyframes app-loader-breathe { 0%, 100% { opacity: 0.55; } 50% { opacity: 1; } }
@keyframes app-loader-slide {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(320%); }
}

@media (prefers-reduced-motion: reduce) {
  .app-loader__ring,
  .app-loader__dot span,
  .app-loader__subtitle,
  .app-loader__bar::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
  }
  .app-loader__bar::after { width: 100%; }
}
</style>
