# Code_Alpha Secure Coding Review

This project demonstrates the difference between **insecure** and **secure** login implementations in client-side JavaScript.  
It is designed for **educational purposes only** and can be hosted directly on **GitHub Pages**.

---

## 🚀 Demo Overview
This page provides two versions of a login system:

### 🚨 Insecure Login
- Username & password are **hardcoded** in plain JavaScript.  
- Password is compared in **plaintext** (very unsafe).  

### ✅ Secure Login
- Password is hashed with **SHA-256** before checking.  
- Demonstrates a more secure approach (though real apps use bcrypt, Argon2, etc. on a server).  

---

## 🔑 Test Credentials
For demonstration purposes, the login details are **exposed on the page**:

- **Username:** `admin`  
- **Password:** `password123`  

⚠️ These credentials are deliberately exposed for demo and testing.

---

## 📂 Project Structure
secure-review-ghpages/
├── index.html # Main page with login form & descriptions
├── style.css # Responsive design (works on laptop & mobile)
└── app.js # Combined insecure & secure login logic

---

## 📌 What You’ll Learn
- ❌ Why hardcoding credentials in JavaScript is insecure  
- ❌ Why checking passwords in plaintext is dangerous  
- ✅ Why passwords should always be hashed before storage/checking  
- ✅ That real-world authentication must happen **server-side**, not only in the browser  

---

