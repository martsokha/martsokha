<script setup lang="ts">
import { Moon, Sun } from "lucide-vue-next";
import { onMounted, ref } from "vue";

const isDark = ref(false);

const toggleTheme = () => {
  try {
    isDark.value = !isDark.value;

    // Force remove any existing theme classes first
    document.documentElement.classList.remove("dark", "light");

    if (isDark.value) {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  } catch (error) {
    console.error("Theme toggle error:", error);
    // Fallback to light mode on error
    isDark.value = false;
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
};

onMounted(() => {
  try {
    // Check for saved theme preference or default to system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const shouldBeDark = savedTheme ? savedTheme === "dark" : systemPrefersDark;

    // Force remove any existing theme classes first
    document.documentElement.classList.remove("dark", "light");

    if (shouldBeDark) {
      isDark.value = true;
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      isDark.value = false;
      document.documentElement.classList.add("light");
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  } catch (error) {
    console.error("Theme initialization error:", error);
    // Fallback to light mode on error
    isDark.value = false;
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
});
</script>

<template>
  <button
    @click="toggleTheme"
    class="flex items-center space-x-2 px-3 py-2 rounded-lg border border-transparent hover:bg-neutral-100 dark:hover:bg-black dark:hover:border-neutral-700 transition-colors min-w-20"
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
