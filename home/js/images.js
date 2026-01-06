const app2 = Vue.createApp({
  data() {
    return {
      manyFoods: [
        '../images/img_burrito.svg',
        '../images/img_salad.svg',
        '../images/img_cake.svg',
        '../images/img_soup.svg',
        '../images/img_fish.svg',
        '../images/img_pizza.svg',
        '../images/img_rice.svg'
      ]
    }
  }
})

app2.mount('#app2')
