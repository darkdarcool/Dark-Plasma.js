import DarkPlasma from "../../../packages/dark-plasma/src/plasma.js"

let plasma = DarkPlasma();
let styles = plasma.renderCSS('./src/style.css')


export default function About() {
  return plasma.render('./src/About.plasma', {styles})
}