const express = require("express");
const app = express();
const productos = require("./public/products.js");
let preciofinal = 0;

const producto = require("./public/product.js");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("pages/index", { title: "Home" }));

app.get("/product/:id(\\d+)", (req, res) =>
  res.render("pages/product", {
    title: `Producto ${req.params.id}`,
    producto: producto,
  })
);

app.get("/cart", (req, res) =>
  res.render("pages/cart", { productos, preciofinal, title: "Carrito" })
);

app.get("/checkout", (req, res) =>
  res.render("pages/checkout", { title: "Pago" })
);

app.get("/register", (req, res) =>
  res.render("pages/register", { title: "Registro" })
);

app.get("/login", (req, res) => res.render("pages/login", { title: "Login" }));

app.get("/error", (req, res) => res.render("pages/error", { title: "404 !" }));

app.listen(3000, () => console.log("toy ready"));
