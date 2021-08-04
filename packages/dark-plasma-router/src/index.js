var routes = {};

export function getRoutes() {
  return routes;
}

export function createPath(path, html) {
  routes[`${path}`] = html;
}