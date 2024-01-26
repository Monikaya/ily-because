<template>
  <div>
    <h1>The quick brown fox</h1>
    <code>
      <div>
        <p class="typing-effect">FORTNITE WOOOO YIPPEEEE</p>
      </div>
    </code>
    <UButton variant="outline">
      {{ thing }}
    </UButton>
  </div>
</template>

<script setup>
  const thing = await getRandomReason();
</script>

<style scoped>
  code {
    background-color: #202129;
    border-radius: 4px;
    padding: 20px;
    height: 70px;
    color: white;
    display: flex;
    margin: 0 auto;
    align-items: center;
    width: 350px;
  }
  .typing-effect {
    width: 0;
    overflow: hidden; /* Ensure the text is not visible until the typewriter effect*/
    border-right: 2px solid white; /* The cursor*/
    font-size: 16px;
    white-space: nowrap; /* Keeps the text on a single line */
    animation: typing 2s steps(30) forwards, blink 1s infinite;
  }

  /* The typing animation */
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes blink {
    0%, 45% {
      border-color: transparent;
    }
    50%, 100% {
      border-color: white;
    }
  }
</style>