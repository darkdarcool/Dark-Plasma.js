var routes = {};

export function getRoutes() {
  return routes;
}

export function createPath(path, html) {
  if (isNaN(path)) {
    console.log("Cannot name path after HTML 404 codes. Use createErrPath()")
    process.exit(0)
  }
  routes[`${path}`] = html;
}

export function createErrPath(path, html) {
  if (typeof path !== number) {
    console.log("Must be HTML err code")
    process.exit(0)
  }
  routes[`${path}`] = html; // Must be string for path in routes because that is how plasma start calls/finds it!
}