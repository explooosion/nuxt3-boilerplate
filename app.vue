<template>
  <div>
    <div class="flex items-center justify-center gap-3 mt-4">
      <div class="text-lg text-gray-300">{{ $t('welcome') }}</div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="onSetLocale('en-us')"
      >
        English
      </button>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="onSetLocale('zh-tw')"
      >
        繁體中文
      </button>
    </div>
    <NuxtWelcome />
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { setLocale } = useI18n();

const onSetLocale = (key: string) => {
  setLocale(key);
};
</script>
