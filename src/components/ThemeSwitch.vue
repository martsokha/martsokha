<script setup lang="ts">
import { Monitor, Moon, Sun } from "lucide-vue-next";
import { onMounted, onUnmounted, ref } from "vue";
import { type ThemeMode, applyTheme, getStoredMode } from "@/utils/theme";

const mode = ref<ThemeMode>("auto");
let mediaQuery: MediaQueryList | null = null;
let mediaHandler: (() => void) | null = null;

const options: { value: ThemeMode; icon: typeof Sun }[] = [
	{ value: "light", icon: Sun },
	{ value: "auto", icon: Monitor },
	{ value: "dark", icon: Moon },
];

function setMode(newMode: ThemeMode) {
	mode.value = newMode;
	applyTheme(newMode);
}

onMounted(() => {
	mode.value = getStoredMode();
	applyTheme(mode.value);

	mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
	mediaHandler = () => {
		if (mode.value === "auto") applyTheme("auto");
	};
	mediaQuery.addEventListener("change", mediaHandler);
});

onUnmounted(() => {
	if (mediaQuery && mediaHandler) {
		mediaQuery.removeEventListener("change", mediaHandler);
	}
});
</script>

<template>
  <div class="flex items-center gap-0.5 p-1 rounded-lg bg-neutral-100 dark:bg-neutral-900">
    <button
      v-for="opt in options"
      :key="opt.value"
      @click="setMode(opt.value)"
      :class="[
        'p-1.5 rounded-md transition-colors',
        mode === opt.value
          ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 shadow-sm'
          : 'text-neutral-400 dark:text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300'
      ]"
      :aria-label="`Switch to ${opt.value} mode`"
    >
      <component :is="opt.icon" class="w-3.5 h-3.5" />
    </button>
  </div>
</template>
