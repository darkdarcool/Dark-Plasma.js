import cssToObject from 'css-to-object'
import { readFileSync } from 'fs'

export default function importCss(fp) {
  let compiled = cssToObject(readFileSync(fp, { encoding: "utf-8" }), {camelCase: true,
    numbers: true});
  return compiled
}

