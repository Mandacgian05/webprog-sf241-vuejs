<template>
  <div class = "patola">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Coffee, pasta, pizza',
      message: 'I like Cappucino, carbonara, peperoni,'
      
      
    }
  }
};
</script>

<style>
.patola {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: Blue;
  }</style>