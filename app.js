// Utility: Hash password with SHA-256
async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

// Stored users (only for secure mode)
const storedUsers = {
  "admin": "ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f" // password123
};

// Renders login form depending on version
function renderForm(type) {
  const app = document.getElementById("app");

  if (type === "insecure") {
    app.innerHTML = `
      <h2>🚨 Insecure Login (Plain Password Check)</h2>
      <form onsubmit="return insecureLogin(event)">
        <input type="text" id="username" placeholder="Username" required>
        <input type="password" id="password" placeholder="Password" required>
        <button type="submit">Login</button>
      </form>
      <p id="message"></p>
    `;
  } else if (type === "secure") {
    app.innerHTML = `
      <h2>✅ Secure Login (Hashed Password Check)</h2>
      <form onsubmit="return secureLogin(event)">
        <input type="text" id="username" placeholder="Username" required>
        <input type="password" id="password" placeholder="Password" required>
        <button type="submit">Login</button>
      </form>
      <p id="message"></p>
    `;
  }
}

// Insecure login handler
function insecureLogin(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "password123") {
    setMessage("✅ Login Successful (but insecure!)", "green");
  } else {
    setMessage("❌ Invalid Credentials", "red");
  }
}

// Secure login handler
async function secureLogin(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (storedUsers[username]) {
    const hash = await hashPassword(password);
    if (hash === storedUsers[username]) {
      setMessage("✅ Secure Login Successful", "green");
      return;
    }
  }
  setMessage("❌ Invalid Credentials", "red");
}

// Utility to update message
function setMessage(text, color) {
  const msg = document.getElementById("message");
  msg.innerText = text;
  msg.style.color = color;
}
