<template>
  <div>
    {{ greet }}
    <NuxtWelcome />
  </div>
</template>

<script lang="ts">
export default defineComponent({
  setup() {
    const greet = ref('Hello Nuxt3');

    return {
      greet
    };
  }
});
</script>
