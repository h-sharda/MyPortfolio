const express = require("express");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 8000;

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, "public")));

// Routes for different pages
app.get("/", (req, res) => res.render("home", { pageCSS: "home.css" }));
app.get("/about", (req, res) => res.render("about", { pageCSS: "about.css" }));
app.get("/projects", (req, res) => res.render("projects", { pageCSS: "projects.css" }));
app.get("/dsa", (req, res) => res.render("dsa", { pageCSS: "dsa.css" }));
app.get("/skills", (req, res) => res.render("skills", { pageCSS: "skills.css" }));
app.get("/gallery", (req, res) => res.render("gallery", { pageCSS: "gallery.css" }));

// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
