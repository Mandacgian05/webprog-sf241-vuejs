<script>
  const app = Vue.createApp({
    data() {
      return {
        message: "Welcome to my personal website!",
        manyFoods: [
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=60",
          "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=500&q=60"
        ]
      };
    }
  });

  app.mount("#app");
  app.mount("#app2"); // SAME app, not a second app
</script>
