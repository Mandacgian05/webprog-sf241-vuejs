<template>
  <div class="app">
    <nav>
      <strong>GM.</strong>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Academic</a></li>
        <li><a href="#guestbook">Guestbook</a></li>
        <li><a href="#resources">Resources</a></li>
      </ul>
      <button class="toggle-btn" @click="toggleTheme">
        {{ isDark ? 'Light Mode' : 'Dark Mode' }}
      </button>
    </nav>

    <div class="container">
      <header class="hero">
        <div class="profile-container">
          <img
            class="profile-pic"
            src="https://i.ibb.co/CKc34syV/4cb49a5a-46be-4d58-9efa-6ef488a8db9a-1.jpg"
            alt="Gian Mandac"
          />
        </div>
        <h1>Gian Mandac</h1>
        <p>BS Computer Forensics | Cybersecurity Enthusiast</p>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <div class="card">
          <p>
            2nd-year Computer Forensics student focused on digital investigations and secure systems.
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

      <section id="guestbook">
        <h2>Guestbook</h2>
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
        <h2>Resources</h2>
        <div class="card">
          <table>
            <thead>
              <tr>
                <th>Resource</th>
                <th>Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>MDN Web Docs</td><td>Web Standards</td></tr>
              <tr><td>Vue.js Docs</td><td>Frontend Framework</td></tr>
              <tr><td>Kali Linux</td><td>Security Testing</td></tr>
            </tbody>
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
        { title: "Linux Server Hardening", description: "SSH and firewall configuration." }
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
      if (this.newComment.name.trim() && this.newComment.message.trim()) {
        this.comments.push({ ...this.newComment });
        this.newComment.name = "";
        this.newComment.message = "";
      }
    }
  },
  mounted() {
    document.body.dataset.theme = "light";
  }
};
</script>

<style scoped>
:root {
  --bg-primary: #f8fafc;
  --bg-secondary: #ffffff;
  --accent: #2563eb;
  --text-main: #1e293b;
  --text-muted: #64748b;
  --border: #e2e8f0;
  --card-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}

[data-theme="dark"] {
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --accent: #38bdf8;
  --text-main: #f1f5f9;
  --text-muted: #94a3b8;
  --border: #334155;
}

.app {
  min-height: 100vh;
  background-color: var(--bg-primary);
  color: var(--text-main);
  font-family: 'Inter', sans-serif;
  transition: background-color 0.3s ease;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border);
  position: sticky;
  top: 0;
  z-index: 10;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

nav a {
  text-decoration: none;
  color: var(--text-muted);
  font-weight: 500;
}

.hero {
  text-align: center;
  padding: 3rem 0;
}

.profile-container {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--accent);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.card {
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  box-shadow: var(--card-shadow);
}

section {
  margin-top: 3rem;
}

h2 {
  border-left: 4px solid var(--accent);
  padding-left: 1rem;
  margin-bottom: 1.5rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input, textarea {
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: var(--bg-primary);
  color: var(--text-main);
}

button {
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  border: none;
  background: var(--accent);
  color: white;
  cursor: pointer;
  font-weight: 600;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid var(--border);
}

footer {
  text-align: center;
  padding: 4rem 0 2rem;
  color: var(--text-muted);
}
</style>
