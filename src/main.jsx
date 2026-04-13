/**
 * Entry point of application - Frip&Drip Streetwear Boutique
 */

import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";

const THEME_STORAGE_KEY = "site-theme";
const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
const initialTheme =
  savedTheme === "light" || savedTheme === "dark"
    ? savedTheme
    : "light";
document.body.classList.add(initialTheme === "light" ? "theme-light" : "theme-dark");

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
