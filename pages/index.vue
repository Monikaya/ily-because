<template>
  <div>
    <h1>I love you because (of):</h1>
    <div @click="typeNewReason()">
      <UButton variant="outline">
        Generate a Reason!
      </UButton>
    </div>
    <div class="reasonBox">
      <p ref="typingTarget"></p>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useTypingEffect } from '~/composables/useTypingEffect';

  let reason = await sillyReason();
  const typingTarget = ref(null); 
  const newString = ref(reason.value); // Initialize here 
  const { displayString, startEffect } = useTypingEffect(typingTarget);
  
  onMounted(() => {
    startEffect(newString.value);
  });

  async function typeNewReason() {
      console.log("henlo");
      let reason = await sillyReason();
      newString.value = reason.value;

      startEffect(newString.value);
    }
    async function sillyReason() {
      let reason = await useFetch('/api/get-random-reason');
      return reason.data;
    }
</script>
