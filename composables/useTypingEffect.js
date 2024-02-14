import { ref } from 'vue';

export const useTypingEffect = (targetElement, typeSpeed = 50) => {
  const displayString = ref('');
  let index = 0;

  const typeEffect = (text) => {
    displayString.value = text.slice(0, index);
    targetElement.value.textContent = displayString.value; // Update DOM
    index++;

    if (index > text.length) {
      clearInterval(intervalId);
    }
  };

  let intervalId;

  const startEffect = (newText) => {
    index = 0;
    displayString.value = '';
    clearInterval(intervalId);

    intervalId = setInterval(() => typeEffect(newText), typeSpeed); 
  };

  return { displayString, startEffect };
};