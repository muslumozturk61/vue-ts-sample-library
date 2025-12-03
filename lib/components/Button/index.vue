<template>
  <button class="btn">
    {{ label || 'Default Button' }}
  </button>
</template> 
<script lang="ts" setup>

 defineProps<{
  label?: string;
}>();
</script>