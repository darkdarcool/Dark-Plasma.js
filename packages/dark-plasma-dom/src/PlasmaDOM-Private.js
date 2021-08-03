/*


What is this file? Why is this important?

This is the file that gives private complations of file for the module, that can'tt be accessed by the user


*/

import jsx from 'react-jsx'
import fs from 'fs'
export default function renderProps(fp, variables) {
  var template = fs.readFileSync(fp, 'utf-8')
  , render = jsx.server(template);
  return render(variables); // By not allowing HTML, we can easily get props, and other data
}
