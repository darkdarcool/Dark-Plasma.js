import renderFile from '../../dark-plasma-dom/src/PlasmaDOM.js';
import express from 'express'
import * as css from './css.js';
import * as router from '../../dark-plasma-router/src/index.js';
import { readFileSync } from 'fs';

const app = express();

var main = []

function renderCSS(fp) {
  return css.importCss(fp);
}

function stylesheet(fp) {
  main.push(readFileSync(fp, {encoding: "utf-8"}))
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
      response.send(`<style>\n\n${main.join('\n')}</style>\n\n${component}`); // Send component HTMl!
    });
    app.use(function(req, res){
      let paths = router.getRoutes();
      if (paths[`${req.url}`] == undefined) {
        if (paths['404']) {
          res.send(paths['404']); // If 404 exists
        }
      }
      else {
        res.send(`<style>\n\n${main.join('\n')}</style>\n\n${paths[`${req.url}`]}`)
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
    createRoute,
    stylesheet
  }
}

