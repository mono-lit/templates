<script setup lang="ts">
import { onMounted, onUnmounted, watch } from "vue";
import { useIdle } from "@vueuse/core";
import { monoCookie, monoJwt } from "mono-utils/runtime";
import appConfig from "@mono-host/datas/config";

const jwt = monoJwt();
const cookie = monoCookie();
const authStore = useAuthStore();

let timeoutId: number | undefined;
let wakeDebounceId: number | undefined;
let refreshing: Promise<void> | null = null;

const { idle } = useIdle(60_000); // 60 detik tanpa aktivitas = idle

const REFRESH_EARLY_MS = 60_000; // refresh 60 detik sebelum exp
const MIN_RECHECK_MS = 5_000;
const MAX_TIMEOUT_MS = 2_147_483_647;

function nowISO() {
  return new Date().toISOString();
}

function clearTimer() {
  if (timeoutId) window.clearTimeout(timeoutId);
  timeoutId = undefined;
}

function getExpMsFromCookie(cookieName: string) {
  const decode = jwt.cookieDecode<{ exp: number }>({ cookie: cookieName });
  const expSec = Number(decode?.exp);
  if (!Number.isFinite(expSec) || expSec <= 0) return null;
  return expSec * 1000;
}

function logTimer(label: string, expMs: number, waitMs?: number) {
  const now = Date.now();
  const remainingMs = expMs - now;

  console.log(`[JWT] ${label}`, {
    at: nowISO(),
    exp: new Date(expMs).toISOString(),
    remainingSec: Math.round(remainingMs / 1000),
    ...(waitMs != null
      ? {
          nextInSec: Math.round(waitMs / 1000),
          nextAt: new Date(now + waitMs).toISOString(),
        }
      : {}),
  });
}

function debounceWake(reason: string, ms = 250) {
  if (wakeDebounceId) window.clearTimeout(wakeDebounceId);
  wakeDebounceId = window.setTimeout(() => {
    wakeDebounceId = undefined;
    console.log("[JWT] wake -> scheduleNext()", { at: nowISO(), reason });
    scheduleNext();
  }, ms);
}

async function doRefreshOnce(reason: string) {
  if (refreshing) {
    console.log("[JWT] refresh skipped (lock)", { at: nowISO(), reason });
    return refreshing;
  }

  const beforeExpMs = getExpMsFromCookie(appConfig.authCookie.jwtRefresh);
  const token = cookie.get(appConfig.authCookie.jwt, true);

  console.log("[JWT] refresh start", {
    at: nowISO(),
    reason,
    beforeExp: beforeExpMs ? new Date(beforeExpMs).toISOString() : null,
    beforeRemainingSec: beforeExpMs ? Math.round((beforeExpMs - Date.now()) / 1000) : null,
    tokenLen: (token ?? "").length,
  });

  refreshing = (async () => {
    try {
      await authStore.refetchRefreshToken({ token: String(token) });

      // kasih 1 microtask supaya cookie write selesai (kadang membantu)
      await Promise.resolve();

      const afterExpMs = getExpMsFromCookie(appConfig.authCookie.jwtRefresh);

      console.log("[JWT] refresh done", {
        at: nowISO(),
        afterExp: afterExpMs ? new Date(afterExpMs).toISOString() : null,
        afterRemainingSec: afterExpMs ? Math.round((afterExpMs - Date.now()) / 1000) : null,
      });
    } catch (err) {
      console.log("[JWT] refresh ERROR", { at: nowISO(), err });
      throw err;
    } finally {
      refreshing = null;
    }
  })();

  return refreshing;
}

function scheduleNext() {
  clearTimer();

  const expMs = getExpMsFromCookie(appConfig.authCookie.jwtRefresh);
  if (!expMs) {
    console.log("[JWT] exp invalid / cookie missing", {
      at: nowISO(),
      cookieName: appConfig.authCookie.jwtRefresh,
    });
    return;
  }

  const remainingMs = expMs - Date.now();
  let waitMs = remainingMs - REFRESH_EARLY_MS;

  // kalau sudah mepet/terlambat -> refresh segera
  if (waitMs <= 0) {
    logTimer("refresh now (too close)", expMs, 0);

    void (async () => {
      await doRefreshOnce("too_close");
      scheduleNext();
    })();

    return;
  }

  waitMs = Math.max(waitMs, MIN_RECHECK_MS);
  waitMs = Math.min(waitMs, MAX_TIMEOUT_MS);

  logTimer("scheduled", expMs, waitMs);

  timeoutId = window.setTimeout(async () => {
    logTimer("timeout fired", expMs);
    await doRefreshOnce("timeout");
    scheduleNext();
  }, waitMs);
}

// events
function onFocus() {
  console.log("[JWT] focus", { at: nowISO() });
  debounceWake("focus");
}

function onVisibilityChange() {
  console.log("[JWT] visibilitychange", {
    at: nowISO(),
    state: document.visibilityState,
  });
  if (document.visibilityState === "visible") debounceWake("visible");
}

onMounted(() => {
  console.log("[JWT] mounted", { at: nowISO() });
  scheduleNext();
  window.addEventListener("focus", onFocus);
  document.addEventListener("visibilitychange", onVisibilityChange);
});

// idle -> active
watch(idle, (isIdle) => {
  console.log("[JWT] idle changed", { at: nowISO(), isIdle });
  if (!isIdle) debounceWake("idle->active");
});

onUnmounted(() => {
  console.log("[JWT] unmounted", { at: nowISO() });
  clearTimer();
  if (wakeDebounceId) window.clearTimeout(wakeDebounceId);

  window.removeEventListener("focus", onFocus);
  document.removeEventListener("visibilitychange", onVisibilityChange);
});
</script>

<template>

</template>
