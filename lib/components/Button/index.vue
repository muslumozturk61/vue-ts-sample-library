<template>
  <button class="btn" @click="handleClick">
    {{ label || 'Default Button' }}
  </button>
</template> 
<script lang="ts" setup>

 defineProps<{
  label?: string;
}>();

const emit = defineEmits<{
  (e: 'click'): void;
}>();

const handleClick = () => {
    emit('click');
  
};
</script>