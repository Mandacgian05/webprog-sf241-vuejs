<template>
  <div class="app">

    <nav>
      <strong>GM.</strong>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Academic</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#guestbook">Guestbook</a></li>
        <li><a href="#resources">Resources</a></li>
      </ul>
      <button class="toggle-btn" @click="toggleTheme">
        {{ isDark ? 'Light Mode' : 'Dark Mode' }}
      </button>
    </nav>

    <div class="container">

      <header class="hero">
        <img
          class="profile-pic"
          src="https://i.ibb.co/CKc34syV/4cb49a5a-46be-4d58-9efa-6ef488a8db9a-1.jpg"
        />
        <h1>Gian Mandac</h1>
        <p>BS Computer Forensics | Cybersecurity Enthusiast</p>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <div class="card">
          <p>
            2nd-year BS Computer Forensics student passionate about cybersecurity,
            digital investigations, and secure systems.
          </p>
        </div>
      </section>

      <section id="projects">
        <h2>Academic Projects</h2>
        <div class="grid">
          <div class="card" v-for="p in projects" :key="p.title">
            <h3>{{ p.title }}</h3>
            <p>{{ p.description }}</p>
          </div>
        </div>
      </section>

      <section id="gallery">
        <h2>Picture Gallery</h2>
        <div class="grid gallery">
          <div class="card" v-for="img in images" :key="img">
            <img :src="img" />
          </div>
        </div>
      </section>

      <section id="guestbook">
        <h2>Survey / Guestbook</h2>
        <div class="card">
          <form @submit.prevent="addComment">
            <input v-model="newComment.name" placeholder="Your Name" required />
            <textarea v-model="newComment.message" placeholder="Your Comment" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div class="grid" style="margin-top:1rem;">
          <div class="card" v-for="(c,i) in comments" :key="i">
            <strong>{{ c.name }}</strong>
            <p>{{ c.message }}</p>
          </div>
        </div>
      </section>

      <section id="resources">
        <h2>Resource Documentation</h2>
        <div class="card">
          <table>
            <tr><th>Resource</th><th>Usage</th></tr>
            <tr><td>MDN Web Docs</td><td>HTML, CSS, JavaScript</td></tr>
            <tr><td>Vue.js Docs</td><td>Vue 3 framework</td></tr>
            <tr><td>ChatGPT</td><td>Debugging & layout help</td></tr>
          </table>
        </div>
      </section>

    </div>

    <footer>
      <p>&copy; 2026 Gian Mandac</p>
    </footer>

  </div>
</template>

<script>


export default {
  name: "PersonalProfile",
  data() {
    return {
      isDark: false,
      projects: [
        { title: "Network Traffic Analysis", description: "Wireshark packet inspection." },
        { title: "Database Security Design", description: "Secure ERD and access control." },
        { title: "Linux Server Hardening", description: "SSH, firewall, permissions." }
      ],
      images: [
        "https://picsum.photos/400/300?1",
        "https://picsum.photos/400/300?2",
        "https://picsum.photos/400/300?3"
      ],
      newComment: { name: "", message: "" },
      comments: []
    };
  },
  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
      document.body.dataset.theme = this.isDark ? "dark" : "light";
    },
    addComment() {
      this.comments.push({ ...this.newComment });
      this.newComment.name = "";
      this.newComment.message = "";
    }
  },
  mounted() {
    document.body.dataset.theme = "light";
  }
};
</script>
<style> </style> 
