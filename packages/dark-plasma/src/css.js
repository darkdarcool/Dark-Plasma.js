import { KeyObject } from 'crypto';
import cssToObject from 'css-to-object'
import { readFileSync } from 'fs'


export function importCss(fp) {
  let compiled = cssToObject(readFileSync(fp, { encoding: "utf-8" }), {camelCase: true,
    numbers: true});
  let keys = Object.keys(compiled);
  for (var i = 0; i < keys.length; i++) {
    let key = keys[i]
    key = `${key}`
    if (key.charAt(0) == ".") {
      key = key.replace(/./, "");
    }
    compiled[`${key}`] = compiled[`.${key}`];
    delete compiled[`.${key}`]
  }
  return compiled
}


