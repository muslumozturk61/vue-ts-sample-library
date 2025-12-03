<template>
  <span class="label">
    {{ label || 'Default Label' }}
  </span>
</template> 
<script lang="ts" setup>

 defineProps<{
  label?: string;
}>();
</script>