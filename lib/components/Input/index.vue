<template>
    <input
      :type="type"
      :value="modelValue"
      @input="handleInput"
      :placeholder="placeholder"
    />
</template>

<script setup lang="ts">
// 1. Prop tiplerini bir interface veya type kullanarak tanımlayın.
interface Props {
  modelValue: string | number; // v-model için zorunlu prop
  type?: 'text' | 'number' | 'email' | 'search';
  placeholder?: string;
}

// 2. defineProps'u generic kullanarak tiplendirin.
withDefaults(defineProps<Props>(), {
  modelValue: '',
  label: '',
  type: 'text',
  placeholder: '',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
}>();

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  
  emit('update:modelValue', target.value);
};
</script>