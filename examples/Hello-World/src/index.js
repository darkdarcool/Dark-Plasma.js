import DarkPlasma from "../../../packages/dark-plasma/src/plasma.js"
import App from './App.js';
import About from './About.js';
let plasma = DarkPlasma();

plasma.createRoute('/about', About());
plasma.createRoute('404', "<div> oh wow </div>")

plasma.start(App(), 8000);