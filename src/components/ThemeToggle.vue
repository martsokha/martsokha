<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Sun, Moon } from "lucide-vue-next";

const isDark = ref(false);

function initTheme() {
  // Get stored theme or use system preference
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const shouldBeDark = stored ? stored === "dark" : prefersDark;

  // Apply theme
  isDark.value = shouldBeDark;
  if (shouldBeDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Store preference
  localStorage.setItem("theme", shouldBeDark ? "dark" : "light");
}

function toggleTheme() {
  isDark.value = !isDark.value;

  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}

onMounted(() => {
  initTheme();
});
</script>

<template>
  <button
    @click="toggleTheme"
    class="p-3 text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <!-- Sun icon (shown in dark mode) -->
    <Sun v-show="isDark" class="w-5 h-5" />

    <!-- Moon icon (shown in light mode) -->
    <Moon v-show="!isDark" class="w-5 h-5" />
  </button>
</template>
