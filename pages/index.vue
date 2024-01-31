<template>
  <div>
    <h1>I love you because (of):</h1>
    <UButton variant="outline">
      Generate a Reason!
    </UButton>
    <code>
      <div>
        <p class="typing-effect">{{ sillyReason() }}</p>
      </div>
    </code>
  </div>
</template>

<script setup>
  import '~/assets/css/textEffect.css';
</script>

<script>
  function sillyReason() {
    const { reason } = useAsyncState(useFetch('/api/getReason'));
    return reason;
  }
</script>