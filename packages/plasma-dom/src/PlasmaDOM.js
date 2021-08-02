import jsx from 'react-jsx'
import fs from 'fs'
export default function render(fp, variables) {
  var template = fs.readFileSync(fp, 'utf-8')
  , render = jsx.server(template);
  return render(variables, {html: true});
}
