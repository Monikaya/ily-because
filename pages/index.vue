<template>
  <div>
    <h1>The quick brown fox</h1>
    <UButton variant="outline">
      {{ thing }}
    </UButton>
  </div>
</template>

<script setup>
  const thing = await getRandomReason();
</script>