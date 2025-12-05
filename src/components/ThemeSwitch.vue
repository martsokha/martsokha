<script setup lang="ts">
import { Moon, Sun } from "lucide-vue-next";
import { onMounted, ref } from "vue";
import {
  applyTheme,
  getThemePreference,
  observeThemeChanges,
} from "@/utils/theme";

const isDark = ref(false);

const toggleTheme = () => {
  try {
    isDark.value = !isDark.value;
    applyTheme(isDark.value);
  } catch (error) {
    console.error("Theme toggle error:", error);
    // Fallback to light mode on error
    isDark.value = false;
    applyTheme(false);
  }
};

onMounted(() => {
  try {
    const shouldBeDark = getThemePreference();
    isDark.value = shouldBeDark;

    // Apply theme and start observing changes
    applyTheme(shouldBeDark);
    observeThemeChanges();
  } catch (error) {
    console.error("Theme initialization error:", error);
    // Fallback to light mode on error
    isDark.value = false;
    applyTheme(false);
  }
});
</script>

<template>
  <button
    @click="toggleTheme"
    class="flex items-center space-x-2 px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 md:border-0 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors min-w-20"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <Sun
      v-if="!isDark"
      class="w-4 h-4 text-neutral-600 dark:text-neutral-400"
    />
    <Moon
      v-if="isDark"
      class="w-4 h-4 text-neutral-600 dark:text-neutral-400"
    />
    <span class="text-sm text-neutral-600 dark:text-neutral-400">
      {{ isDark ? "Dark" : "Light" }}
    </span>
  </button>
</template>
