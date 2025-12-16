# qoute-gen-js

# 📜 Random Quote Generator

A simple and clean **Random Quote Generator** built using **HTML, CSS, and JavaScript**.  
With one click, it displays a random motivational or programming-related quote along with the author.

---

## 🚀 Features

- 🎲 Generates a random quote on button click  
- ✍️ Displays quote text and author name  
- 🎨 Modern UI with gradient background and smooth button hover  
- ⚡ Beginner-friendly JavaScript logic  
- 📱 Responsive and centered layout  

---

## 🛠️ Technologies Used

- **HTML5** – Structure  
- **CSS3** – Styling & layout  
- **JavaScript (Vanilla)** – Logic & DOM manipulation  

---

## 📂 Project Structure

quote-generator/
│
├── index.html # HTML structure
├── style.css # Styling
├── script.js # JavaScript logic
└── README.md # Project documentation

yaml
Copy code

---

## ⚙️ How It Works

1. Quotes are stored in an **array of objects**
2. Each object contains:
   - `quote`
   - `author`
3. On button click:
   - A random index is generated
   - Quote text and author are updated in the DOM

---

## 🧠 JavaScript Logic (Core Idea)

```js
let index = Math.floor(Math.random() * quotes.length);
This line randomly selects a quote every time the button is clicked.

▶️ How to Run the Project
Download or clone the repository

Open index.html in your browser

Click New Quote

Enjoy 🎉

🌱 Future Improvements
Add quote categories

Add copy-to-clipboard button

Add animations

Fetch quotes from an API

Dark / Light mode toggle

🙌 Author
Created with ❤️ by JoystickJourney
Learning JavaScript step by step 🚀

📄 License
This project is open-source and free to use for learning purposes.