import render from "../../../packages/dark-plasma-dom/src/PlasmaDOM.js";
import importCss from "../../../packages/dark-plasma/src/css.js";

let styles = importCss('./src/style.css')

export default function App() {
  return render('./src/App.plasma', {styles: styles})
}