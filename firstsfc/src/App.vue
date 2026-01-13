<template>
  <h1>Coffee!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the documentation
  </p>
  
  <FoodItem /> 
  <FoodItem /> 
  <FoodItem /> 
  <FoodItem /> 
  <FoodItem />
  
</template>

<script setup>
  import FoodItem from './components/FoodItem.vue'
  
</script>

<style>
 #app > div {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: Blue;
  }
</style>