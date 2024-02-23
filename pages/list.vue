<template>
  <div>
    <h1>I love you because (of) all of these reasons:</h1>
    <br>
  </div>
  <div>
    <ol id="listContainer">
      <!--Lol reasons insert here-->
    </ol>
  </div>
</template>

<script setup>
let reasonList = await getReasonList();
console.log(reasonList);

onMounted(() => {
  const listContainer = document.getElementById('listContainer');

  reasonList.value.forEach((reason) => {
    const listItem = document.createElement('li');
    listItem.textContent = reason;
    listContainer.appendChild(listItem);
  })
})

async function getReasonList() {
  let reasonList = await useFetch('/api/get-reason-list');
  return reasonList.data;
}

</script>