import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import hbs from "hbs";
import dotenv from "dotenv";
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT;

// Handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
// Servir contenido estatico
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Valentin",
    titulo: "Curso de node",
  });
});
app.get("/hola-mundo", (req, res) => {
  res.send(`Hola mundo en su respectiva ruta`);
});
app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Valentin",
    titulo: "Curso de node",
  });
});
app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Valentin",
    titulo: "Curso de node",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
