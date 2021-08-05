import DarkPlasma from "dark-plasma.js"

let plasma = DarkPlasma();
let styles = plasma.renderCSS('./src/style.css')

export default function App() {
  return plasma.render('./src/App.plasma', {styles})
}