import fs from 'fs'; 

export function readFile(fp) {
  return fs.readFileSync(fp, {encoding: "utf-8"}); // ENCODING IS IMPORTANT
}