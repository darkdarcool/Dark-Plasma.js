import renderFile from '../../dark-plasma-dom/src/PlasmaDOM.js';
// import renderProps from '../../plasma-dom/src/PlasmaDOM-Private.js';
import express from 'express'

import importCss from './css';




const app = express();

function renderCSS(fp) {
  return importCss(fp);
}

function render(fp, variables) {
  return renderFile(fp, variables)
}

function start(component, port) {
  try {
    component = component.replace(/`/g, "\\`");
    app.get('/', (request, response) => {
      response.send(`<div id = "root"><script>document.getElementById("root").innerHTML = \`${component}\`</script>`);
    });
    app.listen(port, () => {
      console.log("✨ Running! 🚀 ")
    });
  } catch(err) {
    console.error(err)
  }
}

export default function DarkPlasma() {
  return {
    start,
    renderCSS,
    render
  }
}