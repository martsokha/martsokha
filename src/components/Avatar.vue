<script setup lang="ts">
import {
  Avatar as AvatarRoot,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

interface Props {
  src?: string;
  alt?: string;
  fallbackText?: string;
  size?: string;
  class?: string;
}

const {
  src = "/avatar.jpg",
  alt = "Avatar",
  fallbackText = "OM",
  size = "size-16",
  class: className = "",
} = defineProps<Props>();

// White/gray/black gradients for fallback
const gradients = [
  "bg-gradient-to-br from-white via-gray-200 to-gray-800",
  "bg-gradient-to-br from-gray-100 via-gray-400 to-black",
  "bg-gradient-to-br from-white via-gray-300 to-gray-900",
  "bg-gradient-to-br from-gray-200 via-gray-500 to-black",
  "bg-gradient-to-br from-white via-gray-400 to-gray-700",
];

const gradientClass = (() => {
  // Use fallbackText to consistently pick the same gradient
  const index = fallbackText.charCodeAt(0) % gradients.length;
  return gradients[index];
})();
</script>

<template>
  <AvatarRoot :class="`${size} ${className}`">
    <AvatarImage
      v-if="src"
      :src="src"
      :alt="alt"
      class="object-cover transition-opacity duration-300"
    />
    <AvatarFallback
      :class="`${gradientClass} text-white dark:text-black font-bold text-xl flex items-center justify-center`"
    >
      {{ fallbackText }}
    </AvatarFallback>
  </AvatarRoot>
</template>
