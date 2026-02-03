import { createApp } from 'vue'
import App from './App.vue'

// Import global components
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
import PersonalProfile from './components/PersonalProfile.vue'
import CommentForm from './components/CommentForm.vue'
import Comment from './components/Comment.vue'
import RestApi from './components/RestApi.vue'

// Import Supabase client
import { supabase } from './supabaseClient'

// Optional: Make Supabase available globally in your app
const app = createApp(App)
app.config.globalProperties.$supabase = supabase

// Register global components
app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)
app.component('personal-profile', PersonalProfile)
app.component('comment-form', CommentForm)
app.component('comment', Comment)
app.component('rest-api', RestApi)

// Mount the app
app.mount('#app')
