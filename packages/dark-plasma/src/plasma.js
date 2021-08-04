import renderFile from '../../dark-plasma-dom/src/PlasmaDOM.js';
import express from 'express'
import importCss from './css.js';
import * as router from '../../dark-plasma-router/src/index.js';

const app = express();

function renderCSS(fp) {
  return importCss(fp);
}

function createRoute(path, html) {
  router.createPath(path, html);
}

function render(fp, variables) {
  return renderFile(fp, variables)
}

function start(component, port) {
  try {
    app.get('/', (request, response) => {
      response.send(`${component}`); // Send component HTMl!
    });
    app.use(function(req, res){
      let paths = router.getRoutes();
      if (paths[`${req.url}`] == undefined) {
        if (paths['404']) {
          res.send(paths['404']); // If 404 exists
        }
      }
      else {
        res.send(paths[`${req.url}`])
      }
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
    render,
    createRoute
  }
}

