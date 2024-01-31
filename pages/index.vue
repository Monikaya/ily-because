<template>
  <div>
    <h1>I love you because (of):</h1>
    <UButton variant="outline">
      Generate a Reason!
    </UButton>
    <code>
      <div>
        <p class="typing-effect">{{ thing }}</p>
      </div>
    </code>
  </div>
</template>

<script setup>
  import '~/assets/css/textEffect.css';
  const thing = await useFetch('/api/getRandomReason');
</script>