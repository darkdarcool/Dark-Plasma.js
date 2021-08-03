import jsx from 'react-jsx'
import fs from 'fs'
export default function render(fp, variables) {
  let template = fs.readFileSync(fp, 'utf-8');
  let client = jsx.server(template);
  return client(variables, {html: true});
}