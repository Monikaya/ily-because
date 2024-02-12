<template>
  <div>
    <h1>I love you because:</h1>
    <div @click="sillyReason()">
      <UButton variant="outline">
        Generate a Reason!
      </UButton>
    </div>
    <code>
      <div>
        <p class="typing-effect">{{ reason }}</p>
      </div>
    </code>
  </div>
</template>

<script setup>
  import '~/assets/css/textEffect.css';
  let reason = await sillyReason();
</script>

<script>
  async function sillyReason() {
    let reason = await useFetch('/api/read');
    return reason.data;
  }
</script>